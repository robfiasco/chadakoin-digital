# Chadakoin Digital Website

Modern, dark-themed Next.js website for Chadakoin Digital - a web/app development business serving Jamestown, NY and Chautauqua County.

## 🎨 Design Philosophy

**Dark, modern aesthetic** matching the CDIR (Chadakoin Digital Internet Radio) project with:
- Navy/dark blue gradient backgrounds
- Electric blue, cyan, and purple accent colors
- Smooth animations and transitions
- Glass morphism effects
- Custom gradient text and borders

**Direct, honest messaging** that:
- Calls out real problems local businesses face
- Positions as the local developer who understands Jamestown
- Shows real working projects as proof of capability
- Emphasizes human connection over corporate BS

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Outfit (display/body) and IBM Plex Mono (code)
- **Deployment**: VPS-ready with standalone output

## 📁 Project Structure

```
chadakoin-digital/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page combining all sections
│   └── globals.css       # Global styles with custom animations
├── components/
│   ├── Navigation.tsx    # Sticky nav with smooth scroll
│   ├── Hero.tsx          # Hero section with CDIR embed
│   ├── TheProblem.tsx    # Pain points section
│   ├── Portfolio.tsx     # Project showcase
│   ├── Services.tsx      # Services framed as solutions
│   ├── WhyLocal.tsx      # Local presence emphasis
│   ├── Contact.tsx       # Contact form and info
│   └── Footer.tsx        # Footer with links
├── public/               # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🌐 Production Build

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

## 🚢 VPS Deployment

This site is configured for deployment to a VPS with Nginx.

### Build for Production

```bash
npm run build
```

This creates a standalone build in `.next/standalone/` that includes all necessary files.

### VPS Setup

1. **Transfer Files to VPS**:
```bash
# From your local machine
scp -r .next/standalone/* user@your-vps:/var/www/chadakoin-digital/
scp -r .next/static .next/standalone/.next/
scp -r public .next/standalone/
```

2. **Install Node.js on VPS** (if not already installed):
```bash
# On VPS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Install PM2** (process manager):
```bash
sudo npm install -g pm2
```

4. **Start the Application**:
```bash
# Navigate to your app directory
cd /var/www/chadakoin-digital

# Start with PM2
pm2 start server.js --name chadakoin-digital

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### Nginx Configuration

Create a new Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/chadakoin-digital
```

Add this configuration:

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
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/chadakoin-digital /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL Certificate with Let's Encrypt

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d chadakoindigital.com -d www.chadakoindigital.com
```

### Deployment Workflow

For updates:

```bash
# Build locally
npm run build

# Transfer to VPS
scp -r .next/standalone/* user@your-vps:/var/www/chadakoin-digital/

# Restart on VPS
pm2 restart chadakoin-digital
```

## 🎯 Features

### Sections

1. **Hero** - Punchy headline with embedded CDIR player
2. **The Problem** - 6 real pain points local businesses face
3. **Portfolio** - 4 real projects with tech stacks and links
4. **Services** - 6 services framed as solutions
5. **Why Local** - Emphasis on Jamestown presence and direct communication
6. **Contact** - Form and direct contact information
7. **Footer** - Links and project references

### Design Elements

- Smooth scroll navigation
- Animated gradient text
- Glass morphism cards
- Hover effects with scale transforms
- Grain texture overlay
- Custom scrollbar
- Responsive mobile-first design

## 📝 Customization

### Colors

Edit `tailwind.config.ts` to adjust the color palette:

```typescript
colors: {
  navy: { /* dark backgrounds */ },
  electric: { /* accent colors */ },
}
```

### Content

- **Hero headline**: Edit `components/Hero.tsx`
- **Problems**: Modify the `problems` array in `components/TheProblem.tsx`
- **Portfolio**: Update `projects` array in `components/Portfolio.tsx`
- **Services**: Edit `services` array in `components/Services.tsx`
- **Contact info**: Update `components/Contact.tsx`

### Contact Form

The contact form currently shows a success message without sending. To connect to a backend:

1. Add form submission logic in `components/Contact.tsx`
2. Options include:
   - Formspree
   - EmailJS
   - Custom API endpoint
   - Netlify Forms (if using Netlify)

## 🔧 Environment Variables

Create `.env.local` for any API keys or configuration:

```bash
# Example
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
```

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized images and animations
- Fast page loads

## 🎨 Typography

- **Display/Body**: Outfit (Google Fonts)
- **Monospace**: IBM Plex Mono (Google Fonts)

## 🐛 Troubleshooting

### Build Issues

If you encounter build errors:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

If port 3000 is taken:
```bash
PORT=3001 npm run dev
```

## 📄 License

© 2026 Chadakoin Digital. All rights reserved.

## 🤝 Contact

Rob Madruga
- Email: rob@chadakoindigital.com
- Location: Jamestown, NY
- Projects: [CDIR](https://cdir.robmadruga.com) | [LOTDQQ](https://lotdqq.com)

---

**Built with Next.js, TypeScript, and Tailwind CSS**  
*Jamestown-based • AI-powered • Human built*
