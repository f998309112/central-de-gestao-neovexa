import React from 'react';
import { Card } from '../ui/card';
import { Building2, Globe, Users } from 'lucide-react';

export const GeneralSettings: React.FC = () => {
  return (
    <Card>
      <div className="p-6 border-b">
        <h2 className="text-lg font-medium">Configurações Gerais</h2>
        <p className="text-sm text-gray-500 mt-1">
          Informações básicas sobre sua empresa e preferências do sistema
        </p>
      </div>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome da Empresa
            </label>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="flex-1 px-3 py-2 border rounded-lg"
                placeholder="Nome da sua empresa"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gray-400" />
              <input
                type="url"
                className="flex-1 px-3 py-2 border rounded-lg"
                placeholder="https://exemplo.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tamanho da Equipe
            </label>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-400" />
              <select className="flex-1 px-3 py-2 border rounded-lg">
                <option>1-10 funcionários</option>
                <option>11-50 funcionários</option>
                <option>51-200 funcionários</option>
                <option>201-500 funcionários</option>
                <option>500+ funcionários</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};