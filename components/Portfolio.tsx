'use client';

export default function Portfolio() {
  const projects = [
    {
      title: 'CDIR',
      description:
        'An internet radio station that archives Jamestown music and streams Live On Tape Delay episodes.',
      link: 'https://radio.chadakoindigital.com/cdir.html',
    },
    {
      title: 'LOTDQQ',
      description: 'A trivia game that generates questions for each podcast episode.',
      link: 'https://lotdqq.com',
    },
    {
      title: 'MicroLifts',
      description: 'A workout tracker for people who struggle with consistency. Coming soon to iOS.',
      link: null,
    },
    {
      title: 'Gossip',
      description: 'A Solana ecosystem news app built for the Seeker phone.',
      link: null,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="accent-line mb-6" />
          <h2 className="section-title">Other projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
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
                <p className="text-sm text-studio-muted font-mono">In development</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
