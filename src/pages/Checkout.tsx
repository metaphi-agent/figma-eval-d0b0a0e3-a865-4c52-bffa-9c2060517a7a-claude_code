import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
    saveInfo: true,
    paymentMethod: 'cash',
  });
  const [couponCode, setCouponCode] = useState('');

  const breadcrumbItems = [
    { label: 'Account', href: '/account' },
    { label: 'My Account', href: '/account' },
    { label: 'Product', href: '/' },
    { label: 'View Cart', href: '/cart' },
    { label: 'CheckOut' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  return (
    <div className="container-custom pb-20">
      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-4xl font-medium tracking-wider mb-12">Billing Details</h1>

      <form onSubmit={handleSubmit} className="flex gap-[173px]">
        {/* Billing Form */}
        <div className="flex-1 max-w-[470px] space-y-8">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            variant="default"
            required
          />
          <Input
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            variant="default"
          />
          <Input
            label="Street Address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            variant="default"
            required
          />
          <Input
            label="Apartment, floor, etc. (optional)"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            variant="default"
          />
          <Input
            label="Town/City"
            name="townCity"
            value={formData.townCity}
            onChange={handleChange}
            variant="default"
            required
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            variant="default"
            required
          />
          <Input
            label="Email Address"
            name="emailAddress"
            type="email"
            value={formData.emailAddress}
            onChange={handleChange}
            variant="default"
            required
          />

          <label className="flex items-center gap-4 cursor-pointer">
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="w-6 h-6 accent-primary"
            />
            <span>Save this information for faster check-out next time</span>
          </label>
        </div>

        {/* Order Summary */}
        <div className="w-[527px]">
          <div className="space-y-8 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span>{item.name}</span>
                </div>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between pb-4 border-b border-gray-300">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between pb-4 border-b border-gray-300">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4 mb-8">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === 'bank'}
                  onChange={handleChange}
                  className="w-6 h-6 accent-black"
                />
                <span>Bank</span>
              </div>
              <div className="flex gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8 w-auto" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 w-auto" />
              </div>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={handleChange}
                className="w-6 h-6 accent-black"
              />
              <span>Cash on delivery</span>
            </label>
          </div>

          {/* Coupon */}
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 px-6 py-4 border border-black rounded outline-none"
            />
            <Button type="button">Apply Coupon</Button>
          </div>

          <Button type="submit" fullWidth>
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
};
