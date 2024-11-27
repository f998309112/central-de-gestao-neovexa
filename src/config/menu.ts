import { Home, BarChart2, Users, FileText, Activity, Settings } from 'lucide-react';
import type { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/' },
  { id: 'analytics', icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { id: 'customers', icon: Users, label: 'Customers', path: '/customers' },
  { id: 'reports', icon: FileText, label: 'Reports', path: '/reports' },
  { id: 'performance', icon: Activity, label: 'Performance', path: '/performance' },
  { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' }
];