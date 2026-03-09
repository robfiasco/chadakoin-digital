'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-10 md:p-14 border border-white/10 soft-glow text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="section-title mb-6">Let&apos;s Build Something</h2>

          <div className="space-y-3 mb-10">
            <p className="section-copy">Have an idea?</p>
            <p className="section-copy">Need a tool built for your business?</p>
            <p className="section-copy">Reach out.</p>
          </div>

          <a
            href="mailto:rob@robfiasco.dev"
            className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold"
          >
            rob@robfiasco.dev
          </a>
        </div>
      </div>
    </section>
  );
}
