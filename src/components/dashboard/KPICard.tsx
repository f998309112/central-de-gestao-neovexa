import React from 'react';
import { Card } from '../ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative';
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  trend,
  trendType
}) => {
  return (
    <Card className="p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline justify-between">
        <p className="text-2xl font-semibold">{value}</p>
        <div className={`
          flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium
          ${trendType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
        `}>
          {trendType === 'positive' ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          {trend}
        </div>
      </div>
    </Card>
  );
}