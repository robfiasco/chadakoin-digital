import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chadakoin Digital | Product Studio by Rob Fiasco',
  description:
    'Chadakoin Digital is Rob Fiasco\'s software product studio in Jamestown, NY. Building tools, apps, and custom systems with AI-assisted workflows.',
  keywords:
    'Rob Fiasco, Chadakoin Digital, product studio, software builder, custom software, Jamestown NY, AI-assisted development',
  authors: [{ name: 'Rob Fiasco' }],
  openGraph: {
    title: 'Chadakoin Digital | Product Studio',
    description: 'Build tools. Launch products. Solve problems.',
    type: 'website',
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
