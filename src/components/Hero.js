import React from 'react';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative h-screen bg-gray-100'>
      {/* Navigation Bar */}
      <motion.nav
        className='absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='text-2xl font-bold text-gray-800'>InteriorDesign</div>
        <div className='hidden md:flex space-x-8'>
          <a href='#' className='text-gray-800 hover:text-gray-600'>
            Home
          </a>
          <a href='#' className='text-gray-800 hover:text-gray-600'>
            Products
          </a>
          <a href='#' className='text-gray-800 hover:text-gray-600'>
            About
          </a>
          <a href='#' className='text-gray-800 hover:text-gray-600'>
            Services
          </a>
          <a href='#' className='text-gray-800 hover:text-gray-600'>
            Contact
          </a>
        </div>
        <div className='flex items-center space-x-4'>
          <button className='text-gray-800 hover:text-gray-600'>
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
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
          <button className='text-gray-800 hover:text-gray-600'>
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
                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
              />
            </svg>
          </button>
          <button className='text-gray-800 hover:text-gray-600'>
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
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </button>
          <MobileMenu />
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className='relative h-full flex items-center'>
        <motion.div
          className='absolute inset-0 bg-cover bg-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-40'></div>
        </motion.div>

        <div className='container mx-auto px-8 relative z-10'>
          <motion.div
            className='max-w-xl'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className='text-5xl font-bold text-white mb-6'>
              Modern Interior Design Solutions
            </h1>
            <p className='text-xl text-gray-200 mb-8'>
              Transform your space with our premium interior design services
              tailored to your unique style and needs.
            </p>
            <motion.div
              className='flex space-x-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.button
                className='bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
              </motion.button>
              <motion.button
                className='border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
