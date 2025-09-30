#!/usr/bin/env bash
# Exit on error
set -e

# Install Python dependencies
pip install -r requirements.txt

# Install NPM dependencies
npm install

# Build Tailwind / Vite assets
npm run build

# Collect Django static files
python manage.py collectstatic --no-input
