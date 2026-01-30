import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';

const stats = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="white"/>
        <path d="M25.5 14.6667C25.5 14.6667 26.1667 13.3333 28 13.3333C29.8333 13.3333 31.1667 15.0833 31.1667 16.9167C31.1667 20.15 27.125 23.1 25.5 24.3333C23.875 23.1 19.8333 20.15 19.8333 16.9167C19.8333 15.0833 21.1667 13.3333 23 13.3333C24.8333 13.3333 25.5 14.6667 25.5 14.6667Z" stroke="black" strokeWidth="1.5"/>
        <path d="M8.83325 17.5V21.6667C8.83325 22.5 9.41659 23.25 10.2499 23.4167L18.4999 25C18.9166 25.0833 19.2499 25.4167 19.2499 25.8333V31.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.8333 20.8333V25.8333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    value: '10.5k',
    label: 'Sallers active our site',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="white"/>
        <path d="M27 14.6667H13C11.8954 14.6667 11 15.5621 11 16.6667V27.3333C11 28.4379 11.8954 29.3333 13 29.3333H27C28.1046 29.3333 29 28.4379 29 27.3333V16.6667C29 15.5621 28.1046 14.6667 27 14.6667Z" stroke="black" strokeWidth="1.5"/>
        <path d="M15.6667 11V14.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24.3333 11V14.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14.3333 20H25.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    value: '33k',
    label: 'Mopnthly Produduct Sale',
    isActive: true,
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="white"/>
        <path d="M28.5 22.6667C28.5 24.0978 28.0259 25.4822 27.1569 26.5967C26.288 27.7112 25.0722 28.4917 23.7043 28.8124C22.3365 29.1331 20.8915 28.9758 19.6281 28.3644C18.3647 27.753 17.3504 26.7233 16.7549 25.4522" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11.5 17.3333C11.5 15.9022 11.9741 14.5178 12.8431 13.4033C13.712 12.2888 14.9278 11.5083 16.2957 11.1876C17.6635 10.8669 19.1085 11.0242 20.3719 11.6356C21.6353 12.247 22.6496 13.2767 23.2451 14.5478" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M23.25 14.5476L19.25 18.5476L16.75 25.4524L12.75 29.4524" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 22.6667C15 19.7211 17.3878 17.3333 20.3333 17.3333C23.2789 17.3333 25.6667 19.7211 25.6667 22.6667" stroke="black" strokeWidth="1.5"/>
      </svg>
    ),
    value: '45.5k',
    label: 'Customer active in our site',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="white"/>
        <path d="M20 26C23.3137 26 26 23.3137 26 20C26 16.6863 23.3137 14 20 14C16.6863 14 14 16.6863 14 20C14 23.3137 16.6863 26 20 26Z" stroke="black" strokeWidth="1.5"/>
        <path d="M14.3433 14.3431L11.5147 11.5147M25.6569 25.6569L28.4853 28.4853M25.6569 14.3431L28.4853 11.5147M14.3433 25.6569L11.5147 28.4853" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    value: '25k',
    label: 'Anual gross sale in our site',
  },
];

const team = [
  {
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
  },
  {
    name: 'Emma Watson',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
  },
  {
    name: 'Will Smith',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
  },
];

export const About: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About' },
  ];

  return (
    <div className="pb-20">
      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Our Story Section */}
      <section className="mb-20">
        <div className="flex items-stretch">
          <div className="w-1/2 py-24 pl-36 pr-24">
            <h1 className="text-[54px] font-semibold tracking-wider mb-10">Our Story</h1>
            <p className="text-base leading-relaxed mb-6">
              Launced in 2015, Exclusive is South Asia's premier online shopping maktplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millons customers across the region.
            </p>
            <p className="text-base leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop"
              alt="Shopping"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom mb-20">
        <div className="flex justify-center gap-[30px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`w-[270px] h-[230px] border rounded flex flex-col items-center justify-center transition-colors ${
                stat.isActive
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-300 hover:bg-primary hover:text-white hover:border-primary'
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                  stat.isActive ? 'bg-white/20' : 'bg-gray-200'
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  stat.isActive ? 'bg-white' : 'bg-black'
                }`}>
                  {stat.icon}
                </div>
              </div>
              <span className="text-[32px] font-bold">{stat.value}</span>
              <span className="text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container-custom mb-20">
        <div className="flex justify-center gap-[30px]">
          {team.map((member, index) => (
            <div key={index} className="w-[370px]">
              <div className="bg-secondary h-[430px] mb-8 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[32px] font-medium mb-2">{member.name}</h3>
              <p className="text-base mb-4">{member.role}</p>
              <div className="flex gap-4">
                <a href="#" className="text-black hover:text-text-2 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.01006C22.0424 3.68553 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006Z"/>
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-text-2 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-text-2 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"/>
                    <path d="M6 9H2V21H6V9Z"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === 2 ? 'bg-primary outline outline-2 outline-offset-2 outline-primary/50' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container-custom">
        <div className="flex justify-center gap-[88px]">
          {[
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <path d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z" stroke="white" strokeWidth="2"/>
                  <path d="M17 17H17.01M23 17H23.01M16 22C16 22 17.5 24 20 24C22.5 24 24 22 24 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
      </section>
    </div>
  );
};
