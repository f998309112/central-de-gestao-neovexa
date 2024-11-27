import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
  path: string;
}

export interface MenuState {
  activeItemId: string;
  items: MenuItem[];
}