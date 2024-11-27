import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { Card } from '../ui/card';
import { CustomTooltip } from './CustomTooltip';
import { formatCurrency } from '../../lib/utils';

interface RevenueChartProps {
  period: string;
}

const data = [
  { month: 'Jan', revenue: 45680, target: 50000, growth: 12.5 },
  { month: 'Fev', revenue: 52390, target: 52000, growth: 14.7 },
  { month: 'Mar', revenue: 48750, target: 54000, growth: -7.0 },
  { month: 'Abr', revenue: 51420, target: 56000, growth: 5.5 },
  { month: 'Mai', revenue: 54680, target: 58000, growth: 6.3 },
  { month: 'Jun', revenue: 58920, target: 60000, growth: 7.8 }
];

export const RevenueChart: React.FC<RevenueChartProps> = ({ period }) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium">Receita Mensal</h3>
          <p className="text-sm text-gray-500 mt-1">Comparativo com meta mensal</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-600">Receita</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <span className="text-sm text-gray-600">Meta</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 20 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              dy={10}
              label={{ 
                value: 'Mês', 
                position: 'bottom',
                offset: 0,
                style: { textAnchor: 'middle', fill: '#666' }
              }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
              label={{ 
                value: 'Receita (R$)', 
                angle: -90, 
                position: 'insideLeft',
                offset: 0,
                style: { textAnchor: 'middle', fill: '#666' }
              }}
            />
            <Tooltip 
              content={<CustomTooltip 
                valuePrefix="R$ " 
                formatter={(value: number) => formatCurrency(value)}
              />} 
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              fill="url(#colorRevenue)"
              strokeWidth={2}
              name="Receita"
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#94a3b8"
              strokeDasharray="5 5"
              fill="none"
              strokeWidth={2}
              name="Meta"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          {data[data.length - 1].growth >= 0 ? (
            <span className="text-green-600">↑ Crescimento de {data[data.length - 1].growth}%</span>
          ) : (
            <span className="text-red-600">↓ Queda de {Math.abs(data[data.length - 1].growth)}%</span>
          )} em relação ao mês anterior
        </p>
      </div>
    </Card>
  );
};