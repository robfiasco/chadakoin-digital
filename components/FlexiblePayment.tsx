'use client';

export default function FlexiblePayment() {
  return (
    <section id="payment" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-xl border p-6 md:p-8"
          style={{
            background: '#161616',
            borderColor: 'rgba(255,255,255,0.05)',
          }}
        >
          <div className="flex gap-4">
            <div className="w-1 rounded-full bg-accent-teal shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-studio-text mb-3">
                Flexible payment
              </h2>
              <p className="text-studio-muted leading-relaxed md:text-lg">
                Most projects are paid the traditional way. For local Jamestown businesses I&apos;m happy to
                barter. A trade for services, goods or ad space can work for both sides, and we can usually
                find a fair way to make it work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
