import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-50 border-t border-warm-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-warm-900 mb-4">About Dog Name Generator</h3>
            <p className="text-warm-600 max-w-2xl mx-auto">
              Find the perfect name for your furry friend with our comprehensive dog name generator. 
              Discover unique, cute, funny, and meaningful names tailored to your dog&apos;s breed, 
              personality, and appearance.
            </p>
          </div>
          
          <div className="pt-8 border-t border-warm-200 text-warm-600">
            <p>&copy; {currentYear} Dog Name Generator. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
