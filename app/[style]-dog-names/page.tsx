import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NameCard from '@/components/NameCard';
import { getNamesByStyle, formatStyleName, styles } from '@/lib/utils';

interface StylePageProps {
  params: {
    style: string;
  };
}

// Generate static params for all styles
export async function generateStaticParams() {
  const stylePages = ['cute', 'funny', 'unique', 'tough', 'elegant', 'japanese'];
  return stylePages.map((style) => ({
    style,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: StylePageProps): Promise<Metadata> {
  const styleSlug = params.style;
  const styleName = formatStyleName(styleSlug);

  return {
    title: `${styleName} Dog Names - Best ${styleName} Puppy Names`,
    description: `Discover the best ${styleName.toLowerCase()} dog names for your puppy! Browse our curated collection of ${styleName.toLowerCase()} names for male and female dogs. Find the perfect ${styleName.toLowerCase()} name for your new pet.`,
    keywords: `${styleName.toLowerCase()} dog names, ${styleName.toLowerCase()} puppy names, ${styleName.toLowerCase()} pet names, best ${styleName.toLowerCase()} dog names, ${styleName.toLowerCase()} male dog names, ${styleName.toLowerCase()} female dog names`,
    openGraph: {
      title: `${styleName} Dog Names - Best ${styleName} Puppy Names`,
      description: `Discover the best ${styleName.toLowerCase()} dog names for your puppy!`,
      type: 'website',
    },
  };
}

const styleDescriptions: Record<string, { description: string; tips: string[] }> = {
  'cute': {
    description: 'Cute dog names are perfect for adorable puppies and sweet-natured dogs. These names capture the lovable and endearing qualities of your furry friend.',
    tips: [
      'Choose names that sound soft and gentle',
      'Consider names inspired by cute animals or characters',
      'Short, sweet names often work best',
      'Think about your dog&apos;s adorable features',
    ],
  },
  'funny': {
    description: 'Funny dog names bring smiles and laughter. Perfect for dogs with playful personalities or quirky behaviors that make everyone laugh.',
    tips: [
      'Play with puns and wordplay',
      'Consider ironic names (like &quot;Tiny&quot; for a big dog)',
      'Think about funny food names',
      'Use humorous pop culture references',
    ],
  },
  'unique': {
    description: 'Unique dog names help your pet stand out from the pack. These distinctive names are perfect for one-of-a-kind dogs with special personalities.',
    tips: [
      'Look to different languages and cultures',
      'Consider mythological or literary names',
      'Think about unusual nature elements',
      'Create your own unique combination',
    ],
  },
  'tough': {
    description: 'Tough dog names are ideal for strong, powerful breeds or dogs with bold personalities. These names convey strength and confidence.',
    tips: [
      'Consider warrior or hero names',
      'Think about powerful natural forces',
      'Look to tough characters from movies',
      'Use strong, bold-sounding names',
    ],
  },
  'elegant': {
    description: 'Elegant dog names exude sophistication and grace. Perfect for refined breeds or dogs with a dignified demeanor.',
    tips: [
      'Consider classic, timeless names',
      'Look to royalty and nobility',
      'Think about sophisticated places',
      'Use names with beautiful meanings',
    ],
  },
  'japanese': {
    description: 'Japanese dog names are beautiful and meaningful, often inspired by nature, seasons, and virtues. Perfect for Shiba Inus, Akitas, and all dogs.',
    tips: [
      'Learn the meanings behind names',
      'Consider seasonal names (Haru, Natsu)',
      'Think about nature elements (Sakura, Yuki)',
      'Use names that reflect personality traits',
    ],
  },
};

export default function StylePage({ params }: StylePageProps) {
  const styleSlug = params.style;
  const styleName = formatStyleName(styleSlug);
  
  // For Japanese style, map to 'unique' since we don't have a separate Japanese style in data
  const dataStyle = styleSlug === 'japanese' ? 'unique' : styleSlug;
  const names = getNamesByStyle(dataStyle);
  
  const styleInfo = styleDescriptions[styleSlug];
  
  if (!styleInfo) {
    notFound();
  }

  // Separate by gender
  const maleNames = names.filter(n => n.gender.includes('male'));
  const femaleNames = names.filter(n => n.gender.includes('female'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-warm-50 rounded-3xl p-8 md:p-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4">
          {styleName} Dog Names
        </h1>
        <p className="text-lg text-warm-700 mb-6 max-w-3xl">
          {styleInfo.description}
        </p>
        <div className="bg-white rounded-2xl p-6">
          <h3 className="font-bold text-warm-900 mb-3">Naming Tips:</h3>
          <ul className="space-y-2">
            {styleInfo.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-500 mr-2">✓</span>
                <span className="text-warm-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* All Names Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-warm-900 mb-6">
          All {styleName} Names ({names.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {names.map((name, index) => (
            <NameCard key={`${name.name}-${index}`} name={name} index={index} />
          ))}
        </div>
      </section>

      {/* Male Names Section */}
      {maleNames.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-warm-900 mb-6">
            Male {styleName} Names ({maleNames.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {maleNames.map((name) => (
              <div
                key={name.name}
                className="bg-white rounded-lg p-4 border border-warm-200 hover:border-primary-300 transition-colors"
              >
                <span className="font-medium text-warm-900">{name.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Female Names Section */}
      {femaleNames.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-warm-900 mb-6">
            Female {styleName} Names ({femaleNames.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {femaleNames.map((name) => (
              <div
                key={name.name}
                className="bg-white rounded-lg p-4 border border-warm-200 hover:border-primary-300 transition-colors"
              >
                <span className="font-medium text-warm-900">{name.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SEO Content */}
      <section className="bg-white rounded-2xl p-8 mt-12">
        <h2 className="text-2xl font-bold text-warm-900 mb-4">
          Why Choose a {styleName} Dog Name?
        </h2>
        <p className="text-warm-700 mb-4">
          {styleName} dog names are perfect for pet owners who want their dog&apos;s name to reflect 
          a specific personality trait or characteristic. These names help capture the essence 
          of what makes your dog special and unique.
        </p>
        <p className="text-warm-700">
          When choosing a {styleName.toLowerCase()} name, consider how it sounds when you call it out loud, 
          whether it suits your dog&apos;s personality, and if it&apos;s easy for your dog to recognize. 
          The best dog names are ones that feel natural and bring joy every time you use them!
        </p>
      </section>
    </div>
  );
}
