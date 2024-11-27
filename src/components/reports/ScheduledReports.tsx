import React from 'react';
import { Card } from '../ui/card';
import { formatDate } from '../../lib/utils';

interface ScheduledReport {
  id: string;
  name: string;
  frequency: string;
  nextRun: string;
  recipients: string[];
  status: 'active' | 'paused';
}

interface ScheduledReportsProps {
  reports: ScheduledReport[];
  onEdit: (reportId: string) => void;
}

export const ScheduledReports: React.FC<ScheduledReportsProps> = ({
  reports,
  onEdit
}) => {
  return (
    <Card>
      <div className="p-4 border-b">
        <h2 className="font-semibold">Relatórios Agendados</h2>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left px-4 py-3 font-medium">Nome</th>
            <th className="text-left px-4 py-3 font-medium">Frequência</th>
            <th className="text-left px-4 py-3 font-medium">Próxima Execução</th>
            <th className="text-left px-4 py-3 font-medium">Destinatários</th>
            <th className="text-left px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">{report.name}</td>
              <td className="px-4 py-3 text-gray-500">{report.frequency}</td>
              <td className="px-4 py-3 text-gray-500">{formatDate(report.nextRun)}</td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  {report.recipients.map((email, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
                    >
                      {email}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  report.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status === 'active' ? 'Ativo' : 'Pausado'}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <button 
                  onClick={() => onEdit(report.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};