import React from 'react';
import { Bell, Users, ShoppingCart, AlertCircle } from 'lucide-react';
import { Card } from '../ui/card';

interface Alert {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning';
}

const alerts: Alert[] = [
  {
    id: '1',
    icon: <Users className="h-5 w-5 text-blue-500" />,
    title: 'Novo lead qualificado',
    description: 'Empresa ABC demonstrou interesse alto no produto',
    timestamp: '2 minutos atrás',
    type: 'success'
  },
  {
    id: '2',
    icon: <ShoppingCart className="h-5 w-5 text-green-500" />,
    title: 'Nova venda realizada',
    description: 'Cliente XYZ adquiriu o plano enterprise',
    timestamp: '15 minutos atrás',
    type: 'success'
  },
  {
    id: '3',
    icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
    title: 'Atenção necessária',
    description: 'Cliente Beta reportou problema técnico',
    timestamp: '1 hora atrás',
    type: 'warning'
  }
];

export const AlertsCard: React.FC = () => (
  <Card className="p-6">
    <div className="flex items-center gap-2 mb-4">
      <Bell className="h-6 w-6 text-blue-500" />
      <h2 className="text-lg font-semibold">Alertas Recentes</h2>
    </div>
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div 
          key={alert.id}
          className={`
            flex items-start gap-3 p-3 rounded-lg border
            ${alert.type === 'success' ? 'bg-green-50 border-green-100' :
              alert.type === 'warning' ? 'bg-amber-50 border-amber-100' :
              'bg-blue-50 border-blue-100'}
          `}
        >
          {alert.icon}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h4 className="font-medium">{alert.title}</h4>
              <span className="text-xs text-gray-500">{alert.timestamp}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Card>
);