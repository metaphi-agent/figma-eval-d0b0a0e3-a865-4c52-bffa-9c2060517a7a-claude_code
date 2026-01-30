import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/blocks/ProductCard';
import { Button } from '../components/ui/Button';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { exploreProducts } from '../data/products';

export const Wishlist: React.FC = () => {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  const handleMoveAllToBag = () => {
    items.forEach((item) => {
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
    });
  };

  const justForYou = exploreProducts.slice(0, 4);

  return (
    <div className="container-custom py-20">
      {/* Wishlist Section */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-xl">Wishlist ({items.length})</h2>
          {items.length > 0 && (
            <Button variant="outline" onClick={handleMoveAllToBag}>
              Move All To Bag
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-4">Your wishlist is empty</h3>
            <p className="text-text-2 mb-8">Save items you love to your wishlist</p>
            <Link
              to="/"
              className="inline-block px-12 py-4 bg-primary text-white rounded hover:bg-primary-hover transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex gap-[30px] overflow-x-auto pb-4">
            {items.map((item) => (
              <div key={item.id} className="relative group w-[270px]">
                <div className="relative bg-secondary rounded h-[250px] flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                  {item.discount && (
                    <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded text-xs">
                      -{item.discount}%
                    </span>
                  )}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H5H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      addItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        quantity: 1,
                      });
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 flex items-center justify-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z" fill="white" stroke="white" strokeWidth="1.5"/>
                      <path d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z" fill="white" stroke="white" strokeWidth="1.5"/>
                      <path d="M2.25 3.75H5.25L7.5 16.5H19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Add To Cart
                  </button>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-2">{item.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-medium">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-text-2 line-through">${item.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Just For You Section */}
      <div>
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-primary rounded" />
            <h2 className="text-xl">Just For You</h2>
          </div>
          <Button variant="outline">See All</Button>
        </div>
        <div className="flex gap-[30px]">
          {justForYou.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
