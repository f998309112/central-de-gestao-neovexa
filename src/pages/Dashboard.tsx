import React from 'react';
import { MetricsSection } from '../components/dashboard/MetricsSection';
import { AIInsightsCard } from '../components/dashboard/AIInsightsCard';
import { AlertsCard } from '../components/dashboard/AlertsCard';
import { RevenueOverviewChart } from '../components/dashboard/RevenueOverviewChart';
import { CustomerRetentionChart } from '../components/dashboard/CustomerRetentionChart';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <MetricsSection />

      {/* Charts */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <RevenueOverviewChart />
        <CustomerRetentionChart />
      </div>

      {/* Insights and Alerts */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <AIInsightsCard />
        <AlertsCard />
      </div>
    </div>
  );
};