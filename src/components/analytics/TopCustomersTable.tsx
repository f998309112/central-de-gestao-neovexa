import React, { useState, useMemo } from 'react';
import { MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../ui/card';
import { TableHeader } from './TableHeader';
import { StatusBadge } from './StatusBadge';
import { CustomerAvatar } from './CustomerAvatar';
import { formatCurrency, formatDate } from '../../lib/utils';

interface Customer {
  id: string;
  name: string;
  revenue: number;
  growth: number;
  status: 'active' | 'inactive' | 'pending';
  lastPurchase: string;
  segment: string;
}

interface TopCustomersTableProps {
  customers: Customer[];
}

type SortField = keyof Customer;
type FilterType = 'all' | 'active' | 'inactive' | 'pending';

export const TopCustomersTable: React.FC<TopCustomersTableProps> = ({ customers }) => {
  const [sortField, setSortField] = useState<SortField>('revenue');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filter, setFilter] = useState<FilterType>('all');
  const [search, setSearch] = useState('');

  const filteredAndSortedCustomers = useMemo(() => {
    return [...customers]
      .filter(customer => {
        const matchesFilter = filter === 'all' || customer.status === filter;
        const matchesSearch = customer.name.toLowerCase().includes(search.toLowerCase()) ||
                            customer.segment.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
      })
      .sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];
        const modifier = sortDirection === 'asc' ? 1 : -1;
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue) * modifier;
        }
        return ((aValue as number) - (bValue as number)) * modifier;
      });
  }, [customers, sortField, sortDirection, filter, search]);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-lg font-medium">Top Clientes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder="Buscar cliente..."
            className="px-3 py-2 border rounded-lg text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="px-3 py-2 border rounded-lg text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value as FilterType)}
          >
            <option value="all">Todos os Status</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
            <option value="pending">Pendentes</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <TableHeader label="Cliente" />
              <TableHeader
                label="Receita"
                sortable
                sortField="revenue"
                currentSort={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <TableHeader
                label="Crescimento"
                sortable
                sortField="growth"
                currentSort={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <TableHeader label="Status" />
              <TableHeader
                label="Última Compra"
                sortable
                sortField="lastPurchase"
                currentSort={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <TableHeader label="Segmento" />
              <th className="pb-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedCustomers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <CustomerAvatar name={customer.name} />
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.segment}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3">{formatCurrency(customer.revenue)}</td>
                <td className="py-3">
                  <div className="flex items-center gap-1">
                    {customer.growth >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={customer.growth >= 0 ? 'text-green-600' : 'text-red-600'}>
                      {customer.growth}%
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <StatusBadge status={customer.status} />
                </td>
                <td className="py-3 text-gray-600">
                  {formatDate(customer.lastPurchase)}
                </td>
                <td className="py-3 text-gray-600">{customer.segment}</td>
                <td className="py-3">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreHorizontal className="h-5 w-5 text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredAndSortedCustomers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Nenhum cliente encontrado com os filtros atuais.
        </div>
      )}
    </Card>
  );
};