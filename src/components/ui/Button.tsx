import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded transition-colors duration-150 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-[#DB4444] text-white hover:bg-[#C93939] disabled:bg-gray-300 disabled:cursor-not-allowed',
    secondary: 'bg-[#00FF66] text-black hover:bg-[#00E65C] disabled:bg-gray-300 disabled:cursor-not-allowed',
    outline: 'border-2 border-black text-black hover:bg-[#F5F5F5] disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed'
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-12 py-4 text-base',
    lg: 'px-16 py-5 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
