import { BOOKING_LABEL, bookingHref, bookingIsExternal } from '@/lib/contact';

export default function BookingButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={bookingHref}
      {...(bookingIsExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center min-h-[44px] px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-accent-purple text-white font-semibold text-center soft-glow ${className}`}
    >
      {BOOKING_LABEL}
    </a>
  );
}
