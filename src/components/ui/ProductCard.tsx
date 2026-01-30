import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  image,
  isNew = false
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Add to cart:', id);
  };

  const handleQuickView = () => {
    // Quick view logic
    console.log('Quick view:', id);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="relative bg-[#F5F5F5] rounded overflow-hidden mb-4 aspect-square flex items-center justify-center">
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount && (
            <span className="bg-[#DB4444] text-white text-xs px-3 py-1 rounded">
              -{discount}%
            </span>
          )}
          {isNew && (
            <span className="bg-[#00FF66] text-white text-xs px-3 py-1 rounded">
              NEW
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={toggleWishlist}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-colors group/wishlist"
            aria-label="Add to wishlist"
          >
            <img
              src="./assets/icons/heart.svg"
              alt=""
              className={`w-5 h-5 ${isWishlisted ? 'fill-[#DB4444]' : ''}`}
            />
          </button>
          <button
            onClick={handleQuickView}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-colors"
            aria-label="Quick view"
          >
            <img src="./assets/icons/eye.svg" alt="" className="w-5 h-5" />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-3/4 h-3/4 object-contain"
        />

        {/* Add to Cart - Shows on hover */}
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-2 text-base font-medium hover:bg-[#DB4444] transition-colors"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-base font-medium text-black line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center gap-3">
          <span className="text-base font-medium text-[#DB4444]">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-base font-medium text-[#7D8184] line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="./assets/icons/star.svg"
                alt=""
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'opacity-100' : 'opacity-25'}`}
              />
            ))}
          </div>
          <span className="text-sm text-[#7D8184] font-semibold">
            ({reviews})
          </span>
        </div>
      </div>
    </div>
  );
}
