import React from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';
import { menuItems } from '../../config/menu';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  return (
    <aside className={`
      ${isOpen ? 'w-64' : 'w-20'} 
      bg-white border-r h-full transition-all duration-300
      flex flex-col
    `}>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.id}
            icon={<item.icon />}
            label={item.label}
            path={item.path}
            active={location.pathname === item.path}
            collapsed={!isOpen}
          />
        ))}
      </nav>
    </aside>
  );
};