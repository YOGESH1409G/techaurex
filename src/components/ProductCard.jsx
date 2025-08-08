import React from 'react';
import StarRating from './StarRating';

const ProductCard = ({ product, showTrending = false, onProductClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      <div className="relative">
        {showTrending && product.trending && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full z-10">
            Trending
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <StarRating rating={product.rating} />
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-purple-600">{product.price}</span>
          <button 
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-sm"
            onClick={(e) => {
              e.stopPropagation();
              // Handle buy now logic here
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;