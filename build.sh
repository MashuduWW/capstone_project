#!/usr/bin/env bash
# exit on error
set -o errexit

echo "💻 Upgrading pip and installing Python dependencies..."
python -m pip install --upgrade pip
pip install -r requirements.txt

echo "📦 Installing Node dependencies..."
npm install

echo "🎨 Building Tailwind CSS..."
export NODE_ENV=production
npm run build:css

echo "🗂 Collecting static files..."
python manage.py collectstatic --no-input --clear

echo "🛠 Applying migrations..."
python manage.py migrate
