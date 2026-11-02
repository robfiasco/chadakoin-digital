'use client';

import { useState } from 'react';
import BookingButton from '@/components/BookingButton';
import { BOOKING_NOTE, assembleEmail, assemblePhone, hasPhone } from '@/lib/contact';

type Revealed = { label: string; href: string } | null;

const secondaryButton =
  'inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-full border border-white/20 text-studio-text font-semibold hover:border-accent-teal/70 transition-colors';

function RevealButton({ label, onReveal }: { label: string; onReveal: () => Revealed }) {
  const [revealed, setRevealed] = useState<Revealed>(null);

  return (
    <div className="flex justify-center">
      {/* Polite live region so screen readers announce the value that replaces the button */}
      <div aria-live="polite">
        {revealed ? (
          <a href={revealed.href} className={`${secondaryButton} text-accent-teal break-all`}>
            {revealed.label}
          </a>
        ) : (
          <button type="button" onClick={() => setRevealed(onReveal())} className={secondaryButton}>
            {label}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-14 border border-white/10 soft-glow text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="section-title mb-6">Let&apos;s build something</h2>

          <p className="section-copy max-w-2xl mx-auto mb-10">
            Got a spreadsheet, a process or a problem that eats your time? Tell me about it.
          </p>

          <BookingButton />
          <p className="text-sm text-studio-muted mt-4 mb-10">{BOOKING_NOTE}</p>

          <p className="text-sm text-studio-muted mb-4">Or reach me directly:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <RevealButton
              label="Email me"
              onReveal={() => {
                const email = assembleEmail();
                return { label: email, href: `mailto:${email}` };
              }}
            />
            {hasPhone && (
              <RevealButton
                label="Text me"
                onReveal={() => {
                  const phone = assemblePhone();
                  return { label: phone.display, href: `sms:${phone.href}` };
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
