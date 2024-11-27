import React from 'react';
import { Card } from '../ui/card';
import { CreditCard, Package, Download } from 'lucide-react';

export const BillingSettings: React.FC = () => {
  return (
    <Card>
      <div className="p-6 border-b">
        <h2 className="text-lg font-medium">Faturamento</h2>
        <p className="text-sm text-gray-500 mt-1">
          Gerencie seu plano e métodos de pagamento
        </p>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Plano Atual</h3>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
              Enterprise
            </span>
          </div>
          <div className="text-2xl font-bold">
            R$ 299<span className="text-sm text-gray-500 font-normal">/mês</span>
          </div>
          <button className="w-full mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Alterar Plano
          </button>
        </div>

        <div className="border-t pt-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <CreditCard className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium">Método de Pagamento</h3>
              <p className="text-sm text-gray-500">
                Visa terminando em 4242
              </p>
            </div>
          </div>
          <button className="text-blue-600 text-sm hover:underline">
            Atualizar método de pagamento
          </button>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-medium mb-4">Faturas Recentes</h3>
          <div className="space-y-3">
            {[
              { date: '01 Fev 2024', amount: 'R$ 299,00' },
              { date: '01 Jan 2024', amount: 'R$ 299,00' },
              { date: '01 Dez 2023', amount: 'R$ 299,00' }
            ].map((invoice, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{invoice.amount}</p>
                  <p className="text-sm text-gray-500">{invoice.date}</p>
                </div>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};