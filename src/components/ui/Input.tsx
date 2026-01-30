import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-base text-black font-normal">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-[#F5F5F5] border-0 text-black text-base placeholder:text-[#7D8184] focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:bg-white transition-colors ${error ? 'ring-2 ring-[#DB4444]' : ''} ${className}`}
          {...props}
        />
        {error && (
          <span className="text-sm text-[#DB4444]">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
