import React from 'react';

const Sidebar = ({ 
  selectedBrands, 
  setSelectedBrands, 
  selectedCategories, 
  setSelectedCategories, 
  priceRange, 
  setPriceRange 
}) => {
  const handleBrandChange = (brand, checked) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  const handleCategoryChange = (category, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  return (
    <div className="w-64 bg-white p-6">
      {/* FILTERS Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">FILTERS</h2>
      </div>

      {/* Price Filter */}
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
            <label key={range.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="price"
                value={range.value}
                checked={priceRange === range.value}
                onChange={(e) => setPriceRange(e.target.value)}
                className="mr-2 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <span className="mr-2">🏷️</span> Brand
        </h3>
        <div className="space-y-2">
          {['Apple', 'Samsung', 'Google', 'Sony', 'Bose'].map((brand) => (
            <label key={brand} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={(e) => handleBrandChange(brand, e.target.checked)}
                className="mr-2 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <span className="mr-2">📱</span> Category
        </h3>
        <div className="space-y-2">
          {['Smartphones', 'Smartwatches', 'Headphones', 'Laptops'].map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={(e) => handleCategoryChange(category, e.target.checked)}
                className="mr-2 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;