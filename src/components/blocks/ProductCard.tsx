import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '../ui/Rating';
import { Badge } from '../ui/Badge';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
  isNew?: boolean;
  colors?: string[];
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'wishlist' | 'justForYou';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'default',
}) => {
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        rating: product.rating,
        reviews: product.reviews,
        discount: product.discount,
      });
    }
  };

  return (
    <div className="group w-[270px]">
      {/* Image Container */}
      <div className="relative bg-secondary rounded h-[250px] flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-[80%] max-h-[80%] object-contain mix-blend-multiply"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount && <Badge variant="discount">-{product.discount}%</Badge>}
          {product.isNew && <Badge variant="new">NEW</Badge>}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={handleWishlistToggle}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              inWishlist ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={inWishlist ? 'white' : 'none'} xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" stroke={inWishlist ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <Link
            to={`/product/${product.id}`}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z" fill="white" stroke="white" strokeWidth="1.5"/>
            <path d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z" fill="white" stroke="white" strokeWidth="1.5"/>
            <path d="M2.25 3.75H5.25L7.5 16.5H19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 13.5H19.1925C19.2792 13.5001 19.3633 13.4701 19.4304 13.4151C19.4975 13.3601 19.5434 13.2836 19.5605 13.1986L20.9105 6.44859C20.9214 6.39417 20.92 6.338 20.9066 6.28414C20.8931 6.23029 20.8679 6.18019 20.8328 6.13748C20.7977 6.09478 20.7535 6.06048 20.7034 6.03707C20.6533 6.01366 20.5986 6.00174 20.5432 6.00195H6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add To Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="pt-4">
        <h3 className="font-medium text-base mb-2">{product.name}</h3>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-text-2 line-through">${product.originalPrice}</span>
          )}
        </div>
        <Rating rating={product.rating} reviews={product.reviews} />
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-2 mt-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className="w-5 h-5 rounded-full border-2 border-transparent hover:border-black transition-colors"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
