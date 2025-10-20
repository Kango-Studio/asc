import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ascassessoriacontabil.com.br';
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/clientes`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ];
}


