import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'underline';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = 'underline',
  className = '',
  ...props
}) => {
  const baseStyles = variant === 'underline'
    ? 'w-full py-2 border-b border-gray-300 focus:border-black outline-none bg-transparent text-base'
    : 'w-full px-4 py-3 border border-gray-300 rounded focus:border-black outline-none bg-secondary text-base';

  return (
    <div className="w-full">
      {label && (
        <label className="block text-text-2 text-sm mb-2">
          {label}
          {props.required && <span className="text-primary ml-0.5">*</span>}
        </label>
      )}
      <input
        className={`${baseStyles} ${error ? 'border-primary' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-primary text-sm mt-1">{error}</p>}
    </div>
  );
};