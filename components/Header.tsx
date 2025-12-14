import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🐕</span>
            <span className="text-xl font-bold text-primary-600">Dog Name Generator</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-warm-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/golden-retriever-names" className="text-warm-700 hover:text-primary-600 transition-colors">
              By Breed
            </Link>
            <Link href="/cute-dog-names" className="text-warm-700 hover:text-primary-600 transition-colors">
              By Style
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
