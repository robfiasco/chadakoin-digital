const screens = ['Home', 'News', 'Events', 'Sports', 'Visit'];

export default function ChadakoinNow() {
  return (
    <section id="chadakoin-now" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-14 border border-white/10 soft-glow">
          <div className="max-w-3xl">
            <p className="text-accent-teal font-mono text-sm uppercase tracking-[0.22em] mb-4">Featured project</p>
            <h2 className="section-title mb-6">Chadakoin Now</h2>
            <p className="section-copy">
              A live Jamestown information hub on iOS and the web: city services, recycling, parking,
              weather, local news and events in one place, updated daily. It pulls from several local
              sources and runs on its own.
            </p>
          </div>

          {/* Swipe row on phones, centered row of five from md up */}
          <div className="flex md:grid md:grid-cols-5 gap-4 md:gap-5 my-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-2 px-2">
            {screens.map((screen) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={screen}
                src={`/chadakoin-now-${screen.toLowerCase()}.webp`}
                srcSet={`/chadakoin-now-${screen.toLowerCase()}-240.webp 240w, /chadakoin-now-${screen.toLowerCase()}.webp 460w`}
                sizes="(min-width: 768px) 190px, 68vw"
                alt={`Chadakoin Now ${screen} screen`}
                width={460}
                height={999}
                loading="lazy"
                className="w-[68%] sm:w-[40%] md:w-full shrink-0 snap-start rounded-xl border border-white/10"
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://now.chadakoindigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-3 rounded-full border border-white/20 text-studio-text font-semibold text-center hover:border-accent-teal/70 transition-colors"
            >
              Open the app
            </a>
            <a
              href="https://apps.apple.com/us/app/chadakoin-now/id6783802593"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-3 rounded-full border border-white/20 text-studio-text font-semibold text-center hover:border-accent-teal/70 transition-colors"
            >
              Download on the App Store
            </a>
          </div>
          <p className="text-sm text-studio-muted mt-6">
            Built and maintained by me, which is the kind of work I&apos;d do for you.
          </p>
        </div>
      </div>
    </section>
  );
}
