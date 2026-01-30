import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import SectionTitle from '../components/blocks/SectionTitle';
import CountdownTimer from '../components/ui/CountdownTimer';
import Button from '../components/ui/Button';
import { flashSaleProducts, bestSellingProducts, exploreProducts, categories } from '../data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-[#E5E5E5]">
        <div className="max-w-[1170px] mx-auto px-4 py-10">
          <div className="flex gap-4">
            {/* Categories Sidebar */}
            <div className="w-56 border-r border-[#E5E5E5] pr-4">
              <nav className="space-y-4">
                {['Woman\'s Fashion', 'Men\'s Fashion', 'Electronics', 'Home & Lifestyle', 'Medicine', 'Sports & Outdoor', 'Baby\'s & Toys', 'Groceries & Pets', 'Health & Beauty'].map((category, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center justify-between text-base text-black hover:font-medium transition-all"
                  >
                    {category}
                    {i < 2 && (
                      <img src="./assets/icons/dropdown.svg" alt="" className="w-4 h-4" />
                    )}
                  </a>
                ))}
              </nav>
            </div>

            {/* Hero Banner */}
            <div className="flex-1 bg-black text-white rounded overflow-hidden p-16 flex items-center justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-6">
                  <img src="./assets/icons/apple.svg" alt="Apple" className="w-10 h-10" />
                  <span className="text-base">iPhone 14 Series</span>
                </div>
                <h1 className="text-5xl font-semibold leading-tight">
                  Up to 10%<br />off Voucher
                </h1>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-base font-medium border-b border-white pb-1 hover:opacity-80 transition-opacity"
                >
                  Shop Now
                  <img src="./assets/icons/arrow-right.svg" alt="" className="w-6 h-6" />
                </Link>
              </div>
              <div className="w-96 h-80 flex items-center justify-center">
                {/* Hero image placeholder */}
                <div className="text-6xl opacity-50">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="py-16">
        <div className="max-w-[1170px] mx-auto px-4">
          <SectionTitle
            subtitle="Today's"
            title="Flash Sales"
            action={<CountdownTimer />}
          />
          <div className="grid grid-cols-4 gap-8">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Button variant="primary">View All Products</Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 border-t border-[#E5E5E5]">
        <div className="max-w-[1170px] mx-auto px-4">
          <SectionTitle subtitle="Categories" title="Browse By Category" />
          <div className="grid grid-cols-6 gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                className="aspect-square border-2 border-[#E5E5E5] rounded hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors group"
              >
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="text-4xl">{category.name === 'Phones' ? '📱' : category.name === 'Computers' ? '💻' : category.name === 'SmartWatch' ? '⌚' : category.name === 'Camera' ? '📷' : category.name === 'HeadPhones' ? '🎧' : '🎮'}</div>
                  <span className="text-base">{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-16 border-t border-[#E5E5E5]">
        <div className="max-w-[1170px] mx-auto px-4">
          <SectionTitle
            subtitle="This Month"
            title="Best Selling Products"
            action={<Button variant="primary">View All</Button>}
          />
          <div className="grid grid-cols-4 gap-8">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-16">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="bg-black text-white rounded p-16 flex items-center justify-between overflow-hidden">
            <div className="space-y-8 max-w-md">
              <span className="text-[#00FF66] text-base font-semibold">Categories</span>
              <h2 className="text-5xl font-semibold leading-tight">
                Enhance Your<br />Music Experience
              </h2>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black">
                  <span className="text-base font-semibold">23</span>
                  <span className="text-xs">Hours</span>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black">
                  <span className="text-base font-semibold">05</span>
                  <span className="text-xs">Days</span>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black">
                  <span className="text-base font-semibold">59</span>
                  <span className="text-xs">Minutes</span>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black">
                  <span className="text-base font-semibold">35</span>
                  <span className="text-xs">Seconds</span>
                </div>
              </div>
              <Button variant="secondary">Buy Now!</Button>
            </div>
            <div className="w-[500px] h-[400px] flex items-center justify-center">
              {/* Featured image placeholder */}
              <div className="text-9xl opacity-50">🎵</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="py-16 border-t border-[#E5E5E5]">
        <div className="max-w-[1170px] mx-auto px-4">
          <SectionTitle subtitle="Our Products" title="Explore Our Products" />
          <div className="grid grid-cols-4 gap-8 mb-8">
            {exploreProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="primary">View All Products</Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid grid-cols-3 gap-20">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <img src="./assets/icons/delivery.svg" alt="" className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">FREE AND FAST DELIVERY</h3>
                <p className="text-sm">Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="text-3xl">🎧</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 CUSTOMER SERVICE</h3>
                <p className="text-sm">Friendly 24/7 customer support</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="text-3xl">✓</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">MONEY BACK GUARANTEE</h3>
                <p className="text-sm">We return money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
