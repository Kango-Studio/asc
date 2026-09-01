import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/sobre`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/servicos`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/clientes`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contato`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/politica-privacidade`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/termos-uso`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
