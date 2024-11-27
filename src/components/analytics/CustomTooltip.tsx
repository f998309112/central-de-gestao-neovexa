import React from 'react';
import { formatCurrency, formatPercentage } from '../../lib/utils';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  valuePrefix?: string;
  valueSuffix?: string;
  formatter?: (value: number) => string;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
  valuePrefix = '',
  valueSuffix = '',
  formatter
}) => {
  if (!active || !payload) return null;

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-100">
      <p className="text-sm font-medium text-gray-600 mb-3">{label}</p>
      <div className="space-y-2">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm font-medium">{entry.name}:</span>
            </div>
            <span className="text-sm" style={{ color: entry.color }}>
              {valuePrefix}
              {formatter 
                ? formatter(entry.value)
                : typeof entry.value === 'number'
                  ? entry.value.toLocaleString()
                  : entry.value}
              {valueSuffix}
            </span>
          </div>
        ))}
        {payload[0]?.payload?.growth !== undefined && (
          <div className={`text-sm mt-2 pt-2 border-t ${
            payload[0].payload.growth >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            Crescimento: {formatPercentage(payload[0].payload.growth)}
          </div>
        )}
      </div>
    </div>
  );
};