import React, { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-gray-800 hover:text-gray-600 focus:outline-none'
      >
        {isOpen ? (
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
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
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
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 right-0 bg-white shadow-md py-2 px-4 z-20'>
          <div className='flex flex-col space-y-3'>
            <a
              href='#'
              className='text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100'
            >
              Home
            </a>
            <a
              href='#'
              className='text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100'
            >
              Products
            </a>
            <a
              href='#'
              className='text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100'
            >
              About
            </a>
            <a
              href='#'
              className='text-gray-800 hover:text-gray-600 py-2 border-b border-gray-100'
            >
              Services
            </a>
            <a href='#' className='text-gray-800 hover:text-gray-600 py-2'>
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
