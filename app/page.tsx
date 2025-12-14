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

      {/* Popular Breeds Section - SEO Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mb-6 text-center">
            Popular Dog Names by Breed
          </h2>
          <p className="text-lg text-warm-700 mb-12 text-center max-w-3xl mx-auto">
            Different dog breeds have unique personalities and characteristics that inspire perfect names. 
            Discover the most popular naming trends for your dog&apos;s breed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Golden Retriever */}
            <div className="bg-gradient-to-br from-warm-50 to-primary-50 rounded-2xl p-6 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-3">🦮 Golden Retriever Names</h3>
              <p className="text-warm-700 mb-4 text-sm">
                Golden Retrievers are friendly, loyal, and intelligent. Popular names include <strong>Buddy</strong>, <strong>Charlie</strong>, <strong>Cooper</strong>, <strong>Daisy</strong>, and <strong>Luna</strong>. 
                These gentle giants deserve warm, friendly names that match their golden personality.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Buddy</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Charlie</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Daisy</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Cooper</span>
              </div>
            </div>

            {/* Labrador */}
            <div className="bg-gradient-to-br from-warm-50 to-primary-50 rounded-2xl p-6 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-3">🐕 Labrador Names</h3>
              <p className="text-warm-700 mb-4 text-sm">
                Labradors are energetic, outgoing, and loving. Top names include <strong>Max</strong>, <strong>Bailey</strong>, <strong>Rocky</strong>, <strong>Molly</strong>, and <strong>Sadie</strong>. 
                Labs need active, fun names that reflect their playful spirit and boundless energy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Max</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Bailey</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Rocky</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Molly</span>
              </div>
            </div>

            {/* German Shepherd */}
            <div className="bg-gradient-to-br from-warm-50 to-primary-50 rounded-2xl p-6 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-3">🐕‍🦺 German Shepherd Names</h3>
              <p className="text-warm-700 mb-4 text-sm">
                German Shepherds are brave, intelligent, and protective. Strong names like <strong>Rex</strong>, <strong>Duke</strong>, <strong>Zeus</strong>, <strong>Bella</strong>, and <strong>Athena</strong> suit their noble character. 
                These loyal guardians deserve powerful, commanding names.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Rex</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Duke</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Zeus</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Athena</span>
              </div>
            </div>

            {/* Bulldog */}
            <div className="bg-gradient-to-br from-warm-50 to-primary-50 rounded-2xl p-6 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-3">🐶 Bulldog Names</h3>
              <p className="text-warm-700 mb-4 text-sm">
                Bulldogs are calm, courageous, and friendly despite their tough appearance. Classic names like <strong>Tank</strong>, <strong>Bruno</strong>, <strong>Winston</strong>, <strong>Lola</strong>, and <strong>Stella</strong> 
                capture their unique blend of toughness and sweetness.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Tank</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Bruno</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Winston</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Lola</span>
              </div>
            </div>

            {/* Husky */}
            <div className="bg-gradient-to-br from-warm-50 to-primary-50 rounded-2xl p-6 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-3">🐺 Husky Names</h3>
              <p className="text-warm-700 mb-4 text-sm">
                Huskies are adventurous, energetic, and striking with their wolf-like appearance. Names like <strong>Storm</strong>, <strong>Shadow</strong>, <strong>Luna</strong>, <strong>Nova</strong>, and <strong>Blaze</strong> 
                reflect their wild spirit and beautiful blue eyes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Storm</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Shadow</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Luna</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Nova</span>
              </div>
            </div>

            {/* Poodle */}
            <div className="bg-gradient-to-br from-warm-50 to-primary-50 rounded-2xl p-6 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-3">🐩 Poodle Names</h3>
              <p className="text-warm-700 mb-4 text-sm">
                Poodles are intelligent, elegant, and sophisticated. Refined names like <strong>Coco</strong>, <strong>Pierre</strong>, <strong>Gigi</strong>, <strong>Oliver</strong>, and <strong>Sophie</strong> 
                match their graceful demeanor and high intelligence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Coco</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Pierre</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Gigi</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-warm-700">Sophie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Style Categories - SEO Content */}
      <section className="py-16 bg-gradient-to-b from-warm-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mb-6 text-center">
            Dog Names by Style & Personality
          </h2>
          <p className="text-lg text-warm-700 mb-12 text-center max-w-3xl mx-auto">
            Choose a name that matches your dog&apos;s unique personality and style. From cute and cuddly to tough and powerful, 
            find the perfect name that captures your pup&apos;s essence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Cute Dog Names */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🥰</span>
                <h3 className="text-2xl font-bold text-warm-900">Cute Dog Names</h3>
              </div>
              <p className="text-warm-700 mb-4">
                Cute dog names are perfect for adorable puppies with sweet personalities. These names work especially well for 
                small breeds like <strong>Pomeranians</strong>, <strong>Maltese</strong>, and <strong>Yorkies</strong>. Popular cute names include 
                <strong> Mochi</strong>, <strong>Peanut</strong>, <strong>Cupcake</strong>, <strong>Buttons</strong>, and <strong>Marshmallow</strong>.
              </p>
              <p className="text-warm-700 mb-4">
                <strong>For white dogs:</strong> Snowball, Cotton, Pearl, Casper, Angel<br/>
                <strong>For brown dogs:</strong> Cocoa, Teddy, Brownie, Mocha, Cinnamon<br/>
                <strong>For black dogs:</strong> Oreo, Pepper, Licorice, Midnight, Shadow
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Mochi</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Peanut</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Cupcake</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Buttons</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Marshmallow</span>
              </div>
            </div>

            {/* Funny Dog Names */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">😄</span>
                <h3 className="text-2xl font-bold text-warm-900">Funny Dog Names</h3>
              </div>
              <p className="text-warm-700 mb-4">
                Funny dog names bring joy and laughter to everyone who meets your pup. These playful names are great for 
                dogs with quirky personalities or ironic appearances. Try <strong>Sir Barks-a-Lot</strong>, <strong>Bark Twain</strong>, 
                <strong> Chewbacca</strong>, <strong>Wigglebutt</strong>, or <strong>Bark Obama</strong>.
              </p>
              <p className="text-warm-700 mb-4">
                <strong>Food-inspired:</strong> Waffles, Nacho, Pickles, Taco, Noodles<br/>
                <strong>Ironic names:</strong> Tiny (for big dogs), Goliath (for small dogs)<br/>
                <strong>Pop culture:</strong> Chewbarka, Droolius Caesar, Hairy Paw-ter
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Waffles</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Nacho</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Pickles</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Wigglebutt</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Noodles</span>
              </div>
            </div>

            {/* Unique Dog Names */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">✨</span>
                <h3 className="text-2xl font-bold text-warm-900">Unique Dog Names</h3>
              </div>
              <p className="text-warm-700 mb-4">
                Stand out at the dog park with a one-of-a-kind name. Unique names often draw from mythology, literature, 
                or different cultures. Consider <strong>Zephyr</strong>, <strong>Artemis</strong>, <strong>Onyx</strong>, 
                <strong> Koda</strong>, or <strong>Lyra</strong> for a distinctive choice.
              </p>
              <p className="text-warm-700 mb-4">
                <strong>Mythological:</strong> Apollo, Athena, Thor, Freya, Odin<br/>
                <strong>Nature-inspired:</strong> Aspen, River, Storm, Willow, Phoenix<br/>
                <strong>Celestial:</strong> Nova, Luna, Stella, Orion, Atlas
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Zephyr</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Artemis</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Onyx</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Koda</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Phoenix</span>
              </div>
            </div>

            {/* Tough Dog Names */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">💪</span>
                <h3 className="text-2xl font-bold text-warm-900">Tough Dog Names</h3>
              </div>
              <p className="text-warm-700 mb-4">
                Tough names suit strong, powerful breeds like <strong>Rottweilers</strong>, <strong>Pit Bulls</strong>, 
                and <strong>Mastiffs</strong>. These commanding names include <strong>Titan</strong>, <strong>Diesel</strong>, 
                <strong> Ranger</strong>, <strong>Gunner</strong>, and <strong>Blaze</strong>.
              </p>
              <p className="text-warm-700 mb-4">
                <strong>Military-inspired:</strong> Sergeant, Major, Tank, Trooper, Ranger<br/>
                <strong>Powerful:</strong> Thor, Zeus, Hercules, Maximus, Brutus<br/>
                <strong>Badass:</strong> Diesel, Harley, Rebel, Maverick, Axel
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Titan</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Diesel</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Ranger</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Maverick</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Blaze</span>
              </div>
            </div>

            {/* Elegant Dog Names */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">👑</span>
                <h3 className="text-2xl font-bold text-warm-900">Elegant Dog Names</h3>
              </div>
              <p className="text-warm-700 mb-4">
                Elegant names exude sophistication and grace, perfect for refined breeds like <strong>Poodles</strong>, 
                <strong>Afghan Hounds</strong>, and <strong>Cavalier King Charles Spaniels</strong>. Consider 
                <strong> Duchess</strong>, <strong>Winston</strong>, <strong>Vivienne</strong>, <strong>Sebastian</strong>, or <strong>Penelope</strong>.
              </p>
              <p className="text-warm-700 mb-4">
                <strong>Royal:</strong> Duke, Duchess, Prince, Princess, Baron<br/>
                <strong>Classic:</strong> Victoria, Alexander, Charlotte, Theodore, Eleanor<br/>
                <strong>Sophisticated:</strong> Bentley, Chanel, Armani, Versace, Gatsby
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Duchess</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Winston</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Vivienne</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Sebastian</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Gatsby</span>
              </div>
            </div>

            {/* Japanese Dog Names */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🎌</span>
                <h3 className="text-2xl font-bold text-warm-900">Japanese Dog Names</h3>
              </div>
              <p className="text-warm-700 mb-4">
                Japanese names are beautiful and meaningful, especially popular for breeds like <strong>Shiba Inu</strong>, 
                <strong>Akita</strong>, and <strong>Japanese Chin</strong>. Try <strong>Hachi</strong> (eight/loyal), 
                <strong>Sakura</strong> (cherry blossom), <strong>Yuki</strong> (snow), or <strong>Kuma</strong> (bear).
              </p>
              <p className="text-warm-700 mb-4">
                <strong>Nature:</strong> Sakura (cherry blossom), Yuki (snow), Hana (flower)<br/>
                <strong>Seasons:</strong> Haru (spring), Natsu (summer), Aki (autumn)<br/>
                <strong>Virtues:</strong> Hoshi (star), Ai (love), Nami (wave), Sora (sky)
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Hachi</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Sakura</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Yuki</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Kuma</span>
                <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-warm-800">Hana</span>
              </div>
            </div>
          </div>

          {/* Dog Color Names Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-200 mb-8">
            <h3 className="text-2xl font-bold text-warm-900 mb-6 text-center">🎨 Dog Names by Coat Color</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-warm-900 mb-3">⚪ White Dog Names</h4>
                <p className="text-sm text-warm-700 mb-2">
                  Perfect for white or cream-colored dogs like Samoyeds, West Highland Terriers, and white Poodles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Snowball</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Cotton</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Pearl</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Casper</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Ivory</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Angel</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Blanco</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Ghost</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-warm-900 mb-3">⚫ Black Dog Names</h4>
                <p className="text-sm text-warm-700 mb-2">
                  Ideal for black dogs like Black Labs, Rottweilers, and Scottish Terriers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Shadow</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Midnight</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Onyx</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Pepper</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Raven</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Oreo</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Coal</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Noir</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-warm-900 mb-3">🟤 Brown/Golden Dog Names</h4>
                <p className="text-sm text-warm-700 mb-2">
                  Great for brown, tan, or golden dogs like Golden Retrievers, Chocolate Labs, and Vizslas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Cocoa</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Mocha</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Honey</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Cinnamon</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Brownie</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Amber</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Caramel</span>
                  <span className="px-2 py-1 bg-warm-50 rounded text-xs">Toffee</span>
                </div>
              </div>
            </div>
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
