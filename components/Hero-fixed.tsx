'use client';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-8 reveal">
          <span className="block gradient-text leading-tight">
            A Facebook Page
          </span>
          <span className="block text-white leading-tight">
            Isn't a Website.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 leading-tight">
            And It's Costing You Money.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto reveal reveal-delay-1">
          Your customers are searching Google, not scrolling Facebook.
          If they can't find you, they're finding your competitors.
        </p>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 mb-12 reveal reveal-delay-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-electric-blue"></div>
          <p className="text-lg md:text-xl font-mono text-electric-cyan tracking-wider">
            JAMESTOWN-BASED • AI-POWERED • HUMAN BUILT
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-electric-blue"></div>
        </div>

        {/* CDIR Player Embed */}
        <div className="mb-12 reveal reveal-delay-3">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto gradient-border">
            <p className="text-sm font-mono text-electric-cyan mb-4 uppercase tracking-widest">
              Live Proof ↓ This runs 24/7 with zero human intervention
            </p>
            <div className="bg-navy-950 rounded-lg p-6 border border-slate-700">
              <audio 
                controls 
                preload="none"
                className="w-full"
                style={{ height: '54px' }}
              >
                <source src="https://radio.chadakoindigital.com/radio.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              <span className="text-electric-blue font-semibold">CDIR</span> — My flagship project. 
              A 24/7 automated internet radio station for Jamestown. Imagine what I can build for your business.
              {' '}
              <a 
                href="https://radio.chadakoindigital.com/cdir.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-electric-cyan hover:underline"
              >
                Visit the full station →
              </a>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="reveal reveal-delay-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="btn-glow inline-block px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-white font-semibold text-lg rounded-full hover:scale-105 transition-transform"
            >
              Get a Free Quote
            </a>
            <a 
              href="#pricing" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-electric-cyan text-electric-cyan font-semibold text-lg rounded-full hover:bg-electric-cyan/10 transition-all"
            >
              See Pricing
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Free consultation • No pressure • Honest advice
          </p>
        </div>
      </div>
    </section>
  );
}
