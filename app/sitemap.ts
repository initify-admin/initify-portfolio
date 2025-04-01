import { MetadataRoute } from 'next';

const siteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

if (!siteDomain) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('NEXT_PUBLIC_WEBSITE_DOMAIN is missing in production!');
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${siteDomain}`,
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
  ];
}
