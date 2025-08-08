import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState('all');

  const appState = {
    currentPage,
    setCurrentPage,
    selectedProduct,
    setSelectedProduct,
    mobileMenuOpen,
    setMobileMenuOpen,
    selectedBrands,
    setSelectedBrands,
    selectedCategories,
    setSelectedCategories,
    priceRange,
    setPriceRange
  };

  // Render the appropriate page
  if (currentPage === 'product' && selectedProduct) {
    return <ProductPage {...appState} />;
  }

  return <HomePage {...appState} />;
};

export default App;