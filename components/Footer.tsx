import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-50 border-t border-warm-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-warm-900 mb-4">Popular Breeds</h3>
            <ul className="space-y-2">
              <li><Link href="/golden-retriever-names" className="text-warm-600 hover:text-primary-600">Golden Retriever Names</Link></li>
              <li><Link href="/labrador-names" className="text-warm-600 hover:text-primary-600">Labrador Names</Link></li>
              <li><Link href="/german-shepherd-names" className="text-warm-600 hover:text-primary-600">German Shepherd Names</Link></li>
              <li><Link href="/husky-names" className="text-warm-600 hover:text-primary-600">Husky Names</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-warm-900 mb-4">Name Styles</h3>
            <ul className="space-y-2">
              <li><Link href="/cute-dog-names" className="text-warm-600 hover:text-primary-600">Cute Dog Names</Link></li>
              <li><Link href="/funny-dog-names" className="text-warm-600 hover:text-primary-600">Funny Dog Names</Link></li>
              <li><Link href="/unique-dog-names" className="text-warm-600 hover:text-primary-600">Unique Dog Names</Link></li>
              <li><Link href="/tough-dog-names" className="text-warm-600 hover:text-primary-600">Tough Dog Names</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-warm-900 mb-4">About</h3>
            <p className="text-warm-600">
              Find the perfect name for your furry friend with our comprehensive dog name generator. 
              Browse by breed, style, and personality to discover the ideal name.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-warm-200 text-center text-warm-600">
          <p>&copy; {currentYear} Dog Name Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
