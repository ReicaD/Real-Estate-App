import React from 'react';
import './App.css';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
