import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bitsncode.dev';

  const lastModifiedDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // {
    //   url: `${baseUrl}/servicios`,
    //   lastModified: lastModifiedDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
