import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card } from '../ui/card';
import { CustomTooltip } from '../analytics/CustomTooltip';

const data = [
  { month: 'Jan', revenue: 45680, projected: 48000 },
  { month: 'Fev', revenue: 52390, projected: 53000 },
  { month: 'Mar', revenue: 48750, projected: 51000 },
  { month: 'Abr', revenue: 51420, projected: 54000 },
  { month: 'Mai', revenue: 54680, projected: 56000 },
  { month: 'Jun', revenue: 58920, projected: 59000 }
];

export const RevenueOverviewChart: React.FC = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Visão Geral da Receita</h3>
        <select className="px-3 py-1.5 text-sm border rounded-lg">
          <option value="6m">Últimos 6 meses</option>
          <option value="1y">Último ano</option>
          <option value="ytd">Ano atual</option>
        </select>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip valuePrefix="R$ " />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              fill="url(#colorRevenue)"
              strokeWidth={2}
              name="Receita"
            />
            <Area
              type="monotone"
              dataKey="projected"
              stroke="#94a3b8"
              strokeDasharray="5 5"
              fill="none"
              strokeWidth={2}
              name="Projeção"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}