import React from 'react';
import { PerformanceHeader } from '../components/performance/PerformanceHeader';
import { PerformanceMetrics } from '../components/performance/PerformanceMetrics';
import { PerformanceCharts } from '../components/performance/PerformanceCharts';
import { PerformanceGoals } from '../components/performance/PerformanceGoals';

export const Performance: React.FC = () => {
  return (
    <div className="space-y-6">
      <PerformanceHeader />
      <PerformanceMetrics />
      <PerformanceCharts />
      <PerformanceGoals />
    </div>
  );
};