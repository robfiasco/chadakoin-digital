import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';

export const metadata: Metadata = {
  title: 'Page not found | Chadakoin Digital',
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="relative px-6 pt-36 pb-24 min-h-[70vh] flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          <p className="text-accent-teal font-mono text-sm uppercase tracking-[0.22em] mb-6">404</p>
          <div className="accent-line mb-6" />
          <h1 className="section-title mb-6">That page doesn&apos;t exist.</h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="/"
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-3 rounded-full border border-white/20 text-studio-text font-semibold text-center hover:border-accent-teal/70 transition-colors"
            >
              Back to the homepage
            </a>
            <BookingButton />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
