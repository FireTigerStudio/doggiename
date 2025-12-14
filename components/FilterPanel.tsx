'use client';

import { breeds, styles } from '@/lib/utils';

interface FilterPanelProps {
  filters: {
    gender: string;
    breed: string;
    style: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export default function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-warm-100">
      <h2 className="text-xl font-bold text-warm-900 mb-6">Filter Options</h2>
      
      <div className="space-y-6">
        {/* Gender Filter */}
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-2">
            Gender
          </label>
          <select
            value={filters.gender}
            onChange={(e) => onFilterChange('gender', e.target.value)}
            className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="any">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Breed Filter */}
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-2">
            Breed
          </label>
          <select
            value={filters.breed}
            onChange={(e) => onFilterChange('breed', e.target.value)}
            className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="any">Any Breed</option>
            {breeds.map((breed) => (
              <option key={breed.value} value={breed.value}>
                {breed.label}
              </option>
            ))}
          </select>
        </div>

        {/* Style Filter */}
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-2">
            Style
          </label>
          <select
            value={filters.style}
            onChange={(e) => onFilterChange('style', e.target.value)}
            className="w-full px-4 py-2 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="any">Any Style</option>
            {styles.map((style) => (
              <option key={style.value} value={style.value}>
                {style.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
