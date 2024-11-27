import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { Card } from '../ui/card';
import { CustomTooltip } from '../analytics/CustomTooltip';

const data = [
  { month: 'Jan', retention: 95, industry: 85 },
  { month: 'Fev', retention: 93, industry: 84 },
  { month: 'Mar', retention: 96, industry: 86 },
  { month: 'Abr', retention: 94, industry: 85 },
  { month: 'Mai', retention: 97, industry: 87 },
  { month: 'Jun', retention: 98, industry: 86 }
];

export const CustomerRetentionChart: React.FC = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Retenção de Clientes</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-sm text-gray-600">Sua empresa</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <span className="text-sm text-gray-600">Média do setor</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              width={40}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip valueSuffix="%" />} />
            <Line 
              type="monotone" 
              dataKey="retention" 
              stroke="#10b981" 
              strokeWidth={2}
              dot={false}
              name="Taxa de Retenção"
            />
            <Line 
              type="monotone" 
              dataKey="industry" 
              stroke="#94a3b8" 
              strokeWidth={2}
              dot={false}
              name="Média do Setor"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
        <p className="text-sm text-emerald-800">
          Sua taxa de retenção está 12% acima da média do setor nos últimos 6 meses.
        </p>
      </div>
    </Card>
  );
}