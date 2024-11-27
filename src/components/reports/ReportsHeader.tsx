import React from 'react';
import { Filter, Plus } from 'lucide-react';

interface ReportsHeaderProps {
  onNewReport: () => void;
  onFilter: () => void;
}

export const ReportsHeader: React.FC<ReportsHeaderProps> = ({
  onNewReport,
  onFilter
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <div className="flex items-center gap-3">
        <button 
          onClick={onFilter}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
        >
          <Filter className="h-5 w-5" />
          Filtros
        </button>
        <button 
          onClick={onNewReport}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Novo Relatório
        </button>
      </div>
    </div>
  );
};