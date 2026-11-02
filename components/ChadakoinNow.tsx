import fs from 'fs';
import path from 'path';

// Checked at build time so dropping the screenshot into public/ and rebuilding is all it takes.
const hasScreenshot = fs.existsSync(path.join(process.cwd(), 'public', 'chadakoin-now.png'));

export default function ChadakoinNow() {
  return (
    <section id="chadakoin-now" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-14 border border-white/10 soft-glow">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-accent-teal font-mono text-sm uppercase tracking-[0.22em] mb-4">Proof</p>
              <h2 className="section-title mb-6">Chadakoin Now</h2>
              <p className="section-copy mb-8">
                A live Jamestown information hub on iOS and the web: city services, recycling, parking,
                weather, local news and events in one place, updated daily. It pulls from several local
                sources and runs on its own.
              </p>
              <a
                href="https://now.chadakoindigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-center"
              >
                Open the app
              </a>
              <p className="text-sm text-studio-muted mt-6">
                Built and maintained by me, which is the kind of work I&apos;d do for you.
              </p>
            </div>

            {hasScreenshot ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/chadakoin-now.png"
                alt="Chadakoin Now app screenshot"
                className="w-full max-w-sm mx-auto rounded-2xl border border-white/10"
              />
            ) : (
              <div className="w-full max-w-sm mx-auto aspect-[9/16] max-h-[28rem] rounded-2xl border border-dashed border-white/15 bg-studio-card" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
