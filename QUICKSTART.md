# 🚀 Quick Start Guide - Chadakoin Digital Website

## Get Up and Running in 5 Minutes

### 1. Extract and Install

```bash
# Extract the project
tar -xzf chadakoin-digital.tar.gz
cd chadakoin-digital

# Install dependencies
npm install
```

### 2. Run Locally

```bash
# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

### 3. Customize Content

**Quick edits you'll want to make:**

1. **Email address** → `components/Contact.tsx` (line ~90)
2. **Hero headline** → `components/Hero.tsx` (line ~25-35)
3. **Project links** → `components/Portfolio.tsx` (check all links work)
4. **Services** → `components/Services.tsx` (add/remove as needed)

### 4. Test Everything

- [ ] Click all navigation links
- [ ] Test contact form (shows success message)
- [ ] Check CDIR embed works
- [ ] View on mobile (resize browser)
- [ ] Verify all portfolio links work

### 5. Build for Production

```bash
npm run build
```

### 6. Deploy to VPS

See **DEPLOYMENT.md** for complete instructions, but here's the quick version:

```bash
# Build
npm run build

# Transfer to VPS
rsync -avz .next/standalone/* user@your-vps:/var/www/chadakoin-digital/
rsync -avz .next/static user@your-vps:/var/www/chadakoin-digital/.next/
rsync -avz public user@your-vps:/var/www/chadakoin-digital/

# Start with PM2 (on VPS)
cd /var/www/chadakoin-digital
pm2 start server.js --name chadakoin-digital
```

## What You Got

✅ Fully functional Next.js website  
✅ Dark, modern design matching CDIR  
✅ 7 complete sections (Hero, Problem, Portfolio, Services, Why Local, Contact, Footer)  
✅ Responsive mobile-first design  
✅ Smooth animations and transitions  
✅ Production-ready code  
✅ VPS deployment ready  

## File Structure

```
chadakoin-digital/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout with SEO
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/          # All React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── TheProblem.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   ├── WhyLocal.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/              # Static files
├── README.md            # Full documentation
├── DEPLOYMENT.md        # VPS deployment guide
├── NOTES.md            # Customization guide
└── deploy.sh           # Quick deployment script
```

## Need Help?

1. **README.md** - Complete documentation
2. **DEPLOYMENT.md** - Detailed VPS setup
3. **NOTES.md** - Customization tips

## Common Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Run production build locally
npm run lint     # Check code quality
```

## Next Steps

1. Customize the content
2. Add your actual email/contact info
3. Update project links
4. Test everything thoroughly
5. Deploy to your VPS
6. Point your domain to the VPS
7. Set up SSL with Let's Encrypt

---

**Built with:** Next.js 14, TypeScript, Tailwind CSS  
**Designed for:** Chadakoin Digital, Jamestown NY  
**Aesthetic:** Dark, modern, CDIR-inspired
