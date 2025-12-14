'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DogName, isFavorite, toggleFavorite, copyToClipboard } from '@/lib/utils';

interface NameCardProps {
  name: DogName;
  index: number;
}

export default function NameCard({ name, index }: NameCardProps) {
  const [favorite, setFavorite] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(name.name));
  }, [name.name]);

  const handleFavorite = () => {
    toggleFavorite(name.name);
    setFavorite(!favorite);
  };

  const handleCopy = async () => {
    await copyToClipboard(name.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-warm-100"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-2xl font-bold text-warm-900">{name.name}</h3>
        <button
          onClick={handleFavorite}
          className="text-2xl hover:scale-110 transition-transform"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {name.gender.map((g) => (
          <span
            key={g}
            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
          >
            {g}
          </span>
        ))}
        {name.styles.slice(0, 2).map((style) => (
          <span
            key={style}
            className="px-2 py-1 bg-warm-100 text-warm-700 text-xs rounded-full"
          >
            {style}
          </span>
        ))}
      </div>

      <button
        onClick={() => setShowMeaning(!showMeaning)}
        className="text-sm text-primary-600 hover:text-primary-700 font-medium mb-2"
      >
        {showMeaning ? '▼' : '▶'} {showMeaning ? 'Hide' : 'Show'} meaning
      </button>

      {showMeaning && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-sm text-warm-600 mb-3"
        >
          <p><strong>Meaning:</strong> {name.meaning}</p>
          <p><strong>Origin:</strong> {name.origin}</p>
        </motion.div>
      )}

      <button
        onClick={handleCopy}
        className="w-full mt-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm font-medium"
      >
        {copied ? '✓ Copied!' : '📋 Copy Name'}
      </button>
    </motion.div>
  );
}
