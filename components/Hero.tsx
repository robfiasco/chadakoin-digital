import BookingButton from '@/components/BookingButton';
import { BOOKING_NOTE } from '@/lib/contact';

const secondaryButton =
  'inline-flex items-center justify-center min-h-[44px] px-7 py-3 rounded-full border border-white/20 text-studio-text font-semibold text-center hover:border-accent-teal/70 transition-colors';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center lg:flex-row lg:items-center px-6 pt-28 pb-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-4xl hero-copy">
          <p className="text-accent-teal font-mono text-sm uppercase tracking-[0.22em] mb-6">Chadakoin Digital</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold leading-tight tracking-tight mb-8 text-studio-text">
            Custom software for Jamestown businesses.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-studio-muted max-w-3xl leading-relaxed mb-10">
            I&apos;m Rob Fiasco, one person in Jamestown, NY, who builds the tools your business is missing:
            websites, booking and ordering, dashboards and automation. You work directly with me from start
            to finish, which keeps projects fast and affordable.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
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

      {/* One image for every width so only one file downloads: a full-bleed banner under the
          buttons below lg, the right 45% of the hero from lg up */}
      <div className="relative -mx-6 mt-12 h-60 sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45%] lg:h-auto lg:m-0 hero-photo-fade-x">
        {/* Pre-optimized in public/images; next/image would need sharp on the VPS to do the same */}
        <picture className="hero-photo-fade">
          <source
            type="image/webp"
            srcSet="/images/jamestown-erie-bridge-800.webp 638w, /images/jamestown-erie-bridge-1600.webp 1276w"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/jamestown-erie-bridge-1600.jpg"
            srcSet="/images/jamestown-erie-bridge-800.jpg 638w, /images/jamestown-erie-bridge-1600.jpg 1276w"
            sizes="(min-width: 1024px) 45vw, 100vw"
            width={1276}
            height={1600}
            alt="Erie Railroad bridge reading Chicago, Jamestown, New York in downtown Jamestown"
            // Lazy so the photo never competes with the hero text on slow mobile connections; on desktop it is
            // in the viewport at first layout, so it still starts loading right away.
            loading="lazy"
            // Centered on the bridge sign so "JAMESTOWN" survives every crop; dimmed to sit in the dark theme
            className="absolute inset-0 w-full h-full object-cover object-[62%_53%] brightness-[0.82]"
          />
        </picture>
      </div>
    </section>
  );
}
