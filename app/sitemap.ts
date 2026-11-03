import type { MetadataRoute } from 'next';
import { SERVICES, SITE_URL } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
