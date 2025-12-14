import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NameGenerator from '@/components/NameGenerator';

export const metadata: Metadata = {
  title: 'Dog Name Generator - Find Perfect Puppy Names by Breed & Style',
  description: 'Generate the perfect dog name for your new puppy! Browse 500+ unique, cute, funny, and cool dog names. Filter by breed, gender, and style. Free dog name generator with meanings.',
  keywords: 'dog name generator, puppy name generator, dog names, puppy names, pet name generator, male dog names, female dog names, unique dog names, cute dog names, funny dog names',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-warm-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-warm-900 mb-6">
              Find the Perfect Name for Your Dog 🐕
            </h1>
            <p className="text-xl text-warm-700 mb-8 max-w-3xl mx-auto">
              Discover unique, cute, funny, and cool dog names tailored to your puppy&apos;s breed, 
              personality, and style. Browse our collection of 500+ carefully curated names with meanings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Generator */}
      <NameGenerator />

      {/* Popular Breeds Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-warm-900 mb-8 text-center">
            Browse Names by Popular Breeds
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Golden Retriever', slug: 'golden-retriever-names', emoji: '🦮' },
              { name: 'Labrador', slug: 'labrador-names', emoji: '🐕' },
              { name: 'German Shepherd', slug: 'german-shepherd-names', emoji: '🐕‍🦺' },
              { name: 'Bulldog', slug: 'bulldog-names', emoji: '🐶' },
              { name: 'Beagle', slug: 'beagle-names', emoji: '🐕' },
              { name: 'Poodle', slug: 'poodle-names', emoji: '🐩' },
              { name: 'Husky', slug: 'husky-names', emoji: '🐺' },
              { name: 'Corgi', slug: 'corgi-names', emoji: '🐕' },
              { name: 'Rottweiler', slug: 'rottweiler-names', emoji: '🐕' },
              { name: 'Chihuahua', slug: 'chihuahua-names', emoji: '🐕' },
            ].map((breed) => (
              <Link
                key={breed.slug}
                href={`/${breed.slug}`}
                className="bg-warm-50 hover:bg-primary-50 rounded-xl p-6 text-center transition-colors border border-warm-200 hover:border-primary-300"
              >
                <span className="text-4xl mb-2 block">{breed.emoji}</span>
                <span className="text-sm font-medium text-warm-800">{breed.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Style Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-warm-900 mb-8 text-center">
            Explore Names by Style
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Cute Dog Names', slug: 'cute-dog-names', emoji: '🥰', desc: 'Adorable names for sweet puppies' },
              { name: 'Funny Dog Names', slug: 'funny-dog-names', emoji: '😄', desc: 'Hilarious names that bring smiles' },
              { name: 'Unique Dog Names', slug: 'unique-dog-names', emoji: '✨', desc: 'One-of-a-kind names for special dogs' },
              { name: 'Tough Dog Names', slug: 'tough-dog-names', emoji: '💪', desc: 'Strong names for powerful breeds' },
              { name: 'Elegant Dog Names', slug: 'elegant-dog-names', emoji: '👑', desc: 'Sophisticated and classy names' },
              { name: 'Japanese Dog Names', slug: 'japanese-dog-names', emoji: '🎌', desc: 'Beautiful Japanese-inspired names' },
            ].map((style) => (
              <Link
                key={style.slug}
                href={`/${style.slug}`}
                className="bg-white hover:shadow-lg rounded-2xl p-6 transition-shadow border border-warm-200"
              >
                <span className="text-4xl mb-3 block">{style.emoji}</span>
                <h3 className="text-xl font-bold text-warm-900 mb-2">{style.name}</h3>
                <p className="text-warm-600 text-sm">{style.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-warm-900 mb-6">
              How to Choose the Perfect Dog Name
            </h2>
            <p className="text-warm-700 mb-4">
              Choosing the right name for your new puppy is an exciting and important decision. 
              A dog&apos;s name is something you&apos;ll use countless times every day, so it&apos;s essential to 
              pick one that feels right for both you and your furry friend.
            </p>
            
            <h3 className="text-2xl font-bold text-warm-900 mb-4 mt-8">
              Consider Your Dog&apos;s Personality
            </h3>
            <p className="text-warm-700 mb-4">
              Every dog has a unique personality. Some are playful and energetic, while others are 
              calm and gentle. Observe your puppy&apos;s behavior and temperament to find a name that 
              matches their character. A bouncy, energetic puppy might suit a fun name like &quot;Buddy&quot; 
              or &quot;Ziggy,&quot; while a more dignified dog might be better suited to &quot;Duke&quot; or &quot;Bella.&quot;
            </p>

            <h3 className="text-2xl font-bold text-warm-900 mb-4 mt-8">
              Think About Breed Characteristics
            </h3>
            <p className="text-warm-700 mb-4">
              Different breeds have distinct characteristics that can inspire the perfect name. 
              Golden Retrievers are known for their friendly, loyal nature, while German Shepherds 
              are intelligent and protective. Consider your dog&apos;s breed traits when selecting a name.
            </p>

            <h3 className="text-2xl font-bold text-warm-900 mb-4 mt-8">
              Keep It Simple
            </h3>
            <p className="text-warm-700 mb-4">
              Dogs respond best to names with one or two syllables. Short, clear names like &quot;Max,&quot; 
              &quot;Luna,&quot; or &quot;Bear&quot; are easier for your dog to recognize and remember. Avoid names that 
              sound similar to common commands like &quot;sit&quot; or &quot;stay.&quot;
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
