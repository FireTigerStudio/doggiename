import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NameCard from '@/components/NameCard';
import { getNamesByBreed, formatBreedName, breeds } from '@/lib/utils';

interface BreedPageProps {
  params: {
    breed: string;
  };
}

// Generate static params for all breeds
export async function generateStaticParams() {
  return breeds.map((breed) => ({
    breed: breed.value,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BreedPageProps): Promise<Metadata> {
  const breedSlug = params.breed;
  const breedName = formatBreedName(breedSlug);
  
  const breedInfo = breeds.find(b => b.value === breedSlug);
  if (!breedInfo) {
    return {
      title: 'Breed Not Found',
    };
  }

  return {
    title: `${breedName} Names - Best Dog Names for ${breedName}s`,
    description: `Discover the perfect name for your ${breedName}! Browse our curated collection of ${breedName} names including cute, unique, funny, and classic options. Find the ideal name for your ${breedName} puppy.`,
    keywords: `${breedName} names, ${breedName} dog names, ${breedName} puppy names, best ${breedName} names, male ${breedName} names, female ${breedName} names`,
    openGraph: {
      title: `${breedName} Names - Best Dog Names for ${breedName}s`,
      description: `Discover the perfect name for your ${breedName}!`,
      type: 'website',
    },
  };
}

const breedDescriptions: Record<string, { description: string; characteristics: string[] }> = {
  'golden-retriever': {
    description: 'Golden Retrievers are friendly, intelligent, and devoted dogs. Known for their beautiful golden coats and gentle temperament, they make excellent family pets and are one of the most popular breeds worldwide.',
    characteristics: ['Friendly', 'Intelligent', 'Devoted', 'Gentle', 'Trustworthy'],
  },
  'labrador': {
    description: 'Labrador Retrievers are outgoing, even-tempered, and gentle dogs. They are the most popular dog breed in many countries and are known for their friendly nature and versatility as working dogs.',
    characteristics: ['Friendly', 'Active', 'Outgoing', 'Even-tempered', 'Gentle'],
  },
  'german-shepherd': {
    description: 'German Shepherds are confident, courageous, and smart dogs. They are highly versatile working dogs known for their loyalty and protective nature, making them excellent guard dogs and family companions.',
    characteristics: ['Confident', 'Courageous', 'Smart', 'Loyal', 'Protective'],
  },
  'bulldog': {
    description: 'Bulldogs are calm, courageous, and friendly dogs. Despite their tough appearance, they are gentle and affectionate, making them wonderful companions for families and individuals alike.',
    characteristics: ['Calm', 'Courageous', 'Friendly', 'Dignified', 'Willful'],
  },
  'beagle': {
    description: 'Beagles are friendly, curious, and merry dogs. These small hounds are known for their excellent sense of smell and tracking instinct, as well as their gentle and even-tempered nature.',
    characteristics: ['Friendly', 'Curious', 'Merry', 'Even-tempered', 'Determined'],
  },
  'poodle': {
    description: 'Poodles are intelligent, active, and elegant dogs. Available in three sizes (Standard, Miniature, and Toy), they are known for their hypoallergenic coats and exceptional trainability.',
    characteristics: ['Intelligent', 'Active', 'Elegant', 'Proud', 'Trainable'],
  },
  'husky': {
    description: 'Siberian Huskies are outgoing, mischievous, and loyal dogs. Originally bred as sled dogs, they are known for their striking appearance, including their blue or multi-colored eyes.',
    characteristics: ['Outgoing', 'Mischievous', 'Loyal', 'Alert', 'Gentle'],
  },
  'corgi': {
    description: 'Corgis are affectionate, smart, and alert dogs. Despite their short legs, they are athletic and agile, originally bred for herding cattle. They make excellent family companions.',
    characteristics: ['Affectionate', 'Smart', 'Alert', 'Bold', 'Playful'],
  },
  'rottweiler': {
    description: 'Rottweilers are loyal, loving, and confident guardians. They are powerful dogs with a calm confidence and are devoted to their families, making them excellent protectors.',
    characteristics: ['Loyal', 'Loving', 'Confident', 'Fearless', 'Good-natured'],
  },
  'chihuahua': {
    description: 'Chihuahuas are charming, graceful, and sassy dogs. As the smallest dog breed, they have big personalities and are known for their loyalty to their owners and bold nature.',
    characteristics: ['Charming', 'Graceful', 'Sassy', 'Alert', 'Quick'],
  },
};

export default function BreedPage({ params }: BreedPageProps) {
  const breedSlug = params.breed;
  const breedName = formatBreedName(breedSlug);
  const names = getNamesByBreed(breedSlug);
  
  const breedInfo = breedDescriptions[breedSlug];
  
  if (!breedInfo || names.length === 0) {
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
          {breedName} Names
        </h1>
        <p className="text-lg text-warm-700 mb-6 max-w-3xl">
          {breedInfo.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {breedInfo.characteristics.map((char) => (
            <span
              key={char}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-warm-700"
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* All Names Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-warm-900 mb-6">
          All {breedName} Names ({names.length})
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
            Male {breedName} Names ({maleNames.length})
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
            Female {breedName} Names ({femaleNames.length})
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
          Choosing the Perfect {breedName} Name
        </h2>
        <p className="text-warm-700 mb-4">
          When selecting a name for your {breedName}, consider their unique personality traits and 
          characteristics. {breedName}s are known for being {breedInfo.characteristics.slice(0, 3).join(', ')}, 
          so you might want to choose a name that reflects these qualities.
        </p>
        <p className="text-warm-700">
          Popular naming trends for {breedName}s include classic names, nature-inspired names, and 
          names that reflect their appearance or personality. Take your time to find a name that 
          feels right for both you and your new furry friend!
        </p>
      </section>
    </div>
  );
}
