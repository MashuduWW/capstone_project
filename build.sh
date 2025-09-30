#!/bin/bash

# Install dependencies
pip install -r requirements.txt
npm install

# Build Tailwind CSS (using the CLI approach that works)
npm run build

# Collect static files
python manage.py collectstatic --noinput

# Run migrations
python manage.py migrate