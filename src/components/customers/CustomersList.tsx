import React, { useState } from 'react';
import { Filter, MoreHorizontal } from 'lucide-react';
import { Card } from '../ui/card';
import { CustomerAvatar } from '../analytics/CustomerAvatar';
import { StatusBadge } from '../analytics/StatusBadge';
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

interface CustomersListProps {
  customers: Customer[];
  onViewDetails: (customerId: string) => void;
}

export const CustomersList: React.FC<CustomersListProps> = ({
  customers,
  onViewDetails
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(customers.length / itemsPerPage);
  
  const paginatedCustomers = customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Card>
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold">Lista de Clientes</h2>
        <button className="flex items-center gap-2 px-3 py-1.5 text-gray-700 border rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          Filtros
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-4 font-medium text-gray-600">Cliente</th>
              <th className="text-left p-4 font-medium text-gray-600">MRR</th>
              <th className="text-left p-4 font-medium text-gray-600">Crescimento</th>
              <th className="text-left p-4 font-medium text-gray-600">Status</th>
              <th className="text-left p-4 font-medium text-gray-600">Última Compra</th>
              <th className="text-left p-4 font-medium text-gray-600">Segmento</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <CustomerAvatar name={customer.name} />
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-500">ID: {customer.id}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4">{formatCurrency(customer.revenue)}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1 ${
                    customer.growth > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {customer.growth > 0 ? '↑' : '↓'} 
                    {Math.abs(customer.growth)}%
                  </span>
                </td>
                <td className="p-4">
                  <StatusBadge status={customer.status} />
                </td>
                <td className="p-4 text-gray-600">{formatDate(customer.lastPurchase)}</td>
                <td className="p-4">{customer.segment}</td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => onViewDetails(customer.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Mostrando {((currentPage - 1) * itemsPerPage) + 1}-
          {Math.min(currentPage * itemsPerPage, customers.length)} de {customers.length} clientes
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próximo
          </button>
        </div>
      </div>
    </Card>
  );
};