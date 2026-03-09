'use client';

export default function Services() {
  const workflowTools = ['GitHub', 'Vercel', 'Claude Code'];

  return (
    <section id="workflow" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line mb-6" />
        <h2 className="section-title mb-6">Modern Development Workflow</h2>
        <p className="section-copy max-w-4xl mb-8">
          Modern tools allow small teams, or even one person, to build powerful software.
          My workflow combines traditional development with modern AI-assisted tools.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {workflowTools.map((tool) => (
            <div key={tool} className="glass p-6 rounded-xl border border-white/10 text-center">
              <p className="text-lg font-semibold text-studio-text">{tool}</p>
            </div>
          ))}
        </div>

        <div className="glass p-8 rounded-2xl border border-white/10">
          <p className="section-copy">
            AI accelerates development and iteration, but the ideas, architecture, and product direction remain human.
          </p>
        </div>
      </div>
    </section>
  );
}
