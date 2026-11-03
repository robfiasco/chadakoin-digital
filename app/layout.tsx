import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { BOOKING_URL } from '@/lib/contact';
import { SITE_URL } from '@/lib/services';

// Self-hosted at build time, so the page no longer waits on a render-blocking Google Fonts stylesheet.
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-outfit' });

const title = 'Chadakoin Digital | Custom software for Jamestown businesses';
const description =
  'Custom software for Jamestown, NY businesses: websites, booking and ordering tools, dashboards and automation from a one-person local studio.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords:
    'Rob Fiasco, Chadakoin Digital, custom software, Jamestown NY, local business, dashboards, scheduling, automation, websites',
  authors: [{ name: 'Rob Fiasco' }],
  openGraph: {
    title,
    description,
    url: 'https://chadakoindigital.com',
    siteName: 'Chadakoin Digital',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Chadakoin Digital: Custom Software · Jamestown, NY' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

const towns = ['Jamestown', 'Lakewood', 'Falconer', 'Celoron', 'Bemus Point', 'Fredonia', 'Dunkirk'];

// Town and state only, and no phone or email: those stay behind the click-to-reveal buttons.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Chadakoin Digital',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    'One-person software studio in Jamestown, NY building custom websites, booking and ordering tools, dashboards and automation for local businesses.',
  founder: { '@type': 'Person', name: 'Rob Fiasco' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jamestown',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  areaServed: [
    ...towns.map((town) => ({ '@type': 'City', name: `${town}, NY` })),
    { '@type': 'City', name: 'Warren, PA' },
  ],
  priceRange: '$$',
  sameAs: ['https://apps.apple.com/us/app/chadakoin-now/id6783802593'],
  potentialAction: {
    '@type': 'ReserveAction',
    target: BOOKING_URL,
    name: 'Book a free 30-minute chat',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
