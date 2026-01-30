import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded transition-colors duration-150 inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'border border-black text-black hover:bg-gray-100',
  };

  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-12 py-4 text-base',
    lg: 'px-12 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};