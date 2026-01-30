import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="container-custom pb-20">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-[30px]">
        {/* Contact Info */}
        <div className="w-[340px] p-10 shadow-card rounded">
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.55423 5.24L6.17123 1.335C5.78123 0.885 5.06623 0.887 4.61323 1.341L1.83123 4.128C1.00323 4.957 0.766232 6.188 1.24523 7.175C4.10685 13.1 8.88528 17.8851 14.8062 20.755C15.7922 21.234 17.0222 20.997 17.8502 20.168L20.6582 17.355C21.1132 16.9 21.1142 16.181 20.6602 15.791L16.7402 12.426C16.3302 12.074 15.6932 12.12 15.2822 12.532L13.9182 13.898C13.8484 13.9712 13.7565 14.0194 13.6566 14.0353C13.5567 14.0512 13.4543 14.0339 13.3652 13.986C11.1357 12.7021 9.28622 10.8502 8.00523 8.619C7.95726 8.52975 7.93989 8.42723 7.95578 8.32716C7.97168 8.22708 8.01996 8.13499 8.09323 8.065L9.45323 6.704C9.86523 6.29 9.91023 5.65 9.55423 5.239V5.24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-medium">Call To Us</h3>
            </div>
            <p className="text-sm mb-4">We are available 24/7, 7 days a week.</p>
            <p className="text-sm">Phone: +8801611112222</p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L11 8L21 1M1 15H21V1H1V15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-medium">Write To US</h3>
            </div>
            <p className="text-sm mb-4">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm mb-4">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 p-10 shadow-card rounded">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-secondary rounded outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-secondary rounded outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-secondary rounded outline-none"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Massage"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className="w-full px-4 py-3 bg-secondary rounded outline-none resize-none mb-8"
            />
            <div className="flex justify-end">
              <Button type="submit">Send Massage</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
