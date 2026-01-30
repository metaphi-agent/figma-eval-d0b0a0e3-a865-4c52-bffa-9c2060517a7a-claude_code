import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Rating } from '../components/ui/Rating';
import { Button } from '../components/ui/Button';
import { QuantitySelector } from '../components/ui/QuantitySelector';
import { ProductCard } from '../components/blocks/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { getProductById, exploreProducts } from '../data/products';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [mainImage, setMainImage] = useState(0);

  const product = getProductById(id || '');
  const relatedProducts = exploreProducts.slice(0, 4);

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Account', href: '/account' },
    { label: 'Gaming', href: '/' },
    { label: product.name },
  ];

  const images = [product.image, product.image, product.image, product.image];
  const colors = ['#A0BCE0', '#E07575'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
  };

  const handleAddToWishlist = () => {
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
  };

  return (
    <div className="container-custom pb-20">
      <Breadcrumb items={breadcrumbItems} />

      {/* Product Section */}
      <div className="flex gap-[70px] mb-20">
        {/* Images */}
        <div className="flex gap-[30px]">
          <div className="flex flex-col gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={`w-[170px] h-[138px] bg-secondary rounded flex items-center justify-center ${
                  mainImage === i ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </button>
            ))}
          </div>
          <div className="w-[500px] h-[600px] bg-secondary rounded flex items-center justify-center">
            <img
              src={images[mainImage]}
              alt={product.name}
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
          <div className="flex items-center gap-4 mb-4">
            <Rating rating={product.rating} reviews={product.reviews} />
            <span className="text-text-2">|</span>
            <span className="text-success">In Stock</span>
          </div>
          <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
          <p className="text-base mb-6 pb-6 border-b border-gray-300">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          {/* Colors */}
          <div className="flex items-center gap-6 mb-6">
            <span className="text-xl">Colours:</span>
            <div className="flex gap-2">
              {colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className={`w-5 h-5 rounded-full ${
                    selectedColor === i ? 'ring-2 ring-offset-2 ring-black' : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex items-center gap-6 mb-6">
            <span className="text-xl">Size:</span>
            <div className="flex gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-8 h-8 rounded border text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mb-10">
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity((q) => q + 1)}
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            />
            <Button onClick={handleAddToCart}>Buy Now</Button>
            <button
              onClick={handleAddToWishlist}
              className={`w-10 h-10 border rounded flex items-center justify-center transition-colors ${
                isInWishlist(product.id)
                  ? 'bg-primary border-primary text-white'
                  : 'border-gray-300 hover:border-black'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? 'white' : 'none'} xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" stroke={isInWishlist(product.id) ? 'white' : 'black'} strokeWidth="1.5"/>
              </svg>
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border border-gray-300 rounded">
            <div className="flex items-center gap-4 p-4 border-b border-gray-300">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6667 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6667 25C9.82572 25 8.33334 26.4924 8.33334 28.3333C8.33334 30.1743 9.82572 31.6667 11.6667 31.6667Z" stroke="black" strokeWidth="2"/>
                <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" strokeWidth="2"/>
                <path d="M8.33334 28.3335H6.66668C5.74668 28.3335 5.00001 27.5868 5.00001 26.6668V21.6668M3.33334 8.3335H19.6667C20.5867 8.3335 21.3333 9.08016 21.3333 10.0002V28.3335M15 28.3335H25M31.6667 28.3335H33.3333C34.2533 28.3335 35 27.5868 35 26.6668V18.3335M35 18.3335H21.3333M35 18.3335L30.5267 10.5765C30.2 10.0165 29.6 9.66683 28.9467 9.66683H21.3333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 11.667H11.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 15H10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 18.333H8.33333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-medium">Free Delivery</h4>
                <p className="text-sm underline">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.3333 18.3333C33.3333 29.9999 20 36.6666 20 36.6666C20 36.6666 6.66666 29.9999 6.66666 18.3333V8.33325L20 3.33325L33.3333 8.33325V18.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3333 20L18.3333 25L28.3333 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4 className="font-medium">Return Delivery</h4>
                <p className="text-sm">
                  Free 30 Days Delivery Returns. <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div>
        <div className="flex items-center gap-4 mb-14">
          <div className="w-5 h-10 bg-primary rounded" />
          <span className="text-primary font-semibold">Related Item</span>
        </div>
        <div className="flex gap-[30px]">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
