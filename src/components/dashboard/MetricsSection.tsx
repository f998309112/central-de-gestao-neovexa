import React from 'react';
import { KPICard } from './KPICard';

export const MetricsSection: React.FC = () => {
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <KPICard 
        title="Receita Mensal" 
        value="R$ 45.680" 
        trend="+12.5%" 
        trendType="positive"
      />
      <KPICard 
        title="Novos Clientes" 
        value="126" 
        trend="+8.2%" 
        trendType="positive"
      />
      <KPICard 
        title="Churn Rate" 
        value="2.4%" 
        trend="-1.1%" 
        trendType="positive"
      />
      <KPICard 
        title="Ticket Médio" 
        value="R$ 362" 
        trend="-3.2%" 
        trendType="negative"
      />
    </div>
  );
};