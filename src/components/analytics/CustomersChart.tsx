import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { Card } from '../ui/card';
import { CustomTooltip } from './CustomTooltip';

interface CustomersChartProps {
  period: string;
}

const data = [
  { month: 'Jan', newCustomers: 26, churned: 4 },
  { month: 'Fev', newCustomers: 32, churned: 6 },
  { month: 'Mar', newCustomers: 28, churned: 8 },
  { month: 'Abr', newCustomers: 35, churned: 5 },
  { month: 'Mai', newCustomers: 42, churned: 7 },
  { month: 'Jun', newCustomers: 38, churned: 4 }
];

export const CustomersChart: React.FC<CustomersChartProps> = ({ period }) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Movimentação de Clientes</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
              dataKey="newCustomers" 
              fill="#2563eb" 
              radius={[4, 4, 0, 0]} 
              name="Novos Clientes"
            />
            <Bar 
              dataKey="churned" 
              fill="#ef4444" 
              radius={[4, 4, 0, 0]} 
              name="Churned"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};