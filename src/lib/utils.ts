import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and handles Tailwind conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format currency for display
 * @param amount - The amount to format
 * @param currency - Currency code (CNY, JPY, USD)
 * @param locale - Locale for formatting
 */
export function formatCurrency(
  amount: number,
  currency: string = 'CNY',
  locale: string = 'zh-CN'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format salary range for display
 */
export function formatSalaryRange(
  min: number,
  max: number,
  currency: string = 'CNY',
  period: string = 'monthly'
): string {
  const formattedMin = formatCurrency(min, currency);
  const formattedMax = formatCurrency(max, currency);
  const periodText = period === 'monthly' ? '/月' : period === 'yearly' ? '/年' : '';
  
  return `${formattedMin} - ${formattedMax}${periodText}`;
}

/**
 * Truncate text to specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @param suffix - Suffix to add when truncated
 */
export function truncateText(
  text: string,
  maxLength: number,
  suffix: string = '...'
): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Generate safe slug from text
 * @param text - Text to convert to slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w\-\u4e00-\u9fff]+/g, '') // Allow Chinese characters
    .replace(/\-\-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Get age from birth year
 */
export function getAgeFromBirthYear(birthYear: number): number {
  return new Date().getFullYear() - birthYear;
}

/**
 * Check if date is in the future
 */
export function isFutureDate(date: Date): boolean {
  return date > new Date();
}

/**
 * Format date for display
 * @param date - Date to format
 * @param options - Intl.DateTimeFormatOptions
 */
export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  locale: string = 'zh-CN'
): string {
  return new Intl.DateTimeFormat(locale, options).format(date);
}

/**
 * Calculate reading time for content
 * @param text - Text content
 * @param wordsPerMinute - Average reading speed (Chinese: ~300 chars/min)
 */
export function calculateReadingTime(
  text: string,
  wordsPerMinute: number = 300
): number {
  const characterCount = text.length;
  return Math.ceil(characterCount / wordsPerMinute);
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if device is likely mobile based on screen width
 * Should be used sparingly, prefer CSS media queries
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

/**
 * Scroll to element with smooth behavior
 */
export function scrollToElement(
  elementId: string,
  offset: number = 0,
  behavior: ScrollBehavior = 'smooth'
): void {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: behavior,
    });
  }
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
}

/**
 * Generate random ID
 */
export function generateRandomId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Local storage helpers with error handling
 */
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      if (typeof window === 'undefined') return defaultValue;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  
  set: <T>(key: string, value: T): void => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch {
      // Silently fail if storage is not available
    }
  },
  
  remove: (key: string): void => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch {
      // Silently fail if storage is not available
    }
  },
};