'use client';

export default function RealProblems() {
  const examples = [
    'internal dashboards',
    'scheduling systems',
    'automation tools',
    'inventory trackers',
    'reporting systems',
    'operational databases',
  ];

  return (
    <section id="real-problems" className="py-24 px-6 bg-studio-bg">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title mb-4">Real Problems. Real Tools.</h2>
        <div className="accent-line mx-auto mb-8" />

        <div className="space-y-5 text-lg text-studio-muted leading-relaxed max-w-4xl mx-auto">
          <p>
            I&apos;m less interested in building marketing websites and more interested in building
            software that actually helps businesses operate.
          </p>
          <p>
            Many businesses run important parts of their operations through spreadsheets, manual
            processes, or systems that do not work well together.
          </p>
          <p>That is where custom tools can make a real difference.</p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 max-w-4xl mx-auto">
          {examples.map((example) => (
            <li
              key={example}
              className="rounded-xl border border-white/10 bg-studio-card px-4 py-3 text-studio-text"
            >
              {example}
            </li>
          ))}
        </ul>

        <p className="text-lg text-studio-muted leading-relaxed max-w-4xl mx-auto mt-10">
          If your business has a messy workflow or a process that wastes time every day, software can
          often simplify it.
        </p>
      </div>
    </section>
  );
}
