import React from 'react';
import { Link } from 'react-router-dom';

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface CategoryCardProps {
  category: Category;
  isActive?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, isActive = false }) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className={`w-[170px] h-[145px] border rounded flex flex-col items-center justify-center gap-4 transition-colors ${
        isActive
          ? 'bg-primary text-white border-primary'
          : 'border-gray-300 hover:bg-primary hover:text-white hover:border-primary'
      }`}
    >
      <div className="w-14 h-14">
        {category.icon}
      </div>
      <span className="font-medium">{category.name}</span>
    </Link>
  );
};

// Category Icons
export const PhoneIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38.9375 6.125H17.0625C15.1346 6.125 13.5625 7.69709 13.5625 9.625V46.375C13.5625 48.3029 15.1346 49.875 17.0625 49.875H38.9375C40.8654 49.875 42.4375 48.3029 42.4375 46.375V9.625C42.4375 7.69709 40.8654 6.125 38.9375 6.125Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25.6667 7H30.3333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 44.0834V44.1159" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ComputerIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.667 9.33203H9.33366C6.75633 9.33203 4.66699 11.4214 4.66699 13.9987V37.332C4.66699 39.9094 6.75633 41.9987 9.33366 41.9987H46.667C49.2443 41.9987 51.3337 39.9094 51.3337 37.332V13.9987C51.3337 11.4214 49.2443 9.33203 46.667 9.33203Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.333 46.6654H39.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 42V46.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 42V46.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WatchIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 7V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 7V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 42V49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 42V49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 21V28L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CameraIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.33301 15.1663C9.33301 13.0438 11.0438 11.333 13.1663 11.333H17.0397C18.0663 11.333 19.0463 10.9197 19.7597 10.1897L22.2397 7.60968C22.953 6.87968 23.933 6.46634 24.9597 6.46634H31.0397C32.0663 6.46634 33.0463 6.87968 33.7597 7.60968L36.2397 10.1897C36.953 10.9197 37.933 11.333 38.9597 11.333H42.833C44.9555 11.333 46.6663 13.0438 46.6663 15.1663V42.833C46.6663 44.9555 44.9555 46.6663 42.833 46.6663H13.1663C11.0438 46.6663 9.33301 44.9555 9.33301 42.833V15.1663Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 37.333C32.6024 37.333 36.3333 33.6021 36.3333 28.9997C36.3333 24.3973 32.6024 20.6663 28 20.6663C23.3976 20.6663 19.6667 24.3973 19.6667 28.9997C19.6667 33.6021 23.3976 37.333 28 37.333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const HeadphoneIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6667 42V28C11.6667 23.6697 13.3863 19.5164 16.4519 16.4509C19.5175 13.3853 23.6707 11.6667 28 11.6667C32.3293 11.6667 36.4825 13.3853 39.5481 16.4509C42.6137 19.5164 44.3333 23.6697 44.3333 28V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44.333 44.333C44.333 45.571 43.8413 46.7583 42.9661 47.6335C42.0909 48.5087 40.9036 49.0003 39.6663 49.0003H37.333C36.0956 49.0003 34.9083 48.5087 34.0331 47.6335C33.158 46.7583 32.6663 45.571 32.6663 44.333V37.333C32.6663 36.0956 33.158 34.9083 34.0331 34.0331C34.9083 33.158 36.0956 32.6663 37.333 32.6663H44.333V44.333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.667 44.333C11.667 45.571 12.1586 46.7583 13.0338 47.6335C13.909 48.5087 15.0963 49.0003 16.3337 49.0003H18.667C19.9043 49.0003 21.0916 48.5087 21.9668 47.6335C22.842 46.7583 23.3337 45.571 23.3337 44.333V37.333C23.3337 36.0956 22.842 34.9083 21.9668 34.0331C21.0916 33.158 19.9043 32.6663 18.667 32.6663H11.667V44.333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const GamepadIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.667 21H9.33301C6.75633 21 4.66699 23.0893 4.66699 25.6667V39.6667C4.66699 42.244 6.75633 44.3333 9.33301 44.3333H46.667C49.2443 44.3333 51.3337 42.244 51.3337 39.6667V25.6667C51.3337 23.0893 49.2443 21 46.667 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 30.333V37.333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 33.833H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 28V28.0233" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 32.667V32.6903" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 11.667L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38.5 11.667L35 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
