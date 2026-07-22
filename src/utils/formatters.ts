/**
 * Format a number as Angolan Kwanza currency
 */
export const formatCurrency = (value: number, currency: string = 'Kz'): string => {
  return new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: currency === 'Kz' ? 'AOA' : currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * Format a date to Angolan locale
 */
export const formatDate = (date: Date | string, format: 'short' | 'long' = 'short'): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('pt-AO', {
    year: 'numeric',
    month: format === 'long' ? 'long' : 'numeric',
    day: 'numeric',
  }).format(d);
};

/**
 * Calculate percentage of two values
 */
export const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};

/**
 * Get trend indicator
 */
export const getTrendIndicator = (current: number, previous: number): { value: number; direction: 'up' | 'down' | 'neutral' } => {
  if (current === previous) {
    return { value: 0, direction: 'neutral' };
  }
  const percentage = calculatePercentage(current - previous, previous);
  return {
    value: Math.abs(percentage),
    direction: current > previous ? 'up' : 'down',
  };
};

/**
 * Validate email
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Angola format)
 */
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+244|00244|9)\d{8,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Generate a random ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Delay function for async operations
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Check if object is empty
 */
export const isEmpty = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length === 0;
};

/**
 * Get color based on value (for charts)
 */
export const getColorByValue = (value: number, max: number): string => {
  const percentage = (value / max) * 100;
  if (percentage >= 80) return '#FF6B6B'; // Red
  if (percentage >= 60) return '#FFD93D'; // Yellow
  return '#16C784'; // Green
};

/**
 * Calculate financial metrics
 */
export const calculateMetrics = (income: number, expenses: number) => {
  const savings = income - expenses;
  const savingsRate = calculatePercentage(savings, income);
  return {
    savings,
    savingsRate,
    expenseRatio: calculatePercentage(expenses, income),
  };
};

/**
 * Sort array by property
 */
export const sortBy = <T>(array: T[], property: keyof T, order: 'asc' | 'desc' = 'asc'): T[] => {
  return [...array].sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (valueA < valueB) return order === 'asc' ? -1 : 1;
    if (valueA > valueB) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

/**
 * Filter array by multiple properties
 */
export const filterBy = <T extends Record<string, any>>(
  array: T[],
  filters: Partial<T>
): T[] => {
  return array.filter((item) => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === undefined || value === null) return true;
      return item[key] === value;
    });
  });
};
