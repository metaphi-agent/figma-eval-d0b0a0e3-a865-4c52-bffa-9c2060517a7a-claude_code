import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: '404 Error' },
  ];

  return (
    <div className="container-custom pb-20">
      <Breadcrumb items={breadcrumbItems} />

      <div className="text-center py-20">
        <h1 className="text-[110px] font-medium tracking-wider mb-10">404 Not Found</h1>
        <p className="text-base mb-20">Your visited page not found. You may go home page.</p>
        <Link to="/">
          <Button>Back to home page</Button>
        </Link>
      </div>
    </div>
  );
};
