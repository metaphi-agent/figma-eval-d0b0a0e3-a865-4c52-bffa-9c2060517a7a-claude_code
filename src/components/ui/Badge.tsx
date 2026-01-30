import React from 'react';

interface BadgeProps {
  variant?: 'discount' | 'new';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'discount', children }) => {
  const styles = {
    discount: 'bg-primary text-white',
    new: 'bg-success text-white',
  };

  return (
    <span className={`px-3 py-1 rounded text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
};