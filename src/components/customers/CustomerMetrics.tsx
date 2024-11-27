import React from 'react';
import { Card } from '../ui/card';
import { formatCurrency, formatPercentage, getTrendColor } from '../../lib/utils';

interface Metric {
  label: string;
  value: string | number;
  trend: number;
  prefix?: string;
  suffix?: string;
}

interface CustomerMetricsProps {
  metrics: Metric[];
}

export const CustomerMetrics: React.FC<CustomerMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6">
          <p className="text-sm text-gray-600">{metric.label}</p>
          <p className="text-2xl font-semibold mt-1">
            {metric.prefix}{typeof metric.value === 'number' ? 
              metric.value.toLocaleString() : 
              metric.value
            }{metric.suffix}
          </p>
          <p className={`text-sm mt-1 ${getTrendColor(metric.trend)}`}>
            {metric.trend > 0 ? '+' : ''}{metric.trend}% vs mês anterior
          </p>
        </Card>
      ))}
    </div>
  );
};