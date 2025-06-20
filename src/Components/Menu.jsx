import React, { useContext, useState, useEffect } from "react";
import { categoryItem, product } from "../assets/assets";
import { MenuContext } from "../context/MenuContext";

const Menu = () => {
  const { products } = useContext(MenuContext);
  const [category, setCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Apply filtering when category changes
  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) => category === "All" || category === product.category
      )
    );
  }, [category, products]);

  return (
    <div className="bg-[#fff8f0] min-h-screen py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-amber-500 opacity-5 -skew-y-2 z-0"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-700 opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header Section with elegant typography */}
        <div className="text-center mb-12 relative">
          <h2 className="text-amber-600 text-lg font-medium mb-2 uppercase tracking-wider">Taste the Difference</h2>
          <h1 className="text-5xl font-bold text-gray-800 mb-3 relative inline-block">
            Our Menu
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500 rounded-full"></span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover our chef's selection of delicious meals prepared with the freshest ingredients and love.
          </p>
        </div>

        {/* Category Button - Enhanced with better styling */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-3 p-2">
            <button
              onClick={() => setCategory("All")}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                category === "All"
                  ? "bg-amber-500 text-white shadow-md transform scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-amber-50"
              }`}
            >
              All
            </button>
            
            {categoryItem.map((item, index) => (
              <button
                key={index}
                onClick={() => setCategory(category === item.category_title ? "All" : item.category_title)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  category === item.category_title
                    ? "bg-amber-500 text-white shadow-md transform scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-amber-50"
                }`}
              >
                {item.category_title}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Display - Enhanced with card styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex p-4">
                  <div className="mr-5 relative">
                    <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-white shadow-md">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-sm font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                      £{product.price}
                    </div>
                  </div>
                  
                  <div className="flex-1 py-2">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600 uppercase font-medium">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed overflow-hidden line-clamp-2">
                      {product.description}
                    </p>
                    {/* Removed "Add to Order" button */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <div className="inline-flex justify-center items-center w-24 h-24 bg-amber-50 rounded-full mb-4">
                <svg className="w-12 h-12 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p className="text-xl text-gray-600 font-medium">No menu items available in this category</p>
              <p className="text-gray-500 mt-1">Please check back soon or select another category</p>
            </div>
          )}
        </div>

        {/* Decorative footer element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center">
            <div className="h-px w-16 bg-amber-200"></div>
            <svg className="w-6 h-6 text-amber-400 mx-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <div className="h-px w-16 bg-amber-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;