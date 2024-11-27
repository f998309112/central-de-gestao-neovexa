import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Formatting Functions
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

export function formatPercentage(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value / 100);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('pt-BR').format(value);
}

export function formatShortNumber(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toString();
}

// Date Formatting
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(dateObj);
}

export function formatRelativeTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - dateObj.getTime()) / (1000 * 60));

  if (diffInMinutes < 1) return 'agora';
  if (diffInMinutes < 60) return `${diffInMinutes}min atrás`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h atrás`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d atrás`;
  
  return formatDate(dateObj);
}

// Trend Formatting and Styling
export function formatTrend(value: number, type: 'currency' | 'percentage' = 'percentage'): string {
  const isPositive = value > 0;
  const prefix = isPositive ? '+' : '';
  
  if (type === 'currency') {
    return `${prefix}${formatCurrency(value)}`;
  }
  
  return `${prefix}${value.toFixed(1)}%`;
}

export function getTrendColor(value: number): string {
  if (value > 0) return 'text-green-600';
  if (value < 0) return 'text-red-600';
  return 'text-gray-600';
}

export function getTrendBackground(value: number): string {
  if (value > 0) return 'bg-green-100';
  if (value < 0) return 'bg-red-100';
  return 'bg-gray-100';
}

// Status Styling
export function getStatusColor(status: string): { text: string; bg: string } {
  switch (status.toLowerCase()) {
    case 'active':
      return { text: 'text-green-800', bg: 'bg-green-100' };
    case 'inactive':
      return { text: 'text-red-800', bg: 'bg-red-100' };
    case 'pending':
      return { text: 'text-yellow-800', bg: 'bg-yellow-100' };
    default:
      return { text: 'text-gray-800', bg: 'bg-gray-100' };
  }
}

// Calculation Helpers
export function calculatePercentageChange(current: number, previous: number): number {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

export function calculateGrowthRate(values: number[]): number {
  if (values.length < 2) return 0;
  const first = values[0];
  const last = values[values.length - 1];
  return calculatePercentageChange(last, first);
}

// Tailwind Utilities
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}