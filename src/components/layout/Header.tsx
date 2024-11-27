import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  sidebarOpen, 
  setSidebarOpen,
  setMobileMenuOpen 
}) => {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="h-6 w-6" />
        </button>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hidden lg:block p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="h-6 w-6" />
        </button>
        <span className="text-blue-600 font-bold text-xl">NeovexaCore</span>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search className="h-5 w-5 text-gray-500" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-500" />
        </button>
        <div className="h-9 w-9 bg-blue-500 rounded-full"></div>
      </div>
    </header>
  );
};