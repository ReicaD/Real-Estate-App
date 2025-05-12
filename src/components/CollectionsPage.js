import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const CollectionsPage = () => {
  // All product collections data
  const collections = [
    {
      id: 'chairs',
      title: 'Luxury Seating',
      description: 'Elegant and comfortable chairs for every space in your home.',
      products: [
        {
          id: 'c1',
          name: 'Modern Armchair',
          price: '$249.99',
          image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
        },
        {
          id: 'c2',
          name: 'Velvet Lounge Chair',
          price: '$329.99',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=958&q=80',
        },
        {
          id: 'c3',
          name: 'Rattan Accent Chair',
          price: '$189.99',
          image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'c4',
          name: 'Designer Dining Chair',
          price: '$159.99',
          image: 'https://images.unsplash.com/photo-1561677978-583a8c7a4b43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        },
      ],
    },
    {
      id: 'tables',
      title: 'Elegant Tables',
      description: 'Beautifully crafted tables that serve as the focal point of any room.',
      products: [
        {
          id: 't1',
          name: 'Wooden Coffee Table',
          price: '$349.99',
          image: 'https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 't2',
          name: 'Marble Dining Table',
          price: '$899.99',
          image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 't3',
          name: 'Modern Side Table',
          price: '$149.99',
          image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 't4',
          name: 'Glass End Table',
          price: '$229.99',
          image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
        },
      ],
    },
    {
      id: 'lighting',
      title: 'Ambient Lighting',
      description: 'Illuminate your space with our stunning lighting fixtures.',
      products: [
        {
          id: 'l1',
          name: 'Minimalist Floor Lamp',
          price: '$129.99',
          image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 'l2',
          name: 'Pendant Ceiling Light',
          price: '$179.99',
          image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 'l3',
          name: 'Industrial Table Lamp',
          price: '$89.99',
          image: 'https://images.unsplash.com/photo-1572912821277-5122aac5d7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 'l4',
          name: 'Modern Chandelier',
          price: '$349.99',
          image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        },
      ],
    },
    {
      id: 'decor',
      title: 'Exquisite Decor',
      description: 'Add the finishing touches to your space with our carefully curated decor pieces.',
      products: [
        {
          id: 'd1',
          name: 'Decorative Vase',
          price: '$79.99',
          image: 'https://images.unsplash.com/photo-1629359088562-235f543208ac?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'd2',
          name: 'Abstract Wall Art',
          price: '$159.99',
          image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 'd3',
          name: 'Decorative Throw Pillows',
          price: '$49.99',
          image: 'https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
        },
        {
          id: 'd4',
          name: 'Luxury Candle Set',
          price: '$39.99',
          image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
        },
      ],
    },
  ];

  // State for active collection tab
  const [activeCollection, setActiveCollection] = useState('all');

  // Filter collections based on active tab
  const displayedCollections = activeCollection === 'all'
    ? collections
    : collections.filter(collection => collection.id === activeCollection);

  return (
    <div className="bg-gradient-to-b from-white to-[#f8f4e9] py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#5a4a3f] mb-4">
              Our Collections
            </h1>
            <p className="text-[#7d6b5d] max-w-2xl mx-auto">
              Explore our carefully curated collections of premium furniture and decor pieces,
              designed to elevate your living space with elegance and style.
            </p>
          </div>
        </AnimatedSection>

        {/* Collection Tabs */}
        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <motion.button
              onClick={() => setActiveCollection('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm ${
                activeCollection === 'all'
                  ? 'bg-[#4D774E] text-white'
                  : 'bg-[#e8ddc9] text-[#5a4a3f] hover:bg-[#d7c9ae]'
              }`}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.97 }}
            >
              All Collections
            </motion.button>
            {collections.map((collection) => (
              <motion.button
                key={collection.id}
                onClick={() => setActiveCollection(collection.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm ${
                  activeCollection === collection.id
                    ? 'bg-[#4D774E] text-white'
                    : 'bg-[#e8ddc9] text-[#5a4a3f] hover:bg-[#d7c9ae]'
                }`}
                whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.97 }}
              >
                {collection.title}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Collections */}
        <div className="space-y-24">
          {displayedCollections.map((collection, collectionIndex) => (
            <AnimatedSection 
              key={collection.id} 
              animation="fade-up" 
              delay={0.3 + (collectionIndex * 0.1)}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#5a4a3f] mb-2">
                  {collection.title}
                </h2>
                <p className="text-[#7d6b5d] mb-6">{collection.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {collection.products.map((product, productIndex) => (
                  <AnimatedSection
                    key={product.id}
                    animation="fade-up"
                    delay={0.4 + (productIndex * 0.1)}
                  >
                    <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative overflow-hidden">
                        <motion.div
                          className="h-64 w-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${product.image})` }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.button
                            className="bg-[#4D774E] text-white px-5 py-2.5 rounded-md font-medium transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Quick View
                          </motion.button>
                        </div>
                      </div>
                      <div className="p-4">
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
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection className="mt-20 text-center" animation="fade-up" delay={0.5}>
          <div className="bg-gradient-to-r from-[#e8ddc9] to-[#d7c9ae] rounded-lg p-10 shadow-lg">
            <h2 className="text-2xl font-bold text-[#5a4a3f] mb-4">
              Need help finding the perfect pieces?
            </h2>
            <p className="text-[#7d6b5d] max-w-2xl mx-auto mb-8">
              Our interior design consultants can help you select items that perfectly complement your space and style preferences.
            </p>
            <motion.button
              className="bg-[#164A41] text-white px-8 py-3 rounded-md font-medium hover:bg-[#4D774E] transition-colors shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Design Consultation
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CollectionsPage; 