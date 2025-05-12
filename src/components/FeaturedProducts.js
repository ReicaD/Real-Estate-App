import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const FeaturedProducts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Modern Armchair',
      category: 'Chairs',
      price: '$249.99',
      image:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      id: 2,
      name: 'Wooden Coffee Table',
      category: 'Tables',
      price: '$349.99',
      image:
        'https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 3,
      name: 'Minimalist Floor Lamp',
      category: 'Lighting',
      price: '$129.99',
      image:
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 4,
      name: 'Decorative Vase',
      category: 'Decor',
      price: '$79.99',
      image:
        'https://images.unsplash.com/photo-1629359088562-235f543208ac?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <AnimatedSection animation='fade-up'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Featured Collection
            </h2>
            <p className='text-gray-600 max-w-lg mx-auto'>
              Discover our handpicked selection of premium furniture and decor
              pieces to transform your space.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection animation='fade-up' delay={0.2}>
          <div className='flex flex-wrap justify-center gap-2 mb-10'>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {filteredProducts.map((product, index) => (
            <AnimatedSection
              key={product.id}
              animation='fade-up'
              delay={0.1 * (index + 1)}
            >
              <div className='group'>
                <div className='relative overflow-hidden rounded-lg mb-4'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <motion.button
                      className='bg-white text-gray-900 px-4 py-2 rounded-md font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Quick View
                    </motion.button>
                  </div>
                </div>
                <h3 className='font-medium text-lg text-gray-800'>
                  {product.name}
                </h3>
                <p className='text-sm text-gray-500 mb-2'>{product.category}</p>
                <div className='flex justify-between items-center'>
                  <span className='font-bold text-gray-800'>
                    {product.price}
                  </span>
                  <motion.button
                    className='text-gray-800 hover:text-gray-600'
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 4v16m8-8H4'
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View More Button */}
        <AnimatedSection animation='fade-up' delay={0.5}>
          <div className='text-center mt-12'>
            <motion.button
              className='border border-gray-800 text-gray-800 px-8 py-3 rounded-md font-medium hover:bg-gray-800 hover:text-white transition duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedProducts;
