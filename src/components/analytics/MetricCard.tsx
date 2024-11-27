import React from 'react';
import { Card } from '../ui/card';
import { cn, getTrendColor, getTrendBackground } from '../../lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeLabel: string;
  isPositive: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeLabel,
  isPositive
}) => {
  return (
    <Card className="p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2">
        <div className="text-3xl font-bold">{value}</div>
        <div className="mt-2 flex items-center gap-1">
          <span className={cn(
            'text-sm font-medium',
            getTrendColor(isPositive ? 1 : -1)
          )}>
            {change}
          </span>
          <span className="text-sm text-gray-500">{changeLabel}</span>
        </div>
      </div>
    </Card>
  );
};