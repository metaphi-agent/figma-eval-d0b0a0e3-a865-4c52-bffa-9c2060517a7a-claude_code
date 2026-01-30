import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    company: '',
    street: '',
    apartment: '',
    city: '',
    phone: '',
    email: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const cartItems = [
    { name: 'LCD Monitor', price: 650, image: './assets/images/monitor.png' },
    { name: 'H1 Gamepad', price: 1100, image: './assets/images/gamepad.png' }
  ];

  const subtotal = 1750;
  const shipping = 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-[#7D8184] mb-20 flex items-center gap-2">
          <Link to="/" className="hover:text-black">Account</Link>
          <span>/</span>
          <Link to="/account" className="hover:text-black">My Account</Link>
          <span>/</span>
          <Link to="/product/1" className="hover:text-black">Product</Link>
          <span>/</span>
          <Link to="/cart" className="hover:text-black">View Cart</Link>
          <span>/</span>
          <span className="text-black">CheckOut</span>
        </div>

        <h1 className="text-4xl font-medium mb-12">Billing Details</h1>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-2 gap-20">
            {/* Billing Form */}
            <div className="space-y-8">
              <Input
                label="First Name*"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
              <Input
                label="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
              <Input
                label="Street Address*"
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                required
              />
              <Input
                label="Apartment, floor, etc. (optional)"
                value={formData.apartment}
                onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
              />
              <Input
                label="Town/City*"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
              <Input
                label="Phone Number*"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Input
                label="Email Address*"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <label className="flex items-center gap-4">
                <input type="checkbox" className="w-6 h-6 accent-[#DB4444]" />
                <span className="text-base">
                  Save this information for faster check-out next time
                </span>
              </label>
            </div>

            {/* Order Summary */}
            <div className="space-y-8">
              {/* Cart Items */}
              <div className="space-y-8">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <img src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
                      <span className="text-base">{item.name}</span>
                    </div>
                    <span className="text-base">${item.price}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-4 border-t border-b border-[#E5E5E5] py-6">
                <div className="flex justify-between">
                  <span className="text-base">Subtotal:</span>
                  <span className="text-base">${subtotal}</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-[#E5E5E5]">
                  <span className="text-base">Shipping:</span>
                  <span className="text-base">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base">Total:</span>
                  <span className="text-base font-medium">${total}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <label className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-6 h-6 accent-black"
                    />
                    <span className="text-base">Bank</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-7 bg-gray-200 rounded"></div>
                    <div className="w-10 h-7 bg-gray-200 rounded"></div>
                    <div className="w-10 h-7 bg-gray-200 rounded"></div>
                    <div className="w-10 h-7 bg-gray-200 rounded"></div>
                  </div>
                </label>

                <label className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-6 h-6 accent-black"
                  />
                  <span className="text-base">Cash on delivery</span>
                </label>
              </div>

              {/* Coupon */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 px-6 py-4 border-2 border-black rounded"
                />
                <Button variant="primary">Apply Coupon</Button>
              </div>

              {/* Place Order */}
              <Button type="submit" variant="primary" fullWidth>
                Place Order
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
