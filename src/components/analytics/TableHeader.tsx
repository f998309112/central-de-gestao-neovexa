import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface TableHeaderProps {
  label: string;
  sortable?: boolean;
  sortField?: string;
  currentSort: string;
  sortDirection: 'asc' | 'desc';
  onSort?: (field: string) => void;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  label,
  sortable,
  sortField,
  currentSort,
  sortDirection,
  onSort
}) => {
  const isActive = sortField === currentSort;

  return (
    <th className="pb-3 font-medium text-gray-600">
      {sortable ? (
        <button
          onClick={() => onSort?.(sortField!)}
          className="flex items-center gap-2 hover:text-gray-900"
        >
          {label}
          <ArrowUpDown className={`h-4 w-4 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
        </button>
      ) : (
        label
      )}
    </th>
  );
};