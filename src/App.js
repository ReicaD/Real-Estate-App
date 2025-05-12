import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import CollectionsPage from './components/CollectionsPage';
import Footer from './components/Footer';
import BookConsultation from './components/BookConsultation';
import ServicesPage from './components/ServicesPage';
import ReviewsSection from './components/ReviewsSection';
import PortfolioPage from './components/PortfolioPage';
import FeaturedPortfolio from './components/FeaturedPortfolio';
import FirebaseTest from './components/FirebaseTest';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [showFirebaseTest, setShowFirebaseTest] = useState(false);
  
  // Check if the URL has the test parameter
  useEffect(() => {
    const handleHashChange = () => {
      setShowFirebaseTest(window.location.hash === '#firebase-test');
    };
    
    // Check on initial load
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  return (
    <AuthProvider>
      <div className='App'>
        {showFirebaseTest ? (
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Firebase Configuration Test</h1>
            <FirebaseTest />
            <div className="text-center mt-6">
              <a 
                href="#home" 
                className="text-[#164A41] hover:text-[#4D774E] underline font-medium"
              >
                Return to Main Site
              </a>
            </div>
          </div>
        ) : (
          <>
            <Navbar />
            <div id="home">
              <Hero />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <div id="portfolio">
              <FeaturedPortfolio />
            </div>
            <div id="services">
              <ServicesPage />
            </div>
            <div id="products">
              <CollectionsPage />
            </div>
            <div id="reviews">
              <ReviewsSection />
            </div>
            <div id="consultation">
              <BookConsultation />
            </div>
            <div id="contact">
              <ContactSection />
            </div>
            <Footer />
          </>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
