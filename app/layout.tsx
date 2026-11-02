import type { Metadata } from 'next';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
