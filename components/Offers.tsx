'use client';

export default function Offers() {
  const offers = [
    {
      title: 'Business website.',
      body: 'A fast, simple site for your hours, menu or services, with your contact info and a map.',
      price: 'Starting at $500.',
      note: 'Usually under a week once I have your info.',
    },
    {
      title: 'Booking or ordering setup.',
      body: 'Customers book or order online and you see it all in one place.',
      price: 'Starting at $1,000.',
      note: 'Usually 1 to 2 weeks.',
    },
    {
      title: 'Spreadsheet to dashboard.',
      body: 'Your numbers, reports and inventory in one place that updates itself.',
      price: 'Starting at $400.',
      note: 'Usually about a week.',
    },
    {
      title: 'Automation or custom tool.',
      body: 'One workflow that wastes your time every day, handled for you.',
      price: 'Starting at $300.',
      note: 'Larger custom tools are quoted after a free 30-minute conversation.',
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line mb-6" />
        <h2 className="section-title mb-6">What I build for local businesses</h2>
        <p className="section-copy max-w-3xl mb-12">
          If your business runs on spreadsheets, paper, or tools that don&apos;t talk to each other, I can
          replace the messy part with something that works.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {offers.map((offer) => (
            <article key={offer.title} className="glass p-7 card-hover rounded-2xl border border-white/10 flex flex-col">
              <h3 className="text-xl md:text-2xl font-display font-bold text-studio-text mb-3">{offer.title}</h3>
              <p className="text-studio-muted leading-relaxed mb-6">{offer.body}</p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-accent-teal font-semibold">{offer.price}</p>
                <p className="text-sm text-studio-muted mt-1">{offer.note}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="section-copy max-w-4xl">
          Every price is a starting point, and you get a fixed quote before any work begins. Changes and
          small jobs are $35 an hour. Open to barter on any of these.
        </p>
      </div>
    </section>
  );
}
