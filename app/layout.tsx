import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

// Self-hosted at build time, so the page no longer waits on a render-blocking Google Fonts stylesheet.
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-outfit' });

const title = 'Chadakoin Digital | Custom software for Jamestown businesses';
const description =
  'One-person software studio in Jamestown, NY. Dashboards, scheduling tools, automation, apps and websites for local businesses.';

export const metadata: Metadata = {
  metadataBase: new URL('https://chadakoindigital.com'),
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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Chadakoin Digital: Custom software for Jamestown businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

// No address, phone or email here on purpose.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Chadakoin Digital',
  url: 'https://chadakoindigital.com',
  description,
  areaServed: [
    { '@type': 'City', name: 'Jamestown, NY' },
    { '@type': 'AdministrativeArea', name: 'Chautauqua County, NY' },
  ],
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
