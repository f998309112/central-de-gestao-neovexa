import React, { useState } from 'react';
import { ReportsHeader } from '../components/reports/ReportsHeader';
import { AvailableReports } from '../components/reports/AvailableReports';
import { ScheduledReports } from '../components/reports/ScheduledReports';

const availableReports = [
  {
    id: '1',
    title: 'Relatório Financeiro',
    description: 'MRR, Receita, Custos e Margens',
    lastGenerated: '2024-02-17',
    status: 'updated' as const
  },
  {
    id: '2',
    title: 'Análise de Clientes',
    description: 'Segmentação, Churn e Lifetime Value',
    lastGenerated: '2024-02-15',
    status: 'updated' as const
  },
  {
    id: '3',
    title: 'Performance de Vendas',
    description: 'Métricas de conversão e vendas',
    lastGenerated: '2024-02-14',
    status: 'outdated' as const
  }
];

const scheduledReports = [
  {
    id: '1',
    name: 'Relatório Mensal de MRR',
    frequency: 'Mensal',
    nextRun: '2024-03-01',
    recipients: ['time@empresa.com'],
    status: 'active' as const
  },
  {
    id: '2',
    name: 'Análise Semanal de Vendas',
    frequency: 'Semanal',
    nextRun: '2024-02-24',
    recipients: ['vendas@empresa.com'],
    status: 'active' as const
  }
];

export const Reports: React.FC = () => {
  const handleNewReport = () => {
    console.log('Creating new report...');
  };

  const handleFilter = () => {
    console.log('Opening filter modal...');
  };

  const handleDownload = (reportId: string) => {
    console.log('Downloading report:', reportId);
  };

  const handleSchedule = (reportId: string) => {
    console.log('Scheduling report:', reportId);
  };

  const handleEdit = (reportId: string) => {
    console.log('Editing scheduled report:', reportId);
  };

  return (
    <div className="space-y-6">
      <ReportsHeader
        onNewReport={handleNewReport}
        onFilter={handleFilter}
      />
      
      <AvailableReports
        reports={availableReports}
        onDownload={handleDownload}
        onSchedule={handleSchedule}
      />
      
      <ScheduledReports
        reports={scheduledReports}
        onEdit={handleEdit}
      />
    </div>
  );
};