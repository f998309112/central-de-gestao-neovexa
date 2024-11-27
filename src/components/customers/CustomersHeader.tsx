import React from 'react';
import { Search, Plus, Filter } from 'lucide-react';

interface CustomersHeaderProps {
  onSearch: (query: string) => void;
  onAddCustomer: () => void;
}

export const CustomersHeader: React.FC<CustomersHeaderProps> = ({
  onSearch,
  onAddCustomer
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">Clientes</h1>
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar clientes..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <button 
          onClick={onAddCustomer}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Novo Cliente
        </button>
      </div>
    </div>
  );
};