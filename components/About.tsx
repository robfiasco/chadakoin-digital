'use client';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line mb-6" />
        <h2 className="section-title mb-8">About Rob</h2>

        <div className="glass rounded-2xl p-8 md:p-14 border border-white/10">
          <p className="text-accent-teal font-mono text-sm uppercase tracking-[0.22em] mb-4">Why Jamestown</p>
          <p className="section-copy">
            I grew up in Jamestown and left in my late twenties to live in several other parts of the country.
            I came back with a better sense of what works for a business and what doesn&apos;t. I also
            co-host the Live On Tape Delay podcast and run CDIR.
          </p>
        </div>
      </div>
    </section>
  );
}
