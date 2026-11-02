import BookingButton from '@/components/BookingButton';
import { BOOKING_NOTE } from '@/lib/contact';

const secondaryButton =
  'inline-flex items-center justify-center min-h-[44px] px-7 py-3 rounded-full border border-white/20 text-studio-text font-semibold text-center hover:border-accent-teal/70 transition-colors';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-28 pb-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-4xl">
          <p className="text-accent-teal font-mono text-sm uppercase tracking-[0.22em] mb-6">Chadakoin Digital</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold leading-tight tracking-tight mb-8 text-studio-text">
            Custom software for Jamestown businesses.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-studio-muted max-w-3xl leading-relaxed mb-10">
            I&apos;m Rob Fiasco, one person in Jamestown, NY who builds the tools your business is missing:
            dashboards, scheduling, automation, apps and websites. You work directly with me from start to
            finish, which keeps projects fast and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookingButton />
            <a href="#services" className={secondaryButton}>
              See what I build
            </a>
            <a
              href="https://now.chadakoindigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              Open Chadakoin Now
            </a>
          </div>
          <p className="text-sm text-studio-muted mt-4">{BOOKING_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
