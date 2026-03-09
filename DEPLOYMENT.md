# VPS Deployment Guide for Chadakoin Digital Website

This guide covers deploying the Next.js site to your VPS where you're already running CDIR.

## Prerequisites

- VPS with Ubuntu/Debian
- Node.js 18+ installed
- Nginx installed and configured
- PM2 installed (for process management)
- Domain pointing to your VPS

## Quick Deployment Steps

### 1. Build the Project Locally

```bash
# Navigate to project directory
cd chadakoin-digital

# Install dependencies
npm install

# Create production build
npm run build
```

This creates a standalone build optimized for production.

### 2. Transfer to VPS

```bash
# Create directory on VPS (if needed)
ssh user@your-vps "mkdir -p /var/www/chadakoin-digital"

# Transfer the standalone build
scp -r .next/standalone/* user@your-vps:/var/www/chadakoin-digital/

# Transfer static files
scp -r .next/static user@your-vps:/var/www/chadakoin-digital/.next/

# Transfer public files
scp -r public user@your-vps:/var/www/chadakoin-digital/
```

**Alternative**: Use rsync for faster transfers (especially on updates):
```bash
rsync -avz --exclude 'node_modules' .next/standalone/* user@your-vps:/var/www/chadakoin-digital/
rsync -avz .next/static user@your-vps:/var/www/chadakoin-digital/.next/
rsync -avz public user@your-vps:/var/www/chadakoin-digital/
```

### 3. Start the Application on VPS

SSH into your VPS:
```bash
ssh user@your-vps
```

Navigate to the app directory:
```bash
cd /var/www/chadakoin-digital
```

Start with PM2:
```bash
# Start the app (runs on port 3000 by default)
pm2 start server.js --name chadakoin-digital

# Or specify a different port if needed
PORT=3001 pm2 start server.js --name chadakoin-digital

# Save PM2 configuration
pm2 save

# View status
pm2 list
```

### 4. Configure Nginx

If you already have Nginx running for CDIR, add a new server block.

Create configuration file:
```bash
sudo nano /etc/nginx/sites-available/chadakoin-digital
```

**Option A: Main Domain Configuration**
```nginx
server {
    listen 80;
    server_name chadakoindigital.com www.chadakoindigital.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name chadakoindigital.com www.chadakoindigital.com;

    # SSL Configuration (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/chadakoindigital.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/chadakoindigital.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Proxy to Next.js app
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

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
}
```

**Option B: Subdomain Configuration** (if using subdomain like www.robmadruga.com)
```nginx
server {
    listen 80;
    server_name www.robmadruga.com;

    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.robmadruga.com;

    ssl_certificate /etc/letsencrypt/live/robmadruga.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/robmadruga.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

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
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/chadakoin-digital /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl reload nginx
```

### 5. SSL Certificate with Let's Encrypt

If you don't have SSL yet:
```bash
sudo certbot --nginx -d chadakoindigital.com -d www.chadakoindigital.com
```

Certbot will automatically update your Nginx configuration with SSL settings.

To renew certificates (set up auto-renewal):
```bash
sudo certbot renew --dry-run
```

### 6. Firewall Configuration

Ensure ports are open:
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw enable
```

## Updating the Site

When you make changes:

```bash
# 1. Build locally
npm run build

# 2. Transfer to VPS
rsync -avz .next/standalone/* user@your-vps:/var/www/chadakoin-digital/
rsync -avz .next/static user@your-vps:/var/www/chadakoin-digital/.next/
rsync -avz public user@your-vps:/var/www/chadakoin-digital/

# 3. Restart on VPS
ssh user@your-vps "pm2 restart chadakoin-digital"
```

## Monitoring & Maintenance

### View Application Logs
```bash
pm2 logs chadakoin-digital
```

### Monitor Performance
```bash
pm2 monit
```

### Restart Application
```bash
pm2 restart chadakoin-digital
```

### Stop Application
```bash
pm2 stop chadakoin-digital
```

### Remove from PM2
```bash
pm2 delete chadakoin-digital
```

## Troubleshooting

### Port Already in Use

Check what's using port 3000:
```bash
sudo lsof -i :3000
```

Kill the process or use a different port:
```bash
PORT=3001 pm2 start server.js --name chadakoin-digital
```

### Nginx 502 Bad Gateway

- Check if the app is running: `pm2 list`
- Check app logs: `pm2 logs chadakoin-digital`
- Verify the port in Nginx config matches the app port
- Restart Nginx: `sudo systemctl restart nginx`

### Permission Issues

Ensure proper ownership:
```bash
sudo chown -R $USER:$USER /var/www/chadakoin-digital
```

### Build Errors

If the standalone build has issues:
```bash
# Clean and rebuild
rm -rf .next
npm run build
```

## Performance Optimization

### Enable Nginx Caching

Add to your Nginx server block:
```nginx
# Cache static assets
location /_next/static {
    alias /var/www/chadakoin-digital/.next/static;
    expires 365d;
    access_log off;
}

location /public {
    alias /var/www/chadakoin-digital/public;
    expires 7d;
    access_log off;
}
```

### PM2 Cluster Mode

For better performance on multi-core servers:
```bash
pm2 start server.js --name chadakoin-digital -i max
```

## Backup Strategy

Set up automated backups:
```bash
# Create backup script
nano ~/backup-chadakoin.sh
```

Add:
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/chadakoin-digital"
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/chadakoin-$DATE.tar.gz /var/www/chadakoin-digital
find $BACKUP_DIR -name "chadakoin-*.tar.gz" -mtime +7 -delete
```

Make executable and add to cron:
```bash
chmod +x ~/backup-chadakoin.sh
crontab -e
# Add: 0 2 * * * /home/user/backup-chadakoin.sh
```

## Domain Configuration

Point your domain DNS to your VPS IP:

**A Records:**
- `@` → Your VPS IP
- `www` → Your VPS IP

**CNAME Records** (alternative):
- `www` → `chadakoindigital.com`

Wait for DNS propagation (up to 24-48 hours).

## Running Alongside CDIR

Since CDIR is already running on your VPS, this site will run on port 3000 (or another port you specify). Nginx will route traffic based on the domain name, so both can coexist without conflicts.

Example configuration with both:
- `cdir.robmadruga.com` → port 8080 (CDIR)
- `chadakoindigital.com` → port 3000 (this site)

---

**Questions?**

If you run into issues during deployment, check:
1. PM2 logs: `pm2 logs chadakoin-digital`
2. Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. System logs: `journalctl -u nginx -f`
