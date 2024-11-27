import React, { useState } from 'react';
import { AnalyticsHeader } from '../components/analytics/AnalyticsHeader';
import { RevenueChart } from '../components/analytics/RevenueChart';
import { CustomersChart } from '../components/analytics/CustomersChart';
import { MetricCard } from '../components/analytics/MetricCard';
import { TopCustomersTable } from '../components/analytics/TopCustomersTable';
import { CustomTooltip } from '../components/analytics/CustomTooltip';

const mockCustomers = [
  {
    id: '1',
    name: 'Empresa Alpha',
    revenue: 125800,
    growth: 15,
    status: 'active' as const,
    lastPurchase: '2024-02-15',
    segment: 'Enterprise'
  },
  {
    id: '2',
    name: 'Corporação Beta',
    revenue: 98900,
    growth: 12,
    status: 'active' as const,
    lastPurchase: '2024-02-10',
    segment: 'Mid-Market'
  },
  {
    id: '3',
    name: 'Startup Gamma',
    revenue: 74500,
    growth: -5,
    status: 'inactive' as const,
    lastPurchase: '2024-01-25',
    segment: 'Small Business'
  },
  {
    id: '4',
    name: 'Tech Delta',
    revenue: 156700,
    growth: 22,
    status: 'active' as const,
    lastPurchase: '2024-02-18',
    segment: 'Enterprise'
  },
  {
    id: '5',
    name: 'Solutions Epsilon',
    revenue: 89300,
    growth: 8,
    status: 'pending' as const,
    lastPurchase: '2024-02-05',
    segment: 'Mid-Market'
  }
];

export const Analytics: React.FC = () => {
  const [period, setPeriod] = useState('6m');
  const [metric, setMetric] = useState('revenue');

  const handlePeriodChange = (newPeriod: string) => {
    setPeriod(newPeriod);
    // Here you would typically fetch new data based on the period
  };

  const handleMetricChange = (newMetric: string) => {
    setMetric(newMetric);
    // Here you would typically update the visualizations based on the metric
  };

  const handleExport = () => {
    // Implement export functionality
    console.log('Exporting data...');
  };

  return (
    <div className="space-y-6">
      <AnalyticsHeader 
        onPeriodChange={handlePeriodChange}
        onMetricChange={handleMetricChange}
        onExport={handleExport}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Taxa de Conversão"
          value="23.5%"
          change="+2.1%"
          changeLabel="vs mês anterior"
          isPositive={true}
        />
        <MetricCard
          title="Tempo Médio de Uso"
          value="18.2min"
          change="+1.3min"
          changeLabel="vs mês anterior"
          isPositive={true}
        />
        <MetricCard
          title="NPS"
          value="72"
          change="+5"
          changeLabel="vs mês anterior"
          isPositive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart period={period} />
        <CustomersChart period={period} />
      </div>

      <TopCustomersTable customers={mockCustomers} />
    </div>
  );
};