import React from 'react';
import { Card } from '../ui/card';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  target: string;
  current: string;
  status: 'achieved' | 'at-risk' | 'behind';
  progress: number;
}

const goals: Goal[] = [
  {
    id: '1',
    title: 'Meta de Receita Mensal',
    target: 'R$ 60.000',
    current: 'R$ 58.920',
    status: 'at-risk',
    progress: 98
  },
  {
    id: '2',
    title: 'Novos Clientes',
    target: '150',
    current: '156',
    status: 'achieved',
    progress: 104
  },
  {
    id: '3',
    title: 'Taxa de Retenção',
    target: '95%',
    current: '92%',
    status: 'behind',
    progress: 97
  }
];

const statusConfig = {
  'achieved': {
    icon: CheckCircle2,
    color: 'text-green-500',
    bg: 'bg-green-100',
    text: 'Meta Atingida'
  },
  'at-risk': {
    icon: AlertCircle,
    color: 'text-yellow-500',
    bg: 'bg-yellow-100',
    text: 'Em Risco'
  },
  'behind': {
    icon: XCircle,
    color: 'text-red-500',
    bg: 'bg-red-100',
    text: 'Abaixo da Meta'
  }
};

export const PerformanceGoals: React.FC = () => {
  return (
    <Card>
      <div className="p-6 border-b">
        <h2 className="text-lg font-medium">Metas e Objetivos</h2>
      </div>
      <div className="divide-y">
        {goals.map((goal) => {
          const status = statusConfig[goal.status];
          const StatusIcon = status.icon;

          return (
            <div key={goal.id} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{goal.title}</h3>
                  <div className="mt-1 text-sm text-gray-500">
                    Meta: {goal.target} | Atual: {goal.current}
                  </div>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${status.bg}`}>
                  <StatusIcon className={`h-4 w-4 ${status.color}`} />
                  <span className={`text-sm font-medium ${status.color}`}>
                    {status.text}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                  <span>Progresso</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      goal.status === 'achieved' ? 'bg-green-500' :
                      goal.status === 'at-risk' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};