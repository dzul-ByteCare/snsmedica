# SNS Medica — Drupal 9.5.7 production image for Coolify
#
# IMPORTANT: Drupal 9.5 requires PHP 8.0/8.1. Do NOT bump this to PHP 8.2+
# without first upgrading Drupal core to 10/11.
FROM php:8.1-apache

# --- PHP extensions required by Drupal 9 + this site's contrib modules ---
# (curl, mbstring, openssl, fileinfo, iconv, sodium, xml are already bundled
# in the official php image; these have to be compiled in)
RUN apt-get update && apt-get install -y --no-install-recommends \
        libfreetype6-dev \
        libicu-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libzip-dev \
        default-mysql-client \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pdo_mysql intl zip opcache exif sockets

# --- Apache vhost: docroot is web/ (Composer relocated docroot) ---
# AllowOverride All so Drupal's .htaccess (clean URLs, file protection) works.
COPY deploy/vhost.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite headers expires

# --- PHP runtime limits for Drupal ---
RUN { \
      echo 'memory_limit=256M'; \
      echo 'max_execution_time=120'; \
      echo 'upload_max_filesize=64M'; \
      echo 'post_max_size=64M'; \
      echo 'date.timezone=UTC'; \
    } > /usr/local/etc/php/conf.d/drupal.ini

# --- Site code (vendor/ is committed, so no composer install is needed) ---
COPY sns/ /var/www/html/

# Stash a seed copy of the exported files/ so the entrypoint can populate the
# persistent volume on first boot (sites/default/files is a Coolify volume).
RUN mv /var/www/html/web/sites/default/files /seed-files

COPY deploy/entrypoint.sh /usr/local/bin/sns-entrypoint.sh
RUN chmod +x /usr/local/bin/sns-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["sns-entrypoint.sh"]
CMD ["apache2-foreground"]
