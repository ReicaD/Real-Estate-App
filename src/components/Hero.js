import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax effect
  const yBgPosition = scrollY * 0.2; // Slower scrolling for parallax effect

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative h-screen bg-gray-100 pt-16'>
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
            backgroundPositionY: `calc(50% + ${yBgPosition}px)`,
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        </motion.div>

        <div className='container mx-auto px-8 relative z-10'>
          <motion.div
            className='max-w-xl'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className='text-5xl font-bold text-white mb-6'>
              Luxury Interior Design Solutions
            </h1>
            <p className='text-xl text-gray-200 mb-8'>
              Transform your space with our premium interior design services, 
              personalized consultations, and professional house calls.
            </p>
            <motion.div
              className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.button
                className='bg-[#b8a283] text-white px-6 py-3 rounded-md font-medium hover:bg-[#a59178] transition duration-300 shadow-md'
                whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('consultation')}
              >
                Book Consultation
              </motion.button>
              <motion.button
                className='border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => scrollToSection('about')}
          style={{ cursor: 'pointer' }}
        >
          <svg 
            className="w-10 h-10 text-white opacity-70"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
