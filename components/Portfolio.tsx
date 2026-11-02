'use client';

export default function Portfolio() {
  const projects = [
    {
      title: 'CDIR',
      badge: null,
      description:
        'An internet radio station that archives Jamestown music and streams Live On Tape Delay episodes.',
      image: null,
      link: 'https://radio.chadakoindigital.com/cdir.html',
      linkLabel: 'Open Project',
    },
    {
      title: 'Live On Tape Delay (redesign)',
      badge: 'Coming soon',
      description:
        'The new home for the longest-running podcast in Jamestown: the full 600+ episode archive, a live CDIR player, and LOTDQQ, the trivia game that builds questions from each episode. Sneak peek below.',
      image: { src: '/lotd-preview.png', alt: 'Live On Tape Delay redesign sneak peek' },
      link: 'https://liveontapedelay-website.vercel.app/',
      linkLabel: 'See the sneak peek',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="accent-line mb-6" />
          <h2 className="section-title">Other projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 items-start">
          {projects.map((project) => (
            <article key={project.title} className="glass p-7 card-hover rounded-2xl border border-white/10">
              <h3 className="text-2xl font-display font-bold text-studio-text mb-3">{project.title}</h3>
              {project.badge && (
                <span className="inline-block mb-4 px-3 py-1 rounded-full border border-accent-teal/40 text-accent-teal text-xs font-mono uppercase tracking-wider">
                  {project.badge}
                </span>
              )}
              <p className="text-studio-muted leading-relaxed mb-5">{project.description}</p>
              {project.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1200}
                  height={523}
                  loading="lazy"
                  className="w-full rounded-xl border border-white/10 mb-5"
                />
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-teal transition-colors"
              >
                {project.linkLabel}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
