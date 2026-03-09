'use client';

export default function Portfolio() {
  const projects = [
    {
      title: 'CDIR',
      description:
        'Chadakoin Digital Internet Radio. A 24/7 internet radio station archiving Jamestown, NY music and streaming episodes of the Live On Tape Delay podcast. Built to preserve local music history and keep it accessible.',
      link: 'https://radio.chadakoindigital.com/cdir.html',
    },
    {
      title: 'LOTDQQ',
      description:
        'A trivia game created for the Live On Tape Delay podcast. The platform allows podcast episodes to generate interactive trivia games from a growing question library.',
      link: 'https://lotdqq.com',
    },
    {
      title: 'Gossip',
      description:
        'A Solana ecosystem intelligence app built for the Solana Seeker phone. It analyzes curated feeds and social sentiment to surface the most important developments in the Solana ecosystem.',
      link: null,
    },
    {
      title: 'Chadakoin Now',
      description:
        'A Jamestown resident information hub. Local updates, announcements, and useful city information in one place. Android release coming first.',
      link: null,
    },
    {
      title: 'MicroLifts',
      description:
        'A workout tracker designed for people who struggle with consistency. The philosophy: small lifts add up to real progress. Coming soon to iOS.',
      link: null,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="accent-line mb-6" />
          <h2 className="section-title mb-4">Projects</h2>
          <p className="section-copy max-w-3xl">Real products, experiments, and systems built in the lab.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="glass p-7 card-hover rounded-2xl border border-white/10">
              <h3 className="text-2xl font-display font-bold text-studio-text mb-4">{project.title}</h3>
              <p className="text-studio-muted leading-relaxed mb-5">{project.description}</p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-teal transition-colors"
                >
                  Open Project
                  <span aria-hidden="true">&rarr;</span>
                </a>
              ) : (
                <p className="text-sm text-studio-muted font-mono">In active development</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
