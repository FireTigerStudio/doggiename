'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { filterNames, getRandomNames, DogName } from '@/lib/utils';
import FilterPanel from './FilterPanel';
import NameCard from './NameCard';

export default function NameGenerator() {
  const [filters, setFilters] = useState({
    gender: 'any',
    breed: 'any',
    style: 'any',
  });
  
  const [generatedNames, setGeneratedNames] = useState<DogName[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = () => {
    const filtered = filterNames(filters);
    const random = getRandomNames(filtered, 20);
    setGeneratedNames(random);
    setHasGenerated(true);
  };

  const handleRegenerate = () => {
    const filtered = filterNames(filters);
    const random = getRandomNames(filtered, 20);
    setGeneratedNames(random);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter Sidebar */}
        <div className="lg:col-span-1">
          <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          
          <button
            onClick={handleGenerate}
            className="w-full mt-6 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            🎲 Generate Names
          </button>
        </div>

        {/* Results Area */}
        <div className="lg:col-span-3">
          {!hasGenerated ? (
            <div className="text-center py-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-8xl mb-6 block">🐶</span>
                <h2 className="text-3xl font-bold text-warm-900 mb-4">
                  Ready to Find the Perfect Name?
                </h2>
                <p className="text-lg text-warm-600 mb-8">
                  Select your preferences and click Generate Names to discover amazing options!
                </p>
              </motion.div>
            </div>
          ) : generatedNames.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">😢</span>
              <h2 className="text-2xl font-bold text-warm-900 mb-4">
                No Names Found
              </h2>
              <p className="text-warm-600 mb-6">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={() => {
                  setFilters({ gender: 'any', breed: 'any', style: 'any' });
                  handleGenerate();
                }}
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-warm-900">
                  {generatedNames.length} Names Found
                </h2>
                <button
                  onClick={handleRegenerate}
                  className="px-4 py-2 bg-warm-100 hover:bg-warm-200 text-warm-700 rounded-lg font-medium transition-colors"
                >
                  🔄 Regenerate
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {generatedNames.map((name, index) => (
                  <NameCard key={`${name.name}-${index}`} name={name} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
