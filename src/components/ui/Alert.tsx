import React from 'react';

interface AlertProps {
  title: string;
  description: string;
}

export const Alert: React.FC<AlertProps> = ({ title, description }) => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
    <h3 className="text-sm font-medium text-blue-800">{title}</h3>
    <p className="mt-1 text-sm text-blue-700">{description}</p>
  </div>
);