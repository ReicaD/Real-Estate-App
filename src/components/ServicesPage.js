import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const BeforeAfterServiceCard = ({ title, description, icon, beforeImage, afterImage }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Before/After Image Section */}
      <div className="relative h-48 overflow-hidden">
        {/* Before Image - Shown by default or when hovered (depending on view preference) */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* After Image - Shown when hovered */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="text-[#906c3e] mr-3">{icon}</div>
          <h3 className="text-lg font-bold text-[#3a2a1f]">{title}</h3>
        </div>
        <p className="text-sm text-[#7d6b5d] mb-2">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Residential Interior Design",
      description: "Transform your home with our expert interior design services. We'll work closely with you to create spaces that reflect your personality and lifestyle.",
      beforeImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Commercial Space Design",
      description: "Elevate your business environment with our commercial design services. We create functional, impressive spaces that enhance productivity and impress clients.",
      beforeImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" />
        </svg>
      ),
      title: "Construction Services",
      description: "From minor renovations to complete build-outs, our construction team brings your vision to life with quality craftsmanship and attention to detail.",
      beforeImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      title: "Event Decoration",
      description: "Make your special occasions memorable with our event decoration services. We create stunning environments for weddings, corporate events, and private parties.",
      beforeImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1519741347686-c1e331fcb994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-white to-[#f8f4e9]">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#3a2a1f] mb-3">Our Premium Services</h1>
            <p className="text-[#7d6b5d] max-w-2xl mx-auto text-sm">
              With 8 years of experience working with top-tier interiors and ambassadors in Ottawa,
              we offer comprehensive design and construction solutions for both residential and commercial clients.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid with Before/After Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={0.1 * (index + 1)}>
              <BeforeAfterServiceCard 
                title={service.title} 
                description={service.description} 
                icon={service.icon}
                beforeImage={service.beforeImage}
                afterImage={service.afterImage}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Featured Service Highlight */}
        <AnimatedSection animation="fade-up" delay={0.3}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-[#3a2a1f] mb-4">Complete Transformation Services</h2>
                <p className="text-[#7d6b5d] mb-4 text-sm">
                  Our team specializes in complete room and home transformations that dramatically enhance both 
                  the aesthetics and functionality of your space. We handle everything from initial concept 
                  to final installation, ensuring a seamless experience.
                </p>
                <ul className="space-y-2 mb-4 text-sm">
                  {['Design consultation', 'Custom plans', 'Material selection', 'Construction', 'Styling & decoration'].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#906c3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#5a4a3f]">{item}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="bg-[#906c3e] text-white self-start px-5 py-2 rounded-md font-medium hover:bg-[#7d5b30] transition-colors shadow-md text-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('consultation');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Schedule a Consultation
                </motion.button>
              </div>
              <div 
                className="relative cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="grid grid-cols-2 grid-rows-2 h-full">
                  <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753376-12c8ab8e17a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
                  <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
                  <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
                  <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
                <div className="absolute bottom-6 left-6 text-white font-bold text-xl flex items-center">
                  View Our Portfolio
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact CTA */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="bg-[#3a2a1f] text-white rounded-lg shadow-xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Ready to start your project?</h2>
                <p className="text-gray-300 mb-6">
                  Contact us today to schedule a consultation with our design team. 
                  We'll help bring your vision to life!
                </p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#906c3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Phone: 343-996-9179
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#906c3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Email: d.3ller@yahoo.com
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <motion.button
                  className="bg-[#906c3e] text-white px-8 py-3 rounded-md font-medium hover:bg-[#7d5b30] transition-colors shadow-md"
                  whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('consultation');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Book Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection animation="fade-up" delay={0.5} className="mt-20">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#3a2a1f] mb-4">Our Experience</h2>
              <p className="text-[#7d6b5d] max-w-3xl mx-auto">
                3ller¿ brings 8 years of industry experience to every project, with a portfolio that includes working with prestigious clients and ambassadors in Ottawa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-[#906c3e] text-4xl font-bold mb-2">8+</div>
                <div className="text-[#3a2a1f] font-medium">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-[#906c3e] text-4xl font-bold mb-2">150+</div>
                <div className="text-[#3a2a1f] font-medium">Projects Completed</div>
              </div>
              <div className="p-6">
                <div className="text-[#906c3e] text-4xl font-bold mb-2">50+</div>
                <div className="text-[#3a2a1f] font-medium">Premium Clients</div>
              </div>
              <div className="p-6">
                <div className="text-[#906c3e] text-4xl font-bold mb-2">15+</div>
                <div className="text-[#3a2a1f] font-medium">Design Awards</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ServicesPage; 