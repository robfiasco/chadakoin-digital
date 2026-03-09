#!/bin/bash

# Chadakoin Digital Website - VPS Deployment Script
# This script will help you deploy the Next.js site to your VPS

set -e  # Exit on error

echo "🚀 Chadakoin Digital Website Deployment"
echo "========================================"
echo ""

# Variables - CUSTOMIZE THESE
VPS_USER="your-username"
VPS_HOST="your-vps-ip-or-domain"
VPS_PATH="/var/www/chadakoin-digital"
DOMAIN="chadakoindigital.com"  # Change to your actual domain

echo "⚙️  Configuration:"
echo "   VPS User: $VPS_USER"
echo "   VPS Host: $VPS_HOST"
echo "   VPS Path: $VPS_PATH"
echo "   Domain: $DOMAIN"
echo ""

read -p "Is this configuration correct? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Please edit this script and update the variables at the top."
    exit 1
fi

# Step 1: Build the project
echo ""
echo "📦 Step 1: Building the project..."
echo "=================================="

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

echo "Building Next.js..."
npm run build

if [ ! -d ".next/standalone" ]; then
    echo "❌ Build failed - .next/standalone directory not found"
    exit 1
fi

echo "✅ Build complete!"

# Step 2: Create directory on VPS
echo ""
echo "📁 Step 2: Creating directory on VPS..."
echo "========================================"

ssh $VPS_USER@$VPS_HOST "mkdir -p $VPS_PATH"

echo "✅ Directory created!"

# Step 3: Transfer files
echo ""
echo "📤 Step 3: Transferring files to VPS..."
echo "========================================"

echo "Transferring standalone build..."
rsync -avz --progress .next/standalone/ $VPS_USER@$VPS_HOST:$VPS_PATH/

echo "Transferring static files..."
rsync -avz --progress .next/static $VPS_USER@$VPS_HOST:$VPS_PATH/.next/

echo "Transferring public files..."
rsync -avz --progress public $VPS_USER@$VPS_HOST:$VPS_PATH/

echo "✅ Files transferred!"

# Step 4: Set up PM2 on VPS
echo ""
echo "🔧 Step 4: Setting up PM2 on VPS..."
echo "===================================="

ssh $VPS_USER@$VPS_HOST << 'ENDSSH'
cd /var/www/chadakoin-digital

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "PM2 not found. Installing PM2..."
    sudo npm install -g pm2
fi

# Stop existing instance if running
pm2 stop chadakoin-digital 2>/dev/null || true
pm2 delete chadakoin-digital 2>/dev/null || true

# Start the application
echo "Starting application with PM2..."
pm2 start server.js --name chadakoin-digital

# Save PM2 configuration
pm2 save

# Set up PM2 to start on boot (only needs to be done once)
pm2 startup || true

echo "✅ PM2 setup complete!"
ENDSSH

echo "✅ Application is now running!"

# Step 5: Nginx configuration
echo ""
echo "🌐 Step 5: Nginx Configuration"
echo "==============================="
echo ""
echo "Next, you need to configure Nginx. Here's what to do:"
echo ""
echo "1. Create Nginx config file:"
echo "   sudo nano /etc/nginx/sites-available/chadakoin-digital"
echo ""
echo "2. Paste this configuration:"
echo ""
cat << 'EOF'
server {
    listen 80;
    server_name chadakoindigital.com www.chadakoindigital.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF
echo ""
echo "3. Enable the site:"
echo "   sudo ln -s /etc/nginx/sites-available/chadakoin-digital /etc/nginx/sites-enabled/"
echo ""
echo "4. Test Nginx configuration:"
echo "   sudo nginx -t"
echo ""
echo "5. Reload Nginx:"
echo "   sudo systemctl reload nginx"
echo ""
echo "6. Set up SSL with Let's Encrypt:"
echo "   sudo certbot --nginx -d chadakoindigital.com -d www.chadakoindigital.com"
echo ""

# Final status check
echo ""
echo "✅ Deployment Complete!"
echo "======================="
echo ""
echo "Your site should now be running at http://$VPS_HOST:3000"
echo ""
echo "Useful commands:"
echo "  - Check status: ssh $VPS_USER@$VPS_HOST 'pm2 status'"
echo "  - View logs: ssh $VPS_USER@$VPS_HOST 'pm2 logs chadakoin-digital'"
echo "  - Restart: ssh $VPS_USER@$VPS_HOST 'pm2 restart chadakoin-digital'"
echo ""
echo "After configuring Nginx and SSL, your site will be available at:"
echo "  https://$DOMAIN"
echo ""
