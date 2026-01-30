import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProductCard } from '../components/blocks/ProductCard';
import {
  CategoryCard,
  PhoneIcon,
  ComputerIcon,
  WatchIcon,
  CameraIcon,
  HeadphoneIcon,
  GamepadIcon,
} from '../components/blocks/CategoryCard';
import { flashSaleProducts, bestSellingProducts, exploreProducts } from '../data/products';

const categories = [
  { id: 'phones', name: 'Phones', icon: <PhoneIcon /> },
  { id: 'computers', name: 'Computers', icon: <ComputerIcon /> },
  { id: 'smartwatch', name: 'SmartWatch', icon: <WatchIcon /> },
  { id: 'camera', name: 'Camera', icon: <CameraIcon /> },
  { id: 'headphones', name: 'HeadPhones', icon: <HeadphoneIcon /> },
  { id: 'gaming', name: 'Gaming', icon: <GamepadIcon /> },
];

export const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
  const [activeCategory, setActiveCategory] = useState('camera');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container-custom flex">
          {/* Sidebar Categories */}
          <div className="hidden lg:block w-[217px] border-r border-gray-200 pt-10 pr-4">
            <ul className="space-y-4">
              {[
                "Woman's Fashion",
                "Men's Fashion",
                'Electronics',
                'Home & Lifestyle',
                'Medicine',
                'Sports & Outdoor',
                "Baby's & Toys",
                'Groceries & Pets',
                'Health & Beauty',
              ].map((category, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="flex items-center justify-between text-base hover:text-primary transition-colors"
                  >
                    {category}
                    {(index === 0 || index === 1) && (
                      <svg
                        width="8"
                        height="13"
                        viewBox="0 0 8 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 1L6 6.5L1 12" stroke="black" strokeWidth="1.5" />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Banner */}
          <div className="flex-1 py-10 pl-11">
            <div className="bg-black text-white rounded overflow-hidden relative min-h-[344px] flex items-center">
              <div className="p-16 z-10">
                <div className="flex items-center gap-6 mb-5">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple"
                    className="w-10 h-12 invert"
                  />
                  <span className="text-gray-300">iPhone 14 Series</span>
                </div>
                <h1 className="text-5xl font-semibold leading-tight mb-6">
                  Up to 10%
                  <br />
                  off Voucher
                </h1>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gray-300 transition-colors"
                >
                  Shop Now
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 5L20 12L13 19M20 12H4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[496px] h-[352px]">
                <img
                  src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&h=400&fit=crop"
                  alt="iPhone 14"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === 2 ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex items-end gap-20 mb-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-10 bg-primary rounded" />
                <span className="text-primary font-semibold">Today's</span>
              </div>
              <h2 className="text-4xl font-semibold tracking-wider">Flash Sales</h2>
            </div>
            {/* Timer */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <span className="text-xs font-medium">Days</span>
                <p className="text-3xl font-bold">
                  {String(timeLeft.days).padStart(2, '0')}
                </p>
              </div>
              <span className="text-primary text-3xl">:</span>
              <div className="text-center">
                <span className="text-xs font-medium">Hours</span>
                <p className="text-3xl font-bold">
                  {String(timeLeft.hours).padStart(2, '0')}
                </p>
              </div>
              <span className="text-primary text-3xl">:</span>
              <div className="text-center">
                <span className="text-xs font-medium">Minutes</span>
                <p className="text-3xl font-bold">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </p>
              </div>
              <span className="text-primary text-3xl">:</span>
              <div className="text-center">
                <span className="text-xs font-medium">Seconds</span>
                <p className="text-3xl font-bold">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </p>
              </div>
            </div>
            <div className="ml-auto flex gap-2">
              <button className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 5L20 12L13 19M20 12H4"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-[30px] overflow-x-auto pb-4 scrollbar-hide">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/"
              className="inline-block px-12 py-4 bg-primary text-white rounded hover:bg-primary-hover transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-custom">
        <hr className="border-gray-200" />
      </div>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle label="Categories" title="Browse By Category" showArrows />
          <div className="flex gap-[30px] overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={category.id === activeCategory}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-custom">
        <hr className="border-gray-200" />
      </div>

      {/* Best Selling Products */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle label="This Month" title="Best Selling Products" showViewAll />
          <div className="flex gap-[30px] overflow-x-auto pb-4 scrollbar-hide">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Music Experience Banner */}
      <section className="py-10">
        <div className="container-custom">
          <div className="bg-black rounded overflow-hidden flex items-center justify-between px-14 py-16">
            <div className="text-white">
              <span className="text-success font-semibold">Categories</span>
              <h2 className="text-5xl font-semibold leading-tight my-8">
                Enhance Your
                <br />
                Music Experience
              </h2>
              <div className="flex gap-6 mb-10">
                {[
                  { value: '23', label: 'Hours' },
                  { value: '05', label: 'Days' },
                  { value: '59', label: 'Minutes' },
                  { value: '35', label: 'Seconds' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-[62px] h-[62px] bg-white text-black rounded-full flex flex-col items-center justify-center"
                  >
                    <span className="text-base font-semibold">{item.value}</span>
                    <span className="text-[11px]">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/"
                className="inline-block px-12 py-4 bg-success text-white rounded hover:bg-green-400 transition-colors"
              >
                Buy Now!
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-[100px]" />
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=500&fit=crop"
                alt="JBL Speaker"
                className="relative w-[600px] h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Products */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle label="Our Products" title="Explore Our Products" showArrows />
          <div className="grid grid-cols-4 gap-[30px]">
            {exploreProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/"
              className="inline-block px-12 py-4 bg-primary text-white rounded hover:bg-primary-hover transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrival Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle label="Featured" title="New Arrival" />
          <div className="grid grid-cols-4 grid-rows-2 gap-[30px] h-[600px]">
            {/* PlayStation 5 */}
            <div className="col-span-2 row-span-2 bg-black rounded overflow-hidden relative flex items-end">
              <img
                src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=600&fit=crop"
                alt="PlayStation 5"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="relative z-10 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">PlayStation 5</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Link to="/" className="underline hover:text-gray-300">
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Women's Collections */}
            <div className="col-span-2 bg-black rounded overflow-hidden relative flex items-end">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=300&fit=crop"
                alt="Women's Collections"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="relative z-10 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-2">Women's Collections</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Featured woman collections that give you another vibe.
                </p>
                <Link to="/" className="underline hover:text-gray-300">
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Speakers */}
            <div className="bg-black rounded overflow-hidden relative flex items-end">
              <img
                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop"
                alt="Speakers"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Speakers</h3>
                <p className="text-xs text-gray-300 mb-2">Amazon wireless speakers</p>
                <Link to="/" className="text-sm underline hover:text-gray-300">
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Perfume */}
            <div className="bg-black rounded overflow-hidden relative flex items-end">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop"
                alt="Perfume"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Perfume</h3>
                <p className="text-xs text-gray-300 mb-2">GUCCI INTENSE OUD EDP</p>
                <Link to="/" className="text-sm underline hover:text-gray-300">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex justify-center gap-[88px]">
            {[
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="16" stroke="black" strokeWidth="2" fill="none"/>
                    <circle cx="20" cy="20" r="20" fill="black"/>
                    <path d="M11.6667 23.3333L18.3333 16.6667M18.3333 16.6667H11.6667M18.3333 16.6667V23.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28.3333 16.6667L21.6667 23.3333M21.6667 23.3333H28.3333M21.6667 23.3333V16.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'FREE AND FAST DELIVERY',
                desc: 'Free delivery for all orders over $140',
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="black"/>
                    <path d="M13.3333 23.3333C13.3333 24.2174 13.6845 25.0652 14.3096 25.6904C14.9348 26.3155 15.7826 26.6667 16.6667 26.6667C17.5507 26.6667 18.3986 26.3155 19.0237 25.6904C19.6488 25.0652 20 24.2174 20 23.3333C20 22.4493 19.6488 21.6014 19.0237 20.9763C18.3986 20.3512 17.5507 20 16.6667 20C15.7826 20 14.9348 19.6488 14.3096 19.0237C13.6845 18.3986 13.3333 17.5507 13.3333 16.6667C13.3333 15.7826 13.6845 14.9348 14.3096 14.3096C14.9348 13.6845 15.7826 13.3333 16.6667 13.3333C17.5507 13.3333 18.3986 13.6845 19.0237 14.3096C19.6488 14.9348 20 15.7826 20 16.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.3333 30H26.6667C27.5507 30 28.3986 29.6488 29.0237 29.0237C29.6488 28.3986 30 27.5507 30 26.6667V13.3333C30 12.4493 29.6488 11.6014 29.0237 10.9763C28.3986 10.3512 27.5507 10 26.6667 10H23.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 23.3333V26.6667C10 27.5507 10.3512 28.3986 10.9763 29.0237C11.6014 29.6488 12.4493 30 13.3333 30H16.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.6667 10H13.3333C12.4493 10 11.6014 10.3512 10.9763 10.9763C10.3512 11.6014 10 12.4493 10 13.3333V16.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: '24/7 CUSTOMER SERVICE',
                desc: 'Friendly 24/7 customer support',
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="black"/>
                    <path d="M10 20L15 25L30 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'MONEY BACK GUARANTEE',
                desc: 'We return money within 30 days',
              },
            ].map((service, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-11 h-11 bg-secondary rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors shadow-lg"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5L19 12"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
