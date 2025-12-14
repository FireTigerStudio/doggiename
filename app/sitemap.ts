import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dog-name-generator.pages.dev';
  
  const breeds = [
    'golden-retriever',
    'labrador',
    'german-shepherd',
    'bulldog',
    'beagle',
    'poodle',
    'husky',
    'corgi',
    'rottweiler',
    'chihuahua',
  ];

  const styles = [
    'cute',
    'funny',
    'unique',
    'tough',
    'elegant',
    'japanese',
  ];

  const breedPages = breeds.map((breed) => ({
    url: `${baseUrl}/${breed}-names`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const stylePages = styles.map((style) => ({
    url: `${baseUrl}/${style}-dog-names`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...breedPages,
    ...stylePages,
  ];
}
