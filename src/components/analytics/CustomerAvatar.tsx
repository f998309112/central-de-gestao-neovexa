import React from 'react';

interface CustomerAvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CustomerAvatar: React.FC<CustomerAvatarProps> = ({ name, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base'
  };

  return (
    <div className={`
      ${sizeClasses[size]}
      rounded-full bg-blue-100 text-blue-600 font-medium
      flex items-center justify-center
    `}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
};