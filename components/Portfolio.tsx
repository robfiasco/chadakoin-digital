'use client';

export default function Portfolio() {
  const projects = [
    {
      title: 'Jamestown Tarp Skunks Fan Guide',
      badge: null,
      description:
        'An independent fan guide for the Tarp Skunks: schedule, archive, promotions and team history. The team linked to it from their site and used the ticket stubs I designed on their game broadcast.',
      image: {
        src: '/tarp-skunks-preview.webp',
        alt: 'Jamestown Tarp Skunks Fan Guide schedule page',
        width: 800,
        height: 416,
      },
      link: 'https://tarp-skunks-2026.vercel.app/',
      linkLabel: 'Open the fan guide',
    },
    {
      title: 'CDIR',
      badge: null,
      description: 'An internet radio station that archives Jamestown music and streams Live On Tape Delay episodes.',
      image: { src: '/cdir-preview.webp', alt: 'CDIR radio player', width: 800, height: 477 },
      link: 'https://radio.chadakoindigital.com/cdir.html',
      linkLabel: 'Open Project',
    },
    {
      title: 'Live On Tape Delay (redesign)',
      badge: 'Launching soon: early look',
      description:
        'The new home for the longest-running podcast in Jamestown: the full 600+ episode archive, a live CDIR player, and LOTDQQ, the trivia game that builds questions from each episode. It is built and in final polish before launch.',
      image: { src: '/lotd-preview.webp', alt: 'Live On Tape Delay redesign sneak peek', width: 1200, height: 523 },
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

        {/* Deliberately quieter than the Chadakoin Now feature: no glass, no glow, smaller titles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-display font-bold text-studio-text mb-3">{project.title}</h3>
              {project.badge && (
                <span className="inline-block mb-4 px-3 py-1 rounded-full border border-accent-teal/40 text-accent-teal text-xs font-mono uppercase tracking-wider">
                  {project.badge}
                </span>
              )}
              <p className="text-studio-muted leading-relaxed mb-5">{project.description}</p>
              {/* Pinned to the bottom so images and links line up across cards of different text lengths */}
              <div className="mt-auto">
                {project.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    loading="lazy"
                    className="w-full aspect-[16/9] object-cover object-left-top rounded-xl border border-white/10 mb-5"
                  />
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] text-accent-blue hover:text-accent-teal transition-colors"
                >
                  {project.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
