import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active?: boolean;
  onClick?: () => void;
  collapsed?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  path,
  active, 
  onClick,
  collapsed 
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link 
      to={path}
      onClick={onClick}
      className={`
        flex items-center p-3 rounded-lg cursor-pointer
        transition-colors duration-200
        hover:bg-gray-100
        ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}
        ${collapsed ? 'justify-center' : 'space-x-3'}
      `}
    >
      {icon}
      {!collapsed && <span className="font-medium truncate">{label}</span>}
    </Link>
  );
};