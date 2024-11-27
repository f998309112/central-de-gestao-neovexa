import React from 'react';

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'pending';
}

const statusConfig = {
  active: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    label: 'Ativo'
  },
  inactive: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    label: 'Inativo'
  },
  pending: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    label: 'Pendente'
  }
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = statusConfig[status];

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
};