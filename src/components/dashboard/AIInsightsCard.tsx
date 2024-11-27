import React from 'react';
import { Lightbulb, TrendingUp, UserPlus, AlertTriangle } from 'lucide-react';
import { Card } from '../ui/card';

interface Insight {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  priority: 'high' | 'medium' | 'low';
}

const insights: Insight[] = [
  {
    id: '1',
    icon: <TrendingUp className="h-5 w-5 text-blue-500" />,
    title: 'Oportunidade de Upsell',
    description: 'Identificamos potencial de upsell em 15% da base de clientes atual.',
    action: 'Iniciar campanha de upgrade para planos premium',
    priority: 'high'
  },
  {
    id: '2',
    icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    title: 'Alerta de Churn',
    description: '3 clientes importantes apresentam sinais de possível cancelamento.',
    action: 'Agendar reunião de relacionamento com urgência',
    priority: 'high'
  },
  {
    id: '3',
    icon: <UserPlus className="h-5 w-5 text-green-500" />,
    title: 'Expansão de Mercado',
    description: 'Novo segmento identificado com alto potencial de conversão.',
    action: 'Desenvolver estratégia de entrada no mercado',
    priority: 'medium'
  }
];

export const AIInsightsCard: React.FC = () => (
  <Card className="p-6">
    <div className="flex items-center gap-2 mb-4">
      <Lightbulb className="h-6 w-6 text-blue-500" />
      <h2 className="text-lg font-semibold">Insights IA</h2>
    </div>
    <div className="space-y-4">
      {insights.map((insight) => (
        <div 
          key={insight.id}
          className="bg-blue-50 border border-blue-100 rounded-lg p-4"
        >
          <div className="flex items-start gap-3">
            {insight.icon}
            <div className="flex-1">
              <h3 className="font-medium text-blue-900">{insight.title}</h3>
              <p className="text-sm text-blue-700 mt-1">{insight.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600">
                  Ação Sugerida: {insight.action}
                </span>
                <span className={`
                  px-2 py-1 rounded-full text-xs font-medium
                  ${insight.priority === 'high' ? 'bg-red-100 text-red-700' : 
                    insight.priority === 'medium' ? 'bg-amber-100 text-amber-700' : 
                    'bg-green-100 text-green-700'}
                `}>
                  {insight.priority === 'high' ? 'Alta Prioridade' : 
                   insight.priority === 'medium' ? 'Média Prioridade' : 
                   'Baixa Prioridade'}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Card>
);