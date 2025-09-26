import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDisplayName = (name: string, category: string): string => {
  const regex = new RegExp(category, 'i'); // case-insensitive match
  return name.replace(regex, '').trim();
};
