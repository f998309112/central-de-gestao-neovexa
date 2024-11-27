import React from 'react';
import { Save } from 'lucide-react';

export const SettingsHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Configurações</h1>
        <p className="text-sm text-gray-500 mt-1">
          Gerencie as configurações da sua conta e preferências do sistema
        </p>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <Save className="h-4 w-4" />
        Salvar Alterações
      </button>
    </div>
  );
};