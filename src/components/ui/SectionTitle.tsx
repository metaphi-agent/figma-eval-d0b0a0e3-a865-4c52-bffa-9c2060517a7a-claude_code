import React from 'react';

interface SectionTitleProps {
  label: string;
  title: string;
  showArrows?: boolean;
  showViewAll?: boolean;
  onViewAll?: () => void;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  showArrows = false,
  showViewAll = false,
  onViewAll,
}) => {
  return (
    <div className="flex items-end justify-between mb-10">
      <div>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-5 h-10 bg-primary rounded" />
          <span className="text-primary font-semibold">{label}</span>
        </div>
        <h2 className="text-4xl font-semibold tracking-wider">{title}</h2>
      </div>
      <div className="flex gap-2">
        {showArrows && (
          <>
            <button className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5L4 12L11 19M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5L20 12L13 19M20 12H4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}
        {showViewAll && (
          <button
            onClick={onViewAll}
            className="px-12 py-4 bg-primary text-white rounded hover:bg-primary-hover transition-colors"
          >
            View All
          </button>
        )}
      </div>
    </div>
  );
};