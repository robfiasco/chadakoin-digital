import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { BOOKING_NOTE } from '@/lib/contact';
import { SERVICES, SITE_URL, getService } from '@/lib/services';

// Only the four known services exist; anything else is a 404 instead of a runtime render.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  const url = `${SITE_URL}/services/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    // openGraph replaces the layout's object wholesale, so the image has to be repeated here.
    openGraph: {
      title: service.title,
      description: service.description,
      url,
      siteName: 'Chadakoin Digital',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Chadakoin Digital' }],
    },
    twitter: { card: 'summary_large_image', title: service.title, description: service.description, images: ['/og-image.png'] },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <Navigation />
      <main className="relative px-6 pt-36 pb-24">
        <article className="max-w-3xl mx-auto">
          <a
            href="/#services"
            className="inline-flex items-center gap-2 min-h-[44px] mb-6 text-accent-blue hover:text-accent-teal transition-colors"
          >
            <span aria-hidden="true">&larr;</span>
            All services
          </a>
          <div className="accent-line mb-6" />
          <h1 className="section-title mb-8">{service.h1}</h1>

          <div className="space-y-5">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="section-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="glass mt-10 p-7 rounded-2xl border border-white/10">
            <p className="text-accent-teal font-semibold">{service.price}</p>
            <p className="text-sm text-studio-muted mt-1">{service.timeline}</p>
          </div>

          <div className="mt-10">
            <BookingButton />
            <p className="text-sm text-studio-muted mt-4">{BOOKING_NOTE}</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 min-h-[44px] mt-4 text-accent-blue hover:text-accent-teal transition-colors"
            >
              Or reach me directly
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
