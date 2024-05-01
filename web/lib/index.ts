import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function formatDate(dateString: string) {
  return new Date(`${dateString}`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
