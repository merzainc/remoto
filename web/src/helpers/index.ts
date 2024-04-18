import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export { authOptions } from './auth';
export { db } from './db';
export { getCurrentUser } from './session';
