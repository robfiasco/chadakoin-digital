# Deploy to Your VPS - Step by Step

This guide will walk you through deploying the Chadakoin Digital website to your VPS where CDIR is running.

## Prerequisites

- SSH access to your VPS
- Your VPS IP address or domain name
- Node.js installed on VPS
- PM2 installed on VPS (or we'll install it)
- Nginx running on VPS

## Step 1: Prepare Your Local Machine

Open terminal in the `chadakoin-digital` directory:

```bash
cd chadakoin-digital

# Install dependencies if you haven't
npm install

# Build the production version
npm run build
```

This creates the `.next/standalone` folder with your production-ready site.

## Step 2: Transfer Files to VPS

**Option A: Using the deployment script (easiest)**

1. Edit `deploy-to-vps.sh` and update these lines:
   ```bash
   VPS_USER="your-username"        # Your SSH username
   VPS_HOST="your-vps-ip"          # Your VPS IP or domain
   VPS_PATH="/var/www/chadakoin-digital"
   DOMAIN="chadakoindigital.com"   # Your domain
   ```

2. Run the script:
   ```bash
   ./deploy-to-vps.sh
   ```

**Option B: Manual transfer**

```bash
# Replace with your actual VPS details
VPS_USER="your-username"
VPS_HOST="your-vps-ip"

# Create directory on VPS
ssh $VPS_USER@$VPS_HOST "mkdir -p /var/www/chadakoin-digital"

# Transfer files
rsync -avz .next/standalone/ $VPS_USER@$VPS_HOST:/var/www/chadakoin-digital/
rsync -avz .next/static $VPS_USER@$VPS_HOST:/var/www/chadakoin-digital/.next/
rsync -avz public $VPS_USER@$VPS_HOST:/var/www/chadakoin-digital/
```

## Step 3: Start the Application on VPS

SSH into your VPS:

```bash
ssh your-username@your-vps-ip
```

Once on the VPS:

```bash
# Navigate to the site directory
cd /var/www/chadakoin-digital

# Install PM2 if not already installed
sudo npm install -g pm2

# Start the application
pm2 start server.js --name chadakoin-digital

# Save PM2 configuration
pm2 save

# Set PM2 to start on boot (if not already done)
pm2 startup
# Follow the command it gives you (usually need to copy/paste a sudo command)
```

Check that it's running:
```bash
pm2 list
pm2 logs chadakoin-digital
```

Your site should now be running on `http://localhost:3000` on the VPS.

## Step 4: Configure Nginx

Still on your VPS, create an Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/chadakoin-digital
```

Paste this configuration (adjust domain name):

```nginx
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

    # Optional: Add caching for static files
    location /_next/static {
        proxy_pass http://localhost:3000/_next/static;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }
}
```

Save and exit (Ctrl+X, then Y, then Enter).

Enable the site:

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/chadakoin-digital /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx
```

## Step 5: Set Up SSL with Let's Encrypt

```bash
# Install certbot if not already installed
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d chadakoindigital.com -d www.chadakoindigital.com
```

Follow the prompts. Certbot will automatically update your Nginx config to use HTTPS.

## Step 6: Point Your Domain

In your domain registrar's DNS settings, add/update these records:

**A Records:**
- Name: `@` → Points to: `your-vps-ip`
- Name: `www` → Points to: `your-vps-ip`

DNS can take up to 24-48 hours to propagate, but usually happens within an hour.

## Step 7: Test Your Site

Visit your domain:
- http://chadakoindigital.com (should redirect to HTTPS)
- https://chadakoindigital.com (should show your site)

## Useful PM2 Commands

```bash
# View all running apps
pm2 list

# View logs
pm2 logs chadakoin-digital

# Restart the app
pm2 restart chadakoin-digital

# Stop the app
pm2 stop chadakoin-digital

# View detailed info
pm2 show chadakoin-digital

# Monitor resources
pm2 monit
```

## Updating Your Site

When you make changes:

```bash
# On your local machine:
cd chadakoin-digital
npm run build

# Transfer new files
rsync -avz .next/standalone/ user@vps:/var/www/chadakoin-digital/
rsync -avz .next/static user@vps:/var/www/chadakoin-digital/.next/
rsync -avz public user@vps:/var/www/chadakoin-digital/

# On VPS:
ssh user@vps
pm2 restart chadakoin-digital
```

Or just run the deployment script again:
```bash
./deploy-to-vps.sh
```

## Troubleshooting

### Site not accessible
- Check PM2: `pm2 list` - should show "online"
- Check logs: `pm2 logs chadakoin-digital`
- Check Nginx: `sudo nginx -t` then `sudo systemctl status nginx`
- Check firewall: `sudo ufw status` - ports 80 and 443 should be open

### 502 Bad Gateway
- App not running: `pm2 restart chadakoin-digital`
- Wrong port in Nginx config (should be 3000)
- Check logs: `pm2 logs chadakoin-digital`

### DNS not resolving
- Wait longer (can take 24-48 hours)
- Check DNS records in your domain registrar
- Test with `dig chadakoindigital.com` or `nslookup chadakoindigital.com`

### Port 3000 already in use
Check what's using it:
```bash
sudo lsof -i :3000
```

Change port if needed:
```bash
PORT=3001 pm2 start server.js --name chadakoin-digital
# Then update Nginx config to proxy_pass http://localhost:3001
```

## Running Alongside CDIR

Since CDIR is already on your VPS, this setup will work fine:
- CDIR runs on its port (probably 8080 or similar)
- Chadakoin Digital runs on port 3000
- Nginx routes traffic based on domain:
  - `cdir.robmadruga.com` → CDIR's port
  - `chadakoindigital.com` → port 3000

They won't conflict with each other!

## Need Help?

If you run into issues:
1. Check PM2 logs: `pm2 logs chadakoin-digital`
2. Check Nginx error log: `sudo tail -f /var/log/nginx/error.log`
3. Verify the app runs locally: `cd /var/www/chadakoin-digital && node server.js`

---

Good luck with your deployment! 🚀
