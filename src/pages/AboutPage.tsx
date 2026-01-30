import { Link } from 'react-router-dom';

export default function AboutPage() {
  const stats = [
    { icon: '🏪', value: '10.5k', label: 'Sallers active our site' },
    { icon: '💵', value: '33k', label: 'Mopnthly Produduct Sale' },
    { icon: '🛍️', value: '45.5k', label: 'Customer active in our site' },
    { icon: '💰', value: '25k', label: 'Anual gross sale in our site' }
  ];

  const team = [
    { name: 'Tom Cruise', role: 'Founder & Chairman', image: '👤' },
    { name: 'Emma Watson', role: 'Managing Director', image: '👤' },
    { name: 'Will Smith', role: 'Product Designer', image: '👤' }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-[#7D8184] mb-20 flex items-center gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">About</span>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10">
            <h1 className="text-5xl font-semibold">Our Story</h1>
            <div className="space-y-6 text-base">
              <p>
                Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
              </p>
            </div>
          </div>
          <div className="bg-[#EB7EA8] rounded h-[600px] flex items-center justify-center">
            <div className="text-9xl">👥</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-2 border-[#E5E5E5] rounded py-8 flex flex-col items-center gap-3 hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-all group"
            >
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-4xl group-hover:bg-white/20">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="grid grid-cols-3 gap-8 mb-32">
          {team.map((member, index) => (
            <div key={index} className="space-y-8">
              <div className="bg-[#F5F5F5] rounded pt-10 pb-0 flex flex-col items-center h-[430px] justify-end">
                <div className="text-9xl mb-4">{member.image}</div>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-medium">{member.name}</h3>
                <p className="text-base">{member.role}</p>
                <div className="flex gap-4 pt-2">
                  <a href="#" className="hover:opacity-70">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="hover:opacity-70">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                  </a>
                  <a href="#" className="hover:opacity-70">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
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
    </div>
  );
}
