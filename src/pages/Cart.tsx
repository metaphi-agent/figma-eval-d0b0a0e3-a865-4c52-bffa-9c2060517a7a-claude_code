import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const [couponCode, setCouponCode] = useState('');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cart' },
  ];

  if (items.length === 0) {
    return (
      <div className="container-custom py-20">
        <Breadcrumb items={breadcrumbItems} />
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-text-2 mb-8">Add some items to your cart to continue shopping</p>
          <Link to="/" className="inline-block px-12 py-4 bg-primary text-white rounded hover:bg-primary-hover transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom pb-20">
      <Breadcrumb items={breadcrumbItems} />

      {/* Cart Table */}
      <div className="mb-6">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 py-6 px-10 bg-white shadow-card rounded mb-10">
          <span className="font-medium">Product</span>
          <span className="font-medium text-center">Price</span>
          <span className="font-medium text-center">Quantity</span>
          <span className="font-medium text-right">Subtotal</span>
        </div>

        {/* Items */}
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 gap-4 items-center py-6 px-10 bg-white shadow-card rounded mb-4"
          >
            <div className="flex items-center gap-5">
              <button
                onClick={() => removeItem(item.id)}
                className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-hover transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L10 10M2 10L10 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-center">${item.price}</span>
            <div className="flex justify-center">
              <div className="flex items-center border border-gray-300 rounded">
                <input
                  type="number"
                  min="1"
                  value={String(item.quantity).padStart(2, '0')}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  className="w-16 h-11 text-center border-r border-gray-300 outline-none"
                />
                <div className="flex flex-col">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-[22px] flex items-center justify-center hover:bg-gray-100"
                  >
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 1L9 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-6 h-[22px] flex items-center justify-center hover:bg-gray-100"
                  >
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <span className="text-right">${item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between mb-20">
        <Link
          to="/"
          className="px-12 py-4 border border-black rounded hover:bg-black hover:text-white transition-colors"
        >
          Return To Shop
        </Link>
        <button className="px-12 py-4 border border-black rounded hover:bg-black hover:text-white transition-colors">
          Update Cart
        </button>
      </div>

      {/* Coupon & Cart Total */}
      <div className="flex justify-between gap-[173px]">
        {/* Coupon */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="w-[300px] px-6 py-4 border border-black rounded outline-none"
          />
          <Button>Apply Coupon</Button>
        </div>

        {/* Cart Total */}
        <div className="w-[470px] border border-black rounded p-6">
          <h3 className="text-xl font-medium mb-6">Cart Total</h3>
          <div className="space-y-4">
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
          <Button
            fullWidth
            className="mt-4"
            onClick={() => navigate('/checkout')}
          >
            Procees to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
