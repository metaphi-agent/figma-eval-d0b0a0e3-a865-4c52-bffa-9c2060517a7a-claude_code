import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white py-3">
        <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex-1" />
          <p className="text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <Link to="/" className="font-semibold underline ml-2">
              ShopNow
            </Link>
          </p>
          <div className="flex-1 flex justify-end">
            <select className="bg-transparent text-white border-none outline-none cursor-pointer">
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-[#E5E5E5]">
        <div className="max-w-[1170px] mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-black">
              Exclusive
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-12">
              <Link
                to="/"
                className="text-base text-black hover:underline transition-all"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="text-base text-black hover:underline transition-all"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="text-base text-black hover:underline transition-all"
              >
                About
              </Link>
              <Link
                to="/signup"
                className="text-base text-black hover:underline transition-all"
              >
                Sign Up
              </Link>
            </nav>

            {/* Search & Icons */}
            <div className="flex items-center gap-6">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[243px] py-2 px-5 pr-12 bg-[#F5F5F5] text-xs placeholder:text-[#7D8184] focus:outline-none focus:ring-2 focus:ring-[#DB4444] rounded"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <img src="./assets/icons/search.svg" alt="Search" className="w-6 h-6" />
                </button>
              </div>

              {/* Icons */}
              <Link to="/wishlist" className="relative hover:opacity-70 transition-opacity">
                <img src="./assets/icons/heart.svg" alt="Wishlist" className="w-8 h-8" />
              </Link>

              <Link to="/cart" className="relative hover:opacity-70 transition-opacity">
                <img src="./assets/icons/cart.svg" alt="Cart" className="w-8 h-8" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#DB4444] text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>

              <Link to="/account" className="hover:opacity-70 transition-opacity">
                <img src="./assets/icons/user.svg" alt="Account" className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
