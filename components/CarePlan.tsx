import BookingButton from '@/components/BookingButton';

const included = [
  'Domain, hosting, SSL, backups and uptime checks included',
  "If something breaks on my end (hosting, SSL or my code), I fix it free. That doesn't count against your 30 minutes.",
  "Up to 30 minutes of changes every month (text, photos, small fixes). Unused time doesn't roll over.",
  'I reply within one business day, and the same day if your site is down.',
  'New pages, redesigns and new features get their own quote. Changes past your 30 minutes are $35 an hour.',
  "The domain is always yours. Cancel any time with 30 days' notice.",
];

const plans = [
  {
    title: 'Website care',
    price: '$30 a month',
    note: 'Or $300 if you pay for the year up front (two months free).',
  },
  {
    title: 'Booking, ordering or dashboard tools',
    price: 'From $50 a month',
    note: 'Depending on what the tool does.',
  },
];

export default function CarePlan() {
  return (
    <section id="care" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="accent-line mb-6" />
        <h2 className="section-title mb-6">Keep it running</h2>
        <p className="section-copy max-w-3xl mb-8">
          Websites need a home and someone to look after them. I&apos;ll handle the domain, hosting, and small
          updates so you never have to think about it.
        </p>

        <ul className="space-y-3 mb-12 max-w-3xl">
          {included.map((item) => (
            <li key={item} className="flex gap-3 section-copy">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {plans.map((plan) => (
            <article key={plan.title} className="glass p-7 card-hover rounded-2xl border border-white/10 flex flex-col">
              <h3 className="text-xl md:text-2xl font-display font-bold text-studio-text mb-3">{plan.title}</h3>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-accent-teal font-semibold">{plan.price}</p>
                <p className="text-sm text-studio-muted mt-1">{plan.note}</p>
              </div>
            </article>
          ))}
        </div>

        <BookingButton />
      </div>
    </section>
  );
}
