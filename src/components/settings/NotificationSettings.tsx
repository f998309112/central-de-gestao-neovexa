import React from 'react';
import { Card } from '../ui/card';
import { Bell, Mail, MessageSquare, AlertTriangle } from 'lucide-react';

const notificationTypes = [
  {
    id: 'alerts',
    icon: Bell,
    title: 'Alertas do Sistema',
    description: 'Notificações sobre eventos importantes do sistema',
    email: true,
    push: true,
    slack: false
  },
  {
    id: 'reports',
    icon: Mail,
    title: 'Relatórios',
    description: 'Receba relatórios periódicos por email',
    email: true,
    push: false,
    slack: true
  },
  {
    id: 'messages',
    icon: MessageSquare,
    title: 'Mensagens',
    description: 'Notificações de mensagens e comentários',
    email: false,
    push: true,
    slack: true
  },
  {
    id: 'warnings',
    icon: AlertTriangle,
    title: 'Avisos',
    description: 'Alertas sobre problemas e situações críticas',
    email: true,
    push: true,
    slack: true
  }
];

export const NotificationSettings: React.FC = () => {
  return (
    <Card>
      <div className="p-6 border-b">
        <h2 className="text-lg font-medium">Notificações</h2>
        <p className="text-sm text-gray-500 mt-1">
          Configure como você deseja receber as notificações
        </p>
      </div>
      <div className="divide-y">
        {notificationTypes.map((type) => {
          const Icon = type.icon;
          return (
            <div key={type.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icon className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{type.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {type.description}
                  </p>
                  <div className="mt-4 flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600"
                        defaultChecked={type.email}
                      />
                      <span className="text-sm text-gray-600">Email</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600"
                        defaultChecked={type.push}
                      />
                      <span className="text-sm text-gray-600">Push</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600"
                        defaultChecked={type.slack}
                      />
                      <span className="text-sm text-gray-600">Slack</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};