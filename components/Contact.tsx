'use client';

import { useState } from 'react';

export default function Contact() {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-10 md:p-14 border border-white/10 soft-glow text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="section-title mb-6">Let&apos;s build something</h2>

          <p className="section-copy max-w-2xl mx-auto mb-10">
            Got a spreadsheet, a process or a problem that eats your time? Tell me about it.
          </p>

          {isEmailRevealed ? (
            <a
              href="mailto:robfiasco@gmail.com"
              className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold"
            >
              robfiasco@gmail.com
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setIsEmailRevealed(true)}
              className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold"
            >
              Click to reveal email
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
