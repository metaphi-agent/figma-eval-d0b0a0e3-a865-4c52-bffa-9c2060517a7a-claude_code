import { ReactNode } from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  action?: ReactNode;
}

export default function SectionTitle({ subtitle, title, action }: SectionTitleProps) {
  return (
    <div className="flex items-end justify-between mb-10">
      <div className="space-y-5">
        {subtitle && (
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#DB4444] rounded" />
            <span className="text-base font-semibold text-[#DB4444]">{subtitle}</span>
          </div>
        )}
        <h2 className="text-4xl font-semibold text-black tracking-wide">
          {title}
        </h2>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
