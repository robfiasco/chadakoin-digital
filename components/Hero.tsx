'use client';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-28 pb-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-4xl">
          <p className="text-accent-teal font-mono text-sm uppercase tracking-[0.22em] mb-6">Chadakoin Digital</p>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight tracking-tight mb-8 text-studio-text">
            Build Tools. Launch Products. Solve Problems.
          </h1>
          <p className="text-xl md:text-2xl text-studio-muted max-w-3xl leading-relaxed mb-8">
            Chadakoin Digital is where I build software, apps, and experimental products.
            <br className="hidden md:block" />
            Some become standalone tools.
            <br className="hidden md:block" />
            Some solve real problems for businesses.
            <br className="hidden md:block" />
            If you need something built, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-center soft-glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-white/20 text-studio-text font-semibold text-center hover:border-accent-teal/70 transition-colors"
            >
              Contact Rob
            </a>
          </div>
          <p className="text-sm text-studio-muted font-mono">
            Software built by a human using modern AI-assisted development tools.
          </p>
        </div>
      </div>
    </section>
  );
}
