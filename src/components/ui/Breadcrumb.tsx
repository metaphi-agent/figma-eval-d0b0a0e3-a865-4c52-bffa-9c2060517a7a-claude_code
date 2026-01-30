import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="py-20">
      <ol className="flex items-center gap-3 text-sm">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-text-2">/</span>}
            {item.href ? (
              <Link to={item.href} className="text-text-2 hover:text-black transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-black">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};