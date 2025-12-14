import dogNamesData from './dogNames.json';

export interface DogName {
  name: string;
  gender: string[];
  breeds: string[];
  styles: string[];
  meaning: string;
  origin: string;
}

export interface FilterOptions {
  gender?: string;
  breed?: string;
  color?: string;
  style?: string;
}

export const breeds = [
  { value: 'golden-retriever', label: 'Golden Retriever' },
  { value: 'labrador', label: 'Labrador' },
  { value: 'german-shepherd', label: 'German Shepherd' },
  { value: 'bulldog', label: 'Bulldog' },
  { value: 'beagle', label: 'Beagle' },
  { value: 'poodle', label: 'Poodle' },
  { value: 'husky', label: 'Husky' },
  { value: 'corgi', label: 'Corgi' },
  { value: 'rottweiler', label: 'Rottweiler' },
  { value: 'chihuahua', label: 'Chihuahua' },
];

export const styles = [
  { value: 'cute', label: 'Cute' },
  { value: 'funny', label: 'Funny' },
  { value: 'unique', label: 'Unique' },
  { value: 'cool', label: 'Cool' },
  { value: 'tough', label: 'Tough' },
  { value: 'classic', label: 'Classic' },
  { value: 'elegant', label: 'Elegant' },
];

export function filterNames(filters: FilterOptions): DogName[] {
  let filtered = dogNamesData.names as DogName[];

  if (filters.gender && filters.gender !== 'any') {
    filtered = filtered.filter(name => name.gender.includes(filters.gender!));
  }

  if (filters.breed && filters.breed !== 'any') {
    filtered = filtered.filter(name => name.breeds.includes(filters.breed!));
  }

  if (filters.style && filters.style !== 'any') {
    filtered = filtered.filter(name => name.styles.includes(filters.style!));
  }

  return filtered;
}

export function getRandomNames(names: DogName[], count: number = 20): DogName[] {
  const shuffled = [...names].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, names.length));
}

export function getNamesByBreed(breed: string): DogName[] {
  return (dogNamesData.names as DogName[]).filter(name => 
    name.breeds.includes(breed)
  );
}

export function getNamesByStyle(style: string): DogName[] {
  return (dogNamesData.names as DogName[]).filter(name => 
    name.styles.includes(style)
  );
}

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  const favorites = localStorage.getItem('dogNameFavorites');
  return favorites ? JSON.parse(favorites) : [];
}

export function toggleFavorite(name: string): void {
  const favorites = getFavorites();
  const index = favorites.indexOf(name);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(name);
  }
  
  localStorage.setItem('dogNameFavorites', JSON.stringify(favorites));
}

export function isFavorite(name: string): boolean {
  return getFavorites().includes(name);
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function formatBreedName(slug: string): string {
  if (!slug) return '';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function formatStyleName(slug: string): string {
  if (!slug) return '';
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}
