#!/bin/sh
# SNS Medica container entrypoint.
#
# /var/www/html/web/sites/default/files is a persistent volume on Coolify.
# The Dockerfile stashes the exported files in /seed-files; copy them into
# the volume on boot without ever overwriting files already present there.
set -e

FILES_DIR="/var/www/html/web/sites/default/files"

mkdir -p "$FILES_DIR"

if [ -d /seed-files ]; then
  # -a preserves timestamps/permissions, -n never overwrites existing files.
  cp -an /seed-files/. "$FILES_DIR"/ || true
fi

# Private filesystem (settings.php: file_private_path)
mkdir -p "$FILES_DIR/private" || true

chown -R www-data:www-data "$FILES_DIR" || true

exec "$@"
