import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const ProductGallery = () => {
  // Extended product data with more items per category
  const products = [
    // Chairs
    {
      id: 1,
      name: 'Modern Armchair',
      category: 'Chairs',
      price: '$249.99',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    },
    {
      id: 2,
      name: 'Velvet Lounge Chair',
      category: 'Chairs',
      price: '$329.99',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=958&q=80',
    },
    {
      id: 3,
      name: 'Rattan Accent Chair',
      category: 'Chairs',
      price: '$189.99',
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    
    // Tables
    {
      id: 4,
      name: 'Wooden Coffee Table',
      category: 'Tables',
      price: '$349.99',
      image: 'https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 5,
      name: 'Marble Dining Table',
      category: 'Tables',
      price: '$899.99',
      image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 6,
      name: 'Modern Side Table',
      category: 'Tables',
      price: '$149.99',
      image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    
    // Lighting
    {
      id: 7,
      name: 'Minimalist Floor Lamp',
      category: 'Lighting',
      price: '$129.99',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 8,
      name: 'Pendant Ceiling Light',
      category: 'Lighting',
      price: '$179.99',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 9,
      name: 'Industrial Table Lamp',
      category: 'Lighting',
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1572912821277-5122aac5d7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    
    // Decor
    {
      id: 10,
      name: 'Decorative Vase',
      category: 'Decor',
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1629359088562-235f543208ac?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 11,
      name: 'Abstract Wall Art',
      category: 'Decor',
      price: '$159.99',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 12,
      name: 'Decorative Throw Pillows',
      category: 'Decor',
      price: '$49.99',
      image: 'https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    },
  ];

  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories
  const categories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products based on active category
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8f4e9] to-[#eae2d1]">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#5a4a3f] mb-4">
              Our Collection
            </h2>
            <p className="text-[#7d6b5d] max-w-lg mx-auto">
              Explore our full range of premium furniture and home decor items, carefully curated to elevate your living space.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filters - Updated Design */}
        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm ${
                  activeCategory === category
                    ? 'bg-[#7d6b5d] text-white'
                    : 'bg-[#e8ddc9] text-[#5a4a3f] hover:bg-[#d7c9ae]'
                }`}
                whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <AnimatedSection
              key={product.id}
              animation="fade-up"
              delay={0.1 * (index % 4 + 1)}
            >
              <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      className="bg-[#7d6b5d] text-white px-5 py-2.5 rounded-md font-medium transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Quick View
                    </motion.button>
                  </div>
                  <div className="absolute top-3 right-3">
                    <motion.button
                      className="w-9 h-9 rounded-full bg-white text-[#7d6b5d] flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1, backgroundColor: "#f8f4e9" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#a59787] font-medium mb-1">{product.category}</div>
                  <h3 className="font-medium text-lg text-[#5a4a3f] mb-2">
                    {product.name}
                  </h3>
                  <div className="flex justify-end items-center">
                    <motion.button
                      className="bg-[#e8ddc9] hover:bg-[#d7c9ae] text-[#5a4a3f] w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Newsletter Signup with updated design */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-[#e8ddc9] to-[#d7c9ae] rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#5a4a3f] mb-2">Stay Updated</h3>
                <p className="text-[#7d6b5d]">
                  Subscribe to our newsletter to receive updates on new arrivals, special offers and design tips.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a59787] focus:border-[#a59787] transition-all"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="bg-[#7d6b5d] hover:bg-[#5a4a3f] text-white font-medium py-3 px-6 rounded-md shadow-md transition-colors"
                    whileHover={{ scale: 1.03, boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Subscribe
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductGallery; 