import React from 'react';
import { Download, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { formatDate } from '../../lib/utils';

interface Report {
  id: string;
  title: string;
  description: string;
  lastGenerated: string;
  status: 'updated' | 'outdated';
}

interface AvailableReportsProps {
  reports: Report[];
  onDownload: (reportId: string) => void;
  onSchedule: (reportId: string) => void;
}

export const AvailableReports: React.FC<AvailableReportsProps> = ({
  reports,
  onDownload,
  onSchedule
}) => {
  return (
    <Card>
      <div className="p-4 border-b">
        <h2 className="font-semibold">Relatórios Disponíveis</h2>
      </div>
      <div className="divide-y">
        {reports.map((report) => (
          <div key={report.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex-1">
              <h3 className="font-medium">{report.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{report.description}</p>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <span className="text-gray-500">
                  Última geração: {formatDate(report.lastGenerated)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  report.status === 'updated' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status === 'updated' ? 'Atualizado' : 'Desatualizado'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => onSchedule(report.id)}
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Calendar className="h-4 w-4" />
                Agendar
              </button>
              <button 
                onClick={() => onDownload(report.id)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                <Download className="h-4 w-4" />
                Baixar
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};