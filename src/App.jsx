import React, { useState } from 'react';
import { Star, Search, ShoppingCart, User, ChevronDown, Menu, X, Home, Tag, FileText, Info, Mail, ArrowLeft } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState('all');

  // Product data
  const trendingProducts = [
    {
      id: 1,
      name: "ZenithBook Pro 15",
      description: "A powerhouse laptop for professionals and gamers alike.",
      price: "$1,799.00",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      trending: true,
      category: "Laptops",
      brand: "ZenithBook",
      specs: {
        "Display": "15.6\" 4K OLED",
        "Processor": "Intel Core i9-13900H",
        "Memory": "32GB DDR5",
        "Storage": "1TB NVMe SSD",
        "Graphics": "NVIDIA RTX 4070",
        "Connectivity": "Wi-Fi 6E, Bluetooth 5.3"
      },
      pros: [
        "Exceptional build quality and premium construction for gaming and work",
        "High-performance specs handle demanding tasks without hiccups",
        "Stunning OLED display with vibrant colors and sharp detail"
      ],
      cons: [
        "Premium price point may not be accessible for some budgets",
        "Heavy design might not be ideal for frequent travel",
        "Occasional heating under intensive workload, can be improved by optimized cooling"
      ]
    },
    {
      id: 2,
      name: "ChronoFit Smartwatch",
      description: "Track your fitness and stay connected with style.",
      price: "$249.99",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      trending: true,
      category: "Smartwatches",
      brand: "ChronoFit",
      specs: {
        "Display": "1.4\" AMOLED",
        "Battery Life": "Up to 7 days",
        "Water Resistance": "50 meters",
        "Connectivity": "Bluetooth 5.0, Wi-Fi",
        "Health Features": "Heart rate, SpO2, Sleep tracking",
        "Compatibility": "iOS and Android"
      },
      pros: [
        "Comprehensive health tracking with accurate sensors",
        "Long battery life reduces charging frequency",
        "Sleek design suitable for both casual and formal occasions"
      ],
      cons: [
        "Limited third-party app ecosystem compared to competitors",
        "Occasional connectivity issues with older phone models",
        "Small screen size may be challenging for users with larger fingers"
      ]
    },
    {
      id: 3,
      name: "AeroSound X-Pro",
      description: "Immersive audio experience with noise-cancelling technology.",
      price: "$329.00",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      trending: true,
      category: "Headphones",
      brand: "AeroSound",
      specs: {
        "Driver Size": "40mm Dynamic",
        "Frequency Response": "20Hz - 20kHz",
        "Battery Life": "30 hours with ANC",
        "Charging": "USB-C, Quick charge",
        "Connectivity": "Bluetooth 5.2, 3.5mm jack",
        "Features": "Active Noise Cancellation"
      },
      pros: [
        "Exceptional audio quality with deep bass and clear highs",
        "Industry-leading noise cancellation for immersive listening",
        "Comfortable fit for extended listening sessions"
      ],
      cons: [
        "Premium pricing may be steep for casual listeners",
        "Bulky design not ideal for travel or commuting",
        "Touch controls can be overly sensitive at times"
      ]
    },
    {
      id: 4,
      name: "EchoBuds Mini",
      description: "Compact and powerful earbuds with crisp sound and seamless connectivity.",
      price: "$99.99",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
      trending: true,
      category: "Headphones",
      brand: "EchoBuds",
      specs: {
        "Driver Size": "6mm Dynamic",
        "Battery Life": "6 hours + 24 hours case",
        "Water Resistance": "IPX4",
        "Connectivity": "Bluetooth 5.1",
        "Features": "Touch controls, Voice assistant",
        "Charging": "USB-C, Wireless charging case"
      },
      pros: [
        "Compact design perfect for on-the-go use",
        "Good sound quality for the price point",
        "Reliable connection and easy pairing process"
      ],
      cons: [
        "Limited noise isolation compared to premium options",
        "Touch controls can be accidentally triggered",
        "Case feels somewhat flimsy compared to competitors"
      ]
    }
  ];

  const topPicks = [
    {
      id: 5,
      name: "SkyLens Drone 2.0",
      description: "Capture stunning aerial footage with this easy-to-fly and feature-packed drone.",
      price: "$899.00",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
      category: "Drones",
      brand: "SkyLens"
    },
    {
      id: 6,
      name: "PixelPro Digital Camera",
      description: "Unleash your creativity with this professional-grade camera.",
      price: "$750.00",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      category: "Cameras",
      brand: "PixelPro"
    },
    {
      id: 7,
      name: "RealityLink VR Headset",
      description: "Step into virtual worlds with cutting-edge VR technology.",
      price: "$499.00",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=300&fit=crop",
      category: "VR",
      brand: "RealityLink"
    },
    {
      id: 8,
      name: "Nexus Home Hub",
      description: "Control your smart home devices seamlessly with this intelligent hub.",
      price: "$199.00",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      category: "Smart Home",
      brand: "Nexus"
    }
  ];

  // Navigation items
  const navItems = [
    { name: 'Home', icon: Home, page: 'home' },
    { name: 'Categories', icon: Tag, page: 'categories' },
    { name: 'Reviews', icon: FileText, page: 'reviews' },
    { name: 'About', icon: Info, page: 'about' },
    { name: 'Contact', icon: Mail, page: 'contact' }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  const ProductCard = ({ product, showTrending = false }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
           onClick={() => {
             setSelectedProduct(product);
             setCurrentPage('product');
           }}>
        <div className="relative">
          {showTrending && product.trending && (
            <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full z-10">
              Trending
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
          <StarRating rating={product.rating} />
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-purple-600">{product.price}</span>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Header = () => (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-purple-600 cursor-pointer" onClick={() => setCurrentPage('home')}>
              ✨ blog
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.page)}
                className={`text-gray-700 hover:text-purple-600 transition-colors ${
                  currentPage === item.page ? 'text-purple-600 font-semibold' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-purple-600 cursor-pointer" />
            <User className="w-6 h-6 text-gray-700 hover:text-purple-600 cursor-pointer" />
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );

  const Sidebar = () => (
    <div className="w-64 bg-white p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <span className="mr-2">💰</span> Price
        </h3>
        <div className="space-y-2">
          {[
            { label: 'Under $100', value: 'under-100' },
            { label: '$100 - $500', value: '100-500' },
            { label: '$500 - $1000', value: '500-1000' },
            { label: 'Over $1000', value: 'over-1000' }
          ].map((range) => (
            <label key={range.value} className="flex items-center">
              <input
                type="radio"
                name="price"
                value={range.value}
                checked={priceRange === range.value}
                onChange={(e) => setPriceRange(e.target.value)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <span className="mr-2">🏷️</span> Brand
        </h3>
        <div className="space-y-2">
          {['Apple', 'Samsung', 'Google', 'Sony', 'Bose'].map((brand) => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedBrands([...selectedBrands, brand]);
                  } else {
                    setSelectedBrands(selectedBrands.filter(b => b !== brand));
                  }
                }}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <span className="mr-2">📱</span> Category
        </h3>
        <div className="space-y-2">
          {['Smartphones', 'Smartwatches', 'Headphones', 'Laptops'].map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([...selectedCategories, category]);
                  } else {
                    setSelectedCategories(selectedCategories.filter(c => c !== category));
                  }
                }}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const HeroSection = () => (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 mb-8">
      <div className="flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Hub for<br />
            <span className="text-purple-600">Unbiased Gadget<br />Reviews</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Dive deep into detailed analyses of the latest smartphones, smartwatches, headphones, and more. Make informed decisions with TechVault Reviews.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">
            Explore Reviews
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=300&h=250&fit=crop"
            alt="Gadgets illustration"
            className="w-80 h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <Sidebar />
          <div className="flex-1">
            <HeroSection />
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Trending Gadget Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingProducts.map((product) => (
                  <ProductCard key={product.id} product={product} showTrending={true} />
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Top Picks for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topPicks.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-purple-600">Quick Links</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Support</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Legal</a>
            </div>
            <div className="flex space-x-4">
              <span className="text-gray-400">📘</span>
              <span className="text-gray-400">🐦</span>
              <span className="text-gray-400">💼</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  const ProductPage = () => {
    if (!selectedProduct) return <HomePage />;

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center text-purple-600 hover:text-purple-700 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Reviews
          </button>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Product Header */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h1 className="text-3xl font-bold mb-2">{selectedProduct.name}</h1>
                  <div className="flex items-center mb-4">
                    <StarRating rating={selectedProduct.rating} />
                    <span className="ml-2 text-gray-600">4 out of 5 stars</span>
                  </div>
                  <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Star className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <div className="font-semibold">Overall Rating</div>
                      <div className="text-sm text-gray-600">{selectedProduct.rating}/5.0</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <ShoppingCart className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <div className="font-semibold">Connectivity</div>
                      <div className="text-sm text-gray-600">Wireless & Wired</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <User className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <div className="font-semibold">OS</div>
                      <div className="text-sm text-gray-600">Up to 30 Hrs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Specifications */}
            {selectedProduct.specs && (
              <div className="border-t p-8">
                <h2 className="text-2xl font-bold mb-6">Detailed Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pros & Cons */}
            {(selectedProduct.pros || selectedProduct.cons) && (
              <div className="border-t p-8">
                <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {selectedProduct.pros && (
                    <div>
                      <h3 className="text-lg font-semibold text-green-600 mb-4">Pros</h3>
                      <ul className="space-y-2">
                        {selectedProduct.pros.map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedProduct.cons && (
                    <div>
                      <h3 className="text-lg font-semibold text-red-600 mb-4">Cons</h3>
                      <ul className="space-y-2">
                        {selectedProduct.cons.map((con, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">✗</span>
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Full Review */}
            <div className="border-t p-8">
              <h2 className="text-2xl font-bold mb-6">Full Review</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  The {selectedProduct.name} represents a significant step forward in {selectedProduct.category.toLowerCase()} technology. After extensive testing, we've found it to be a compelling option that balances performance, features, and value.
                </p>
                <p className="text-gray-700 mb-4">
                  Design and build quality are immediately apparent when you first handle the {selectedProduct.name}. The attention to detail in the construction is evident, with premium materials used throughout. The ergonomics have been carefully considered, making it comfortable for extended use.
                </p>
                <p className="text-gray-700 mb-4">
                  Performance-wise, the {selectedProduct.name} delivers on its promises. In our testing, we found it to handle demanding tasks with ease, maintaining consistent performance even under stress. The user experience is smooth and intuitive, with responsive controls and reliable functionality.
                </p>
                <p className="text-gray-700">
                  Overall, the {selectedProduct.name} earns our recommendation for users looking for a premium {selectedProduct.category.toLowerCase()} experience. While the price point places it in the higher end of the market, the features and performance justify the investment for serious users.
                </p>
              </div>
            </div>

            {/* Where to Buy */}
            <div className="border-t p-8 bg-gray-50">
              <h2 className="text-2xl font-bold mb-6">Where to Buy</h2>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Buy on Amazon
                </button>
                <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors">
                  Buy Direct
                </button>
              </div>
            </div>

            {/* User Reviews */}
            <div className="border-t p-8">
              <h2 className="text-2xl font-bold mb-6">User Reviews</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">What Our Users Say</h3>
                <p className="text-gray-600">Be the first to leave a review for the {selectedProduct.name}!</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Write a Review</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                    <textarea
                      rows="4"
                      className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Share your experience with this product..."
                    ></textarea>
                  </div>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render the appropriate page
  if (currentPage === 'product' && selectedProduct) {
    return <ProductPage />;
  }

  return <HomePage />;
};

export default App;