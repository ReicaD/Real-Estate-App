import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import UserProfile from './UserProfile';
import AuthModal from './AuthModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { currentUser } = useAuth();
  
  const logoRef = useRef(null);
  const navbarRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    // Create a gradient animation for the logo
    const logoElement = logoRef.current;
    const navbarElement = navbarRef.current;
    
    if (logoElement && navbarElement) {
      // Background animation for navbar
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '150 top',
          scrub: true,
        }
      });
      
      // Animate the navbar background
      tl.to(navbarElement, {
        background: 'linear-gradient(to right, #f8f4e9, #e8ddc9)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        duration: 0.5,
      });
      
      // Animate the logo text color
      tl.to('.logo-text', {
        color: '#3a2a1f',
        textShadow: 'none',
        duration: 0.5,
      }, "<");
      
      // Animate the gradient logo
      gsap.to('.logo-gradient', {
        backgroundPosition: '200% center', 
        repeat: -1,
        duration: 3,
        ease: 'linear'
      });
      
      // Return cleanup function
      return () => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
      };
    }
  }, []);

  // Handle scroll effect for non-GSAP state changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a 
                ref={logoRef}
                href="#home" 
                className="font-bold text-xl md:text-2xl"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                <span 
                  className={`logo-gradient font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#164A41] via-[#4D774E] to-[#C8B568] bg-size-200 animate-gradient`}
                >
                  3ller
                </span>
                <span className={`logo-text ${isScrolled ? 'text-[#3a2a1f]' : 'text-white text-shadow'}`}>¿</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['home', 'about', 'services', 'portfolio', 'products', 'reviews', 'consultation', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className={`text-sm font-medium ${
                    isScrolled ? 'text-[#3a2a1f]' : 'text-white text-shadow'
                  } hover:text-[#906c3e] capitalize transition-colors`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              
              {currentUser ? (
                <UserProfile />
              ) : (
                <motion.button
                  className="border border-[#906c3e] text-[#906c3e] px-4 py-2 rounded-md hover:bg-[#906c3e] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Sign In
                </motion.button>
              )}
              
              <motion.button
                className="bg-[#906c3e] text-white px-4 py-2 rounded shadow-md hover:bg-[#7d5b30] transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('consultation')}
              >
                Book Consultation
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              {currentUser && <UserProfile />}
              <button
                className={`ml-4 ${isScrolled ? 'text-[#3a2a1f]' : 'text-white'} hover:text-[#906c3e] focus:outline-none`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 bg-gradient-to-r from-[#f8f4e9] to-[#e8ddc9] rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-2 px-4 flex flex-col space-y-2">
                {['home', 'about', 'services', 'portfolio', 'products', 'reviews', 'consultation', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="block py-2 text-[#3a2a1f] hover:text-[#906c3e] hover:bg-[#f1ede4] rounded px-3 capitalize transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                  >
                    {item}
                  </a>
                ))}
                
                {!currentUser && (
                  <button 
                    className="block w-full text-left py-2 text-[#3a2a1f] hover:text-[#906c3e] hover:bg-[#f1ede4] rounded px-3 transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAuthModalOpen(true);
                    }}
                  >
                    Sign In
                  </button>
                )}
                
                <button 
                  className="mt-2 w-full bg-[#906c3e] text-white py-2 px-4 rounded shadow-md hover:bg-[#7d5b30] transition-colors"
                  onClick={() => scrollToSection('consultation')}
                >
                  Book Consultation
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navbar; 