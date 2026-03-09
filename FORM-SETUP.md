# Contact Form Setup with Formspree

The contact form is now configured to use Formspree, a simple email service. Here's how to set it up:

## Step 1: Create a Formspree Account

1. Go to https://formspree.io/
2. Sign up for a free account (free tier allows 50 submissions/month)
3. Click "New Form"
4. Name it "Chadakoin Digital Contact"

## Step 2: Get Your Form Endpoint

After creating the form, Formspree will give you an endpoint URL like:
```
https://formspree.io/f/YOUR_FORM_ID
```

Copy that URL.

## Step 3: Update the Contact Component

In `components/Contact.tsx`, find line 13 and replace `YOUR_FORM_ID` with your actual form ID:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

For example, if your URL is `https://formspree.io/f/xpzvyzqr`, update it to:

```typescript
const response = await fetch('https://formspree.io/f/xpzvyzqr', {
```

## Step 4: Configure Email Settings in Formspree

In your Formspree dashboard:
1. Set the **Reply-To** address to the submitter's email
2. Enable **reCAPTCHA** to prevent spam (optional but recommended)
3. Set up **email notifications** to your email address

## Step 5: Test the Form

1. Rebuild your site: `npm run build`
2. Deploy the changes
3. Fill out the form on your site
4. Check your email - you should receive the submission!

## Alternative: Simple Mailto Link

If you prefer a simpler solution without any service:

Replace the entire form section in `Contact.tsx` with:

```tsx
<div className="text-center">
  <a 
    href="mailto:rob@chadakoindigital.com?subject=Website%20Inquiry"
    className="inline-block px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold text-lg rounded-full hover:scale-105 transition-transform btn-glow"
  >
    Email Me Directly
  </a>
  <p className="text-slate-400 mt-4">
    rob@chadakoindigital.com
  </p>
</div>
```

This opens their email client with your address pre-filled.

## Other Options

- **Resend**: Similar to Formspree, developer-friendly
- **EmailJS**: Free tier, client-side only
- **Custom backend**: Build your own API endpoint if you want full control

---

**Recommended**: Stick with Formspree for now - it's simple, reliable, and the free tier is plenty for starting out.
