import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: './assets/images/monitor.png'
    },
    {
      id: '2',
      name: 'H1 Gamepad',
      price: 550,
      quantity: 2,
      image: './assets/images/gamepad.png'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-[#7D8184] mb-20 flex items-center gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">Cart</span>
        </div>

        {/* Cart Items */}
        <div className="mb-6">
          {/* Header */}
          <div className="grid grid-cols-4 gap-10 px-10 py-6 shadow-sm rounded mb-10">
            <span className="text-base">Product</span>
            <span className="text-base">Price</span>
            <span className="text-base">Quantity</span>
            <span className="text-base">Subtotal</span>
          </div>

          {/* Cart Items */}
          <div className="space-y-10">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 gap-10 items-center px-10 py-6 shadow-sm rounded relative"
              >
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute left-2 top-2 w-6 h-6 rounded-full bg-[#DB4444] text-white text-xs flex items-center justify-center hover:bg-[#C93939]"
                  >
                    ×
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-base">{item.name}</span>
                </div>
                <span className="text-base">${item.price}</span>
                <div className="flex items-center border-2 border-[#E5E5E5] rounded w-fit">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-2 hover:bg-[#F5F5F5] border-r-2 border-[#E5E5E5]"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-20 text-center border-none outline-none"
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-2 hover:bg-[#DB4444] hover:text-white border-l-2 border-[#E5E5E5]"
                  >
                    +
                  </button>
                </div>
                <span className="text-base font-medium">
                  ${item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-20">
          <Link to="/">
            <Button variant="outline">Return To Shop</Button>
          </Link>
          <Button variant="outline">Update Cart</Button>
        </div>

        {/* Coupon and Total */}
        <div className="grid grid-cols-2 gap-20">
          {/* Coupon */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 px-6 py-4 border-2 border-black rounded"
            />
            <Button variant="primary">Apply Coupon</Button>
          </div>

          {/* Cart Total */}
          <div className="border-2 border-black rounded p-8 space-y-6">
            <h3 className="text-xl font-medium">Cart Total</h3>
            <div className="space-y-4">
              <div className="flex justify-between pb-4 border-b border-[#E5E5E5]">
                <span className="text-base">Subtotal:</span>
                <span className="text-base">${subtotal}</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-[#E5E5E5]">
                <span className="text-base">Shipping:</span>
                <span className="text-base">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base">Total:</span>
                <span className="text-base font-semibold">${total}</span>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <Link to="/checkout">
                <Button variant="primary">Proceed to checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
