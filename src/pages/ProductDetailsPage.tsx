import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { flashSaleProducts } from '../data/products';

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('red');

  const images = [
    './assets/images/gamepad.png',
    './assets/images/gamepad.png',
    './assets/images/gamepad.png',
    './assets/images/gamepad.png'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = [
    { name: 'red', value: '#DB4444' },
    { name: 'blue', value: '#4169E1' }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-[#7D8184] mb-20 flex items-center gap-2">
          <Link to="/" className="hover:text-black">Account</Link>
          <span>/</span>
          <Link to="/" className="hover:text-black">Gaming</Link>
          <span>/</span>
          <span className="text-black">Havic HV G-92 Gamepad</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-2 gap-20 mb-32">
          {/* Images */}
          <div className="flex gap-8">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-40 h-32 bg-[#F5F5F5] rounded flex items-center justify-center ${
                    selectedImage === index ? 'ring-2 ring-[#DB4444]' : ''
                  }`}
                >
                  <img src={img} alt="" className="w-24 h-24 object-contain" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-[#F5F5F5] rounded flex items-center justify-center p-16">
              <img
                src={images[selectedImage]}
                alt="Havic HV G-92 Gamepad"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>

            {/* Rating & Stock */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="./assets/icons/star.svg"
                    alt=""
                    className={`w-4 h-4 ${i < 4 ? 'opacity-100' : 'opacity-25'}`}
                  />
                ))}
                <span className="text-sm text-[#7D8184]">(150 Reviews)</span>
              </div>
              <span className="text-[#E5E5E5]">|</span>
              <span className="text-sm text-[#00FF66]">In Stock</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-normal">$192.00</div>

            {/* Description */}
            <p className="text-sm border-b border-[#E5E5E5] pb-6">
              PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>

            {/* Colors */}
            <div className="flex items-center gap-6">
              <span className="text-xl">Colours:</span>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.name ? 'border-black' : 'border-transparent'
                    } p-1`}
                  >
                    <div
                      className="w-full h-full rounded-full"
                      style={{ backgroundColor: color.value }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="flex items-center gap-6">
              <span className="text-xl">Size:</span>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded border-2 flex items-center justify-center text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-[#DB4444] text-white border-[#DB4444]'
                        : 'border-[#E5E5E5] hover:border-[#DB4444]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Buy */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-[#E5E5E5] rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-[#DB4444] hover:text-white border-r-2 border-[#E5E5E5]"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center border-none outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-[#DB4444] hover:text-white border-l-2 border-[#E5E5E5]"
                >
                  +
                </button>
              </div>

              <Button variant="primary" className="flex-1">
                Buy Now
              </Button>

              <button className="w-12 h-12 border-2 border-[#E5E5E5] rounded flex items-center justify-center hover:bg-[#F5F5F5]">
                <img src="./assets/icons/heart.svg" alt="" className="w-6 h-6" />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border-2 border-[#E5E5E5] rounded divide-y-2 divide-[#E5E5E5]">
              <div className="p-6 flex items-start gap-4">
                <img src="./assets/icons/delivery.svg" alt="" className="w-10 h-10" />
                <div>
                  <h3 className="text-base font-medium mb-2">Free Delivery</h3>
                  <p className="text-xs underline">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-2xl">↻</div>
                <div>
                  <h3 className="text-base font-medium mb-2">Return Delivery</h3>
                  <p className="text-xs">Free 30 Days Delivery Returns. <span className="underline">Details</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <section>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-5 h-10 bg-[#DB4444] rounded" />
            <h2 className="text-xl font-medium">Related Item</h2>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
