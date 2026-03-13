import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function ensureLightMode() {
//   if (typeof document !== 'undefined') {
//     // Always set dark mode to false
//     document.documentElement.classList.toggle('dark', false);
//   }
// }

/**
 * Removes any dark mode classes from a className string
 * @param className The class string to process
 * @returns The class string with dark mode classes removed
//  */
// export function removeDarkClasses(className: string): string {
//   return className
//     .split(' ')
//     .filter(cls => !cls.startsWith('dark:'))
//     .join(' ');
// }
