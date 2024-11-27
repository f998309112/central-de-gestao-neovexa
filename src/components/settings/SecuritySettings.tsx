import React from 'react';
import { Card } from '../ui/card';
import { Shield, Key, Smartphone, History } from 'lucide-react';

const securityLogs = [
  {
    event: 'Login bem-sucedido',
    location: 'São Paulo, BR',
    device: 'Chrome em Windows',
    timestamp: '2024-02-18T14:30:00'
  },
  {
    event: 'Alteração de senha',
    location: 'São Paulo, BR',
    device: 'Chrome em Windows',
    timestamp: '2024-02-15T10:15:00'
  },
  {
    event: 'Login em novo dispositivo',
    location: 'Rio de Janeiro, BR',
    device: 'Safari em MacOS',
    timestamp: '2024-02-14T16:45:00'
  }
];

export const SecuritySettings: React.FC = () => {
  return (
    <Card>
      <div className="p-6 border-b">
        <h2 className="text-lg font-medium">Segurança</h2>
        <p className="text-sm text-gray-500 mt-1">
          Configurações de segurança e autenticação
        </p>
      </div>
      <div className="divide-y">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Key className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium">Senha</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Última alteração há 3 dias
                </p>
              </div>
            </div>
            <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
              Alterar senha
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Smartphone className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium">Autenticação em duas etapas</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Adicione uma camada extra de segurança
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Ativar
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-gray-100 rounded-lg">
              <History className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium">Histórico de Atividades</h3>
              <p className="text-sm text-gray-500 mt-1">
                Últimas atividades da sua conta
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {securityLogs.map((log, index) => (
              <div key={index} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{log.event}</p>
                  <div className="text-sm text-gray-500 mt-1">
                    <p>{log.location} • {log.device}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(log.timestamp).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};