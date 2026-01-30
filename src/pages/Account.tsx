import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const Account: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'My Account' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="container-custom pb-20">
      <div className="flex items-center justify-between">
        <Breadcrumb items={breadcrumbItems} />
        <p className="text-base">
          Welcome! <span className="text-primary">Md Rimel</span>
        </p>
      </div>

      <div className="flex gap-[100px]">
        {/* Sidebar */}
        <div className="w-[200px]">
          <div className="mb-6">
            <h3 className="font-medium mb-4">Manage My Account</h3>
            <ul className="space-y-2 pl-8">
              <li>
                <Link to="/account" className="text-primary">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-text-2 hover:text-black transition-colors">
                  Address Book
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-text-2 hover:text-black transition-colors">
                  My Payment Options
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-4">My Orders</h3>
            <ul className="space-y-2 pl-8">
              <li>
                <Link to="/account" className="text-text-2 hover:text-black transition-colors">
                  My Returns
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-text-2 hover:text-black transition-colors">
                  My Cancellations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">My WishList</h3>
          </div>
        </div>

        {/* Profile Form */}
        <div className="flex-1 max-w-[870px] p-10 shadow-card rounded">
          <h2 className="text-xl text-primary font-medium mb-4">Edit Your Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-12 mb-6">
              <div>
                <label className="block text-base mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary rounded outline-none"
                />
              </div>
              <div>
                <label className="block text-base mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary rounded outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 mb-6">
              <div>
                <label className="block text-base mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary rounded outline-none"
                />
              </div>
              <div>
                <label className="block text-base mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary rounded outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-base mb-2">Password Changes</label>
              <div className="space-y-4">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary rounded outline-none"
                />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary rounded outline-none"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary rounded outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-8">
              <button type="button" className="text-base hover:text-text-2 transition-colors">
                Cancel
              </button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
