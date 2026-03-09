# Chadakoin Digital - Project Notes

## Quick Customization Guide

### Changing Content

#### 1. Hero Headline Options
File: `components/Hero.tsx`

Current: "A Facebook Page Isn't a Website. And It's Costing You Money."

Alternatives you mentioned:
- "Your Website Looks Like 2015. Your Competitors Know It."
- "Jamestown Deserves Better Than Template Websites"

Simply replace the text in the `<h1>` tag in the Hero component.

#### 2. Contact Information
File: `components/Contact.tsx`

Update:
- Email address
- Phone number (if you want to add one)
- Location details
- Response time

#### 3. Portfolio Projects
File: `components/Portfolio.tsx`

Add/remove/edit projects in the `projects` array. Each project has:
- title
- subtitle
- description
- tech stack
- link
- highlight badge
- gradient colors

#### 4. Services Offered
File: `components/Services.tsx`

Modify the `services` array to add/remove/edit services.

#### 5. Footer Links
File: `components/Footer.tsx`

Update:
- Copyright year (auto-updates)
- Project links
- Additional links/pages

### Styling Customization

#### Colors
File: `tailwind.config.ts`

Current palette:
- Navy backgrounds: `#0a0e1a`, `#0f172a`, `#1e293b`
- Electric blue: `#3b82f6`
- Electric cyan: `#06b6d4`
- Electric purple: `#8b5cf6`

#### Fonts
File: `app/globals.css`

Current:
- Display/Body: Outfit
- Monospace: IBM Plex Mono

To change fonts:
1. Update the Google Fonts import URL
2. Update the CSS variables
3. Update `tailwind.config.ts` if needed

#### Animations
File: `app/globals.css`

Adjust animation timing, delays, and effects in:
- `.reveal` classes
- Custom keyframes
- Hover effects

### SEO Optimization

File: `app/layout.tsx`

Update metadata:
- title
- description
- keywords
- Open Graph tags

For better local SEO:
- Add your actual business address
- Include Jamestown and Chautauqua County keywords
- Add schema markup for LocalBusiness

### Adding New Sections

1. Create component in `components/`
2. Import in `app/page.tsx`
3. Add to navigation if needed
4. Add scroll anchor if needed

### Contact Form Integration

File: `components/Contact.tsx`

Currently shows success message without sending. To connect:

**Option 1: Formspree**
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' }
});
```

**Option 2: EmailJS**
```typescript
import emailjs from '@emailjs/browser';
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
```

**Option 3: Custom API**
Create your own API endpoint and send the form data there.

### Performance Tips

1. **Images**: Add images to `/public` and use Next.js Image component
2. **Fonts**: Already optimized with Google Fonts
3. **Code Splitting**: Automatic with Next.js App Router
4. **Lazy Loading**: Components load on demand

### Mobile Optimization

All components are mobile-first and responsive. Test on:
- iPhone (viewport 375px)
- iPad (viewport 768px)
- Desktop (viewport 1024px+)

### Analytics Integration

To add Google Analytics:

1. Install package:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

### Adding a Blog

To add a blog section:

1. Create `app/blog/page.tsx`
2. Add blog posts as MDX files or from a CMS
3. Add link to navigation
4. Consider using:
   - Contentlayer for MDX
   - Sanity CMS
   - WordPress API

### Environment Variables

File: `.env.local` (create from `.env.example`)

Add sensitive data:
- API keys
- Form endpoints
- Analytics IDs
- Database URLs

Never commit `.env.local` to Git!

### Testing Checklist

Before deploying:
- [ ] Test all links
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify CDIR embed works
- [ ] Test all hover effects
- [ ] Check console for errors
- [ ] Verify all images load
- [ ] Test navigation smooth scroll
- [ ] Check cross-browser compatibility
- [ ] Verify SSL works on production

### Browser Support

Supported browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility

Current features:
- Semantic HTML
- Keyboard navigation
- Focus states
- Alt text ready (add to images)
- Color contrast WCAG AA compliant

To improve:
- Add ARIA labels where needed
- Test with screen readers
- Add skip-to-content link
- Ensure all interactive elements are keyboard accessible

## Common Issues & Solutions

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles Not Updating
Clear Next.js cache:
```bash
rm -rf .next
```

### Port 3000 In Use
```bash
PORT=3001 npm run dev
```

### Fonts Not Loading
Check Google Fonts URL is correct and accessible.

## Future Enhancements

Ideas to consider:
- [ ] Case studies page
- [ ] Client testimonials
- [ ] Blog for local business tips
- [ ] Pricing page
- [ ] FAQ section
- [ ] Newsletter signup
- [ ] Live chat widget
- [ ] Portfolio filtering
- [ ] Dark/light mode toggle (currently dark only)
- [ ] Animated project previews

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Project Timeline

Built: January 2026
Tech Stack: Next.js 14, TypeScript, Tailwind CSS
Design: Dark modern aesthetic inspired by CDIR
Purpose: Showcase for Chadakoin Digital's services

---

**Need Help?**

Check the README.md and DEPLOYMENT.md for more detailed information.
