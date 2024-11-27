import React, { useState } from 'react';
import { CustomersHeader } from '../components/customers/CustomersHeader';
import { CustomerMetrics } from '../components/customers/CustomerMetrics';
import { CustomersList } from '../components/customers/CustomersList';

const mockCustomers = [
  {
    id: '1001',
    name: 'Tech Delta',
    revenue: 156700,
    growth: 22,
    status: 'active' as const,
    lastPurchase: '2024-02-18',
    segment: 'Enterprise'
  },
  {
    id: '1002',
    name: 'Empresa Alpha',
    revenue: 125800,
    growth: 15,
    status: 'active' as const,
    lastPurchase: '2024-02-15',
    segment: 'Enterprise'
  },
  {
    id: '1003',
    name: 'Startup Beta',
    revenue: 45600,
    growth: -5,
    status: 'inactive' as const,
    lastPurchase: '2024-01-20',
    segment: 'Small Business'
  },
  {
    id: '1004',
    name: 'Corporation Gamma',
    revenue: 89300,
    growth: 8,
    status: 'pending' as const,
    lastPurchase: '2024-02-10',
    segment: 'Mid-Market'
  },
  {
    id: '1005',
    name: 'Solutions Omega',
    revenue: 67800,
    growth: 12,
    status: 'active' as const,
    lastPurchase: '2024-02-05',
    segment: 'Mid-Market'
  }
];

const metrics = [
  {
    label: 'Total de Clientes',
    value: 126,
    trend: 8.2
  },
  {
    label: 'MRR',
    value: 45680,
    trend: 12.5,
    prefix: 'R$ '
  },
  {
    label: 'Churn Rate',
    value: 2.4,
    trend: -1.1,
    suffix: '%'
  }
];

export const Customers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState(mockCustomers);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = mockCustomers.filter(customer =>
      customer.name.toLowerCase().includes(query.toLowerCase()) ||
      customer.segment.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCustomers(filtered);
  };

  const handleAddCustomer = () => {
    // Implement new customer modal/form
    console.log('Add new customer');
  };

  const handleViewDetails = (customerId: string) => {
    // Implement customer details view
    console.log('View customer details:', customerId);
  };

  return (
    <div className="space-y-6">
      <CustomersHeader
        onSearch={handleSearch}
        onAddCustomer={handleAddCustomer}
      />
      
      <CustomerMetrics metrics={metrics} />
      
      <CustomersList
        customers={filteredCustomers}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
};