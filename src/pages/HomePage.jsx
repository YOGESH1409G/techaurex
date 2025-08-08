import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { trendingProducts, topPicks } from '../data/products';

const HomePage = ({
  currentPage,
  setCurrentPage,
  setSelectedProduct,
  mobileMenuOpen,
  setMobileMenuOpen,
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange
}) => {
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <HeroSection />
            
            {/* Trending Gadget Reviews */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Trending Gadget Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {trendingProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    showTrending={true}
                    onProductClick={handleProductClick}
                  />
                ))}
              </div>
            </section>
            
            {/* Top Picks for You */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Picks for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {topPicks.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    onProductClick={handleProductClick}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;