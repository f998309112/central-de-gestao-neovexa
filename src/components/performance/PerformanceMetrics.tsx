import React from 'react';
import { Card } from '../ui/card';
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Clock } from 'lucide-react';
import { formatCurrency, formatPercentage } from '../../lib/utils';

const metrics = [
  {
    id: 'revenue',
    label: 'Receita Total',
    value: 156700,
    trend: 12.5,
    icon: DollarSign,
    formatter: formatCurrency
  },
  {
    id: 'customers',
    label: 'Total de Clientes',
    value: 126,
    trend: 8.2,
    icon: Users,
    formatter: (value: number) => value.toString()
  },
  {
    id: 'conversion',
    label: 'Taxa de Conversão',
    value: 23.5,
    trend: 2.1,
    icon: Target,
    formatter: (value: number) => `${value}%`
  },
  {
    id: 'avgTime',
    label: 'Tempo Médio de Uso',
    value: 18.2,
    trend: 1.3,
    icon: Clock,
    formatter: (value: number) => `${value}min`
  }
];

export const PerformanceMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.id} className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <metric.icon className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-500">{metric.label}</span>
              </div>
              <div className="mt-2 text-2xl font-bold">
                {metric.formatter(metric.value)}
              </div>
            </div>
            <div className={`
              flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium
              ${metric.trend >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
            `}>
              {metric.trend >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              {metric.trend >= 0 ? '+' : ''}{metric.trend}%
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};