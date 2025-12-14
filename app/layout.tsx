import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dog Name Generator - Find the Perfect Name for Your Puppy',
  description: 'Discover the perfect name for your dog with our comprehensive dog name generator. Browse by breed, gender, and style to find unique, cute, funny, and cool dog names.',
  keywords: 'dog name generator, puppy names, dog names, pet name generator, dog name ideas, male dog names, female dog names, unique dog names, cute dog names',
  openGraph: {
    title: 'Dog Name Generator - Find the Perfect Name for Your Puppy',
    description: 'Discover the perfect name for your dog with our comprehensive dog name generator.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-warm-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
