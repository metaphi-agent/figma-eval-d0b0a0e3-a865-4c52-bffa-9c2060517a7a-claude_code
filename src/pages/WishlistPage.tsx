import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { bestSellingProducts, flashSaleProducts } from '../data/products';

export default function WishlistPage() {
  const wishlistItems = [
    { ...bestSellingProducts[0], discount: 35 },
    { ...flashSaleProducts[2], discount: 30 }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Wishlist Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-xl">Wishlist ({wishlistItems.length})</h2>
          <Button variant="outline">Move All To Bag</Button>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-4 gap-8 mb-20">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Just For You */}
        <div className="border-t border-[#E5E5E5] pt-16">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <div className="w-5 h-10 bg-[#DB4444] rounded" />
              <h2 className="text-xl font-medium">Just For You</h2>
            </div>
            <Button variant="outline">See All</Button>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
