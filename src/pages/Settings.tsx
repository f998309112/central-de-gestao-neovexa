import React from 'react';
import { SettingsHeader } from '../components/settings/SettingsHeader';
import { GeneralSettings } from '../components/settings/GeneralSettings';
import { IntegrationsSettings } from '../components/settings/IntegrationsSettings';
import { NotificationSettings } from '../components/settings/NotificationSettings';
import { SecuritySettings } from '../components/settings/SecuritySettings';
import { BillingSettings } from '../components/settings/BillingSettings';

export const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <SettingsHeader />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <GeneralSettings />
          <IntegrationsSettings />
          <NotificationSettings />
          <SecuritySettings />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <BillingSettings />
        </div>
      </div>
    </div>
  );
};