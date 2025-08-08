import React from 'react';
import Header from '../components/Header';
import StarRating from '../components/StarRating';
import { ArrowLeft, Star, ShoppingCart, User } from 'lucide-react';

const ProductPage = ({
  selectedProduct,
  currentPage,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  if (!selectedProduct) {
    setCurrentPage('home');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
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
                  className="w-full h-96 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-1/2">
                <h1 className="text-3xl font-bold mb-2 text-gray-800">{selectedProduct.name}</h1>
                <div className="flex items-center mb-4">
                  <StarRating rating={selectedProduct.rating} />
                  <span className="ml-2 text-gray-600">4 out of 5 stars</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{selectedProduct.description}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Star className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <div className="font-semibold text-sm">Overall Rating</div>
                    <div className="text-xs text-gray-600">{selectedProduct.rating}/5.0</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <ShoppingCart className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <div className="font-semibold text-sm">Connectivity</div>
                    <div className="text-xs text-gray-600">Wireless & Wired</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <User className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <div className="font-semibold text-sm">Battery</div>
                    <div className="text-xs text-gray-600">Up to 30 Hrs</div>
                  </div>
                </div>

                {/* Price and Buy Button */}
                <div className="flex items-center justify-between mb-6 p-4 bg-purple-50 rounded-lg">
                  <span className="text-3xl font-bold text-purple-600">{selectedProduct.price}</span>
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors text-lg font-semibold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specifications */}
          {selectedProduct.specs && (
            <div className="border-t p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Detailed Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(selectedProduct.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-600 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pros & Cons */}
          {(selectedProduct.pros || selectedProduct.cons) && (
            <div className="border-t p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Pros & Cons</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {selectedProduct.pros && (
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                      <span className="mr-2">✅</span> Pros
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.pros.map((pro, index) => (
                        <li key={index} className="flex items-start p-3 bg-green-50 rounded-lg">
                          <span className="text-green-500 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedProduct.cons && (
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                      <span className="mr-2">❌</span> Cons
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.cons.map((con, index) => (
                        <li key={index} className="flex items-start p-3 bg-red-50 rounded-lg">
                          <span className="text-red-500 mr-3 mt-1">✗</span>
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
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Full Review</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                The {selectedProduct.name} represents a significant step forward in {selectedProduct.category?.toLowerCase()} technology. After extensive testing, we've found it to be a compelling option that balances performance, features, and value.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Design and build quality are immediately apparent when you first handle the {selectedProduct.name}. The attention to detail in the construction is evident, with premium materials used throughout. The ergonomics have been carefully considered, making it comfortable for extended use.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Performance-wise, the {selectedProduct.name} delivers on its promises. In our testing, we found it to handle demanding tasks with ease, maintaining consistent performance even under stress. The user experience is smooth and intuitive, with responsive controls and reliable functionality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Overall, the {selectedProduct.name} earns our recommendation for users looking for a premium {selectedProduct.category?.toLowerCase()} experience. While the price point places it in the higher end of the market, the features and performance justify the investment for serious users.
              </p>
            </div>
          </div>

          {/* Compare with Similar Products */}
          <div className="border-t p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Compare with Similar Products</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 border border-gray-200">Product Comparison</th>
                    <th className="text-left p-4 border border-gray-200">{selectedProduct.name}</th>
                    <th className="text-left p-4 border border-gray-200">Competitor A</th>
                    <th className="text-left p-4 border border-gray-200">Competitor B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium">Price</td>
                    <td className="p-4 border border-gray-200">{selectedProduct.price}</td>
                    <td className="p-4 border border-gray-200">$299.99</td>
                    <td className="p-4 border border-gray-200">$399.99</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-medium">Rating</td>
                    <td className="p-4 border border-gray-200">{selectedProduct.rating}/5</td>
                    <td className="p-4 border border-gray-200">4.2/5</td>
                    <td className="p-4 border border-gray-200">4.1/5</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium">Warranty</td>
                    <td className="p-4 border border-gray-200">2 Years</td>
                    <td className="p-4 border border-gray-200">1 Year</td>
                    <td className="p-4 border border-gray-200">2 Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Where to Buy */}
          <div className="border-t p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Where to Buy</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center">
                🛒 Buy on Amazon
              </button>
              <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors flex items-center">
                🏪 Buy Direct
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center">
                🛍️ Best Buy
              </button>
            </div>
          </div>

          {/* User Reviews */}
          <div className="border-t p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">User Reviews</h2>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-lg">What Our Users Say</h3>
              <p className="text-gray-600">Be the first to leave a review for the {selectedProduct.name}!</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4 text-lg">Write a Review</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />
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

export default ProductPage;