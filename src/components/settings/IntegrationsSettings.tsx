import React from 'react';
import { Card } from '../ui/card';
import { Database, MessageSquare, FileText, BarChart4 } from 'lucide-react';

const integrations = [
  {
    id: 'erp',
    name: 'Sistema ERP',
    description: 'Integração com seu sistema de gestão empresarial',
    icon: Database,
    connected: true,
    lastSync: '2024-02-18T10:30:00'
  },
  {
    id: 'crm',
    name: 'CRM',
    description: 'Sincronização com sua plataforma de CRM',
    icon: MessageSquare,
    connected: true,
    lastSync: '2024-02-18T09:45:00'
  },
  {
    id: 'docs',
    name: 'Documentos',
    description: 'Integração com sistema de documentos',
    icon: FileText,
    connected: false
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Conexão com plataforma de análise de dados',
    icon: BarChart4,
    connected: true,
    lastSync: '2024-02-18T11:00:00'
  }
];

export const IntegrationsSettings: React.FC = () => {
  return (
    <Card>
      <div className="p-6 border-b">
        <h2 className="text-lg font-medium">Integrações</h2>
        <p className="text-sm text-gray-500 mt-1">
          Gerencie as integrações com sistemas externos
        </p>
      </div>
      <div className="divide-y">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <div key={integration.id} className="p-6 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icon className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium">{integration.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {integration.description}
                  </p>
                  {integration.connected && integration.lastSync && (
                    <p className="text-sm text-gray-500 mt-2">
                      Última sincronização: {new Date(integration.lastSync).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
              <div>
                {integration.connected ? (
                  <button className="px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50">
                    Desconectar
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Conectar
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};