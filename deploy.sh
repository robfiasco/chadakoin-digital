#!/bin/bash

# Chadakoin Digital - Quick Deployment Script
# This script builds and prepares the site for VPS deployment

set -e  # Exit on error

echo "🚀 Building Chadakoin Digital website..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next

# Build the project
echo "🔨 Building production version..."
npm run build

echo ""
echo "✅ Build complete!"
echo ""
echo "📋 Next steps:"
echo "1. Transfer to VPS:"
echo "   rsync -avz .next/standalone/* user@your-vps:/var/www/chadakoin-digital/"
echo "   rsync -avz .next/static user@your-vps:/var/www/chadakoin-digital/.next/"
echo "   rsync -avz public user@your-vps:/var/www/chadakoin-digital/"
echo ""
echo "2. Restart on VPS:"
echo "   ssh user@your-vps 'pm2 restart chadakoin-digital'"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
