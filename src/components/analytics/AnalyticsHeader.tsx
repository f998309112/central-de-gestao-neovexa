import React from 'react';
import { Download, Filter } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface AnalyticsHeaderProps {
  onPeriodChange: (period: string) => void;
  onMetricChange: (metric: string) => void;
  onExport: () => void;
}

const periodOptions: FilterOption[] = [
  { id: '7d', label: 'Últimos 7 dias' },
  { id: '30d', label: 'Últimos 30 dias' },
  { id: '6m', label: 'Últimos 6 meses' },
  { id: '1y', label: 'Último ano' },
  { id: 'all', label: 'Todo período' }
];

const metricOptions: FilterOption[] = [
  { id: 'revenue', label: 'Receita' },
  { id: 'customers', label: 'Clientes' },
  { id: 'conversion', label: 'Taxa de Conversão' },
  { id: 'churn', label: 'Churn Rate' }
];

export const AnalyticsHeader: React.FC<AnalyticsHeaderProps> = ({
  onPeriodChange,
  onMetricChange,
  onExport
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <h1 className="text-2xl font-semibold">Analytics</h1>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select 
            className="px-3 py-2 border rounded-lg bg-white text-sm"
            onChange={(e) => onPeriodChange(e.target.value)}
          >
            {periodOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <select 
            className="px-3 py-2 border rounded-lg bg-white text-sm"
            onChange={(e) => onMetricChange(e.target.value)}
          >
            {metricOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <button 
          onClick={onExport}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="h-4 w-4" />
          Exportar
        </button>
      </div>
    </div>
  );
};