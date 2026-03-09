'use client';

export default function Pricing() {
  const thingsBuilt = [
    'internal dashboards',
    'automation systems',
    'data visualizations',
    'fintech tools',
    'customer portals',
    'MVP prototypes',
  ];

  return (
    <section id="need-built" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-10 md:p-14 border border-white/10 soft-glow">
          <div className="accent-line mb-6" />
          <h2 className="section-title mb-6">Need a Tool Built for Your Business?</h2>
          <div className="space-y-4 section-copy max-w-4xl mb-10">
            <p>Sometimes businesses need software that does not exist yet.</p>
            <p>That is where I come in.</p>
            <p>I help design and build:</p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {thingsBuilt.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-studio-card px-4 py-3 text-studio-text"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="section-copy max-w-4xl">
            If you have a real problem that software could solve, let&apos;s build it.
          </p>

          <div
            className="mt-10 rounded-xl border p-6 md:p-7"
            style={{
              background: '#161616',
              borderColor: 'rgba(255,255,255,0.05)',
            }}
          >
            <div className="flex gap-4">
              <div className="w-1 rounded-full bg-accent-teal shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-studio-text mb-3">
                  Flexible Payment Options
                </h3>
                <div className="space-y-3 text-studio-muted leading-relaxed">
                  <p>Most projects are paid in the traditional way.</p>
                  <p>
                    However, I&apos;m also open to creative arrangements, including barter, especially when
                    working with local Jamestown businesses.
                  </p>
                  <p>Sometimes the right trade can benefit both sides.</p>
                  <p>
                    Good software solves real problems. If we can build something useful together, we can
                    usually find a fair way to make it work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
