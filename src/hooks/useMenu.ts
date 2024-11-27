import { useState, useCallback } from 'react';
import type { MenuState } from '../types/menu';
import { menuItems } from '../config/menu';

export function useMenu() {
  const [menuState, setMenuState] = useState<MenuState>({
    activeItemId: 'dashboard',
    items: menuItems,
  });

  const setActiveItem = useCallback((itemId: string) => {
    setMenuState(prev => ({
      ...prev,
      activeItemId: itemId
    }));
  }, []);

  return {
    activeItemId: menuState.activeItemId,
    menuItems: menuState.items,
    setActiveItem
  };
}