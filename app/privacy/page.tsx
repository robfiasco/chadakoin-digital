import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/services';

const title = 'Privacy | Chadakoin Digital';
const description = 'What chadakoindigital.com collects (very little), and how to reach me about it.';
const lastUpdated = 'November 3, 2026';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/privacy`,
    siteName: 'Chadakoin Digital',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Chadakoin Digital' }],
  },
};

const sections = [
  {
    heading: 'What this site collects',
    body: 'Nothing beyond what you choose to send me. There are no forms on this site. If you book a chat, the booking calendar collects the details you enter there. If you use the Email me or Text me buttons, I get whatever you put in your message.',
  },
  {
    heading: 'No ads or trackers',
    body: 'There are no ads, analytics, tracking pixels or tracking cookies here. Like any website, the server keeps basic technical logs, such as IP addresses and the pages requested, to keep it running and secure. I do not use them to identify or follow anyone.',
  },
  {
    heading: 'The booking calendar',
    body: 'Booking is handled by Google Calendar. When you book, Google processes the information you enter under its own privacy policy, and I use it only to meet with you.',
  },
  {
    heading: 'What I do with your messages',
    body: 'I use what you send me to reply to you and to work on your project. I do not sell it, share it for marketing, or add you to a mailing list.',
  },
  {
    heading: 'Questions',
    body: 'If you want to know what I have from you, or want it deleted, reach me with the Email me or Text me buttons in the contact section.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="relative px-6 pt-36 pb-24">
        <article className="max-w-3xl mx-auto">
          <div className="accent-line mb-6" />
          <h1 className="section-title mb-4">Privacy</h1>
          <p className="text-sm text-studio-muted mb-10">Last updated {lastUpdated}</p>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl md:text-2xl font-display font-bold text-studio-text mb-3">{section.heading}</h2>
                <p className="section-copy">{section.body}</p>
              </section>
            ))}
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 min-h-[44px] mt-10 text-accent-blue hover:text-accent-teal transition-colors"
          >
            Go to the contact section
            <span aria-hidden="true">&rarr;</span>
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
