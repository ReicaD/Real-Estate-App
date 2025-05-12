import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      text: "3ller¿ transformed our embassy reception area with incredible attention to detail and respect for cultural elements. Their ability to blend functionality with diplomatic elegance was impressive.",
      name: "Ambassador M.",
      position: "Diplomatic Client",
      initials: "AM"
    },
    {
      text: "Working with 3ller¿ was a game-changer for our office renovation. They understood our corporate culture and translated it into a space that impresses clients and inspires our team. The construction work was completed on schedule with minimal disruption.",
      name: "Sarah J.",
      position: "CEO, Tech Startup",
      initials: "SJ"
    },
    {
      text: "The event decoration services provided by 3ller¿ made our wedding absolutely magical. Their attention to detail and ability to work within our budget while still creating a luxury atmosphere exceeded our expectations. Highly recommended!",
      name: "Daniel & Maria",
      position: "Wedding Clients",
      initials: "DM"
    },
    {
      text: "As a property developer, I've worked with many interior designers, but 3ller¿ stands out for their professionalism and creative solutions. Their designs have significantly increased the value of our properties and shortened our sales cycles.",
      name: "Robert P.",
      position: "Property Developer",
      initials: "RP"
    },
    {
      text: "3ller¿ brought fresh ideas to our hotel lobby renovation that perfectly captured our brand essence. The team's expertise in commercial design and understanding of traffic flow has transformed our guest experience. Well worth the investment.",
      name: "Victoria T.",
      position: "Hotel Manager",
      initials: "VT"
    }
  ];

  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-[#f8f4e9] to-white" id="reviews">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#3a2a1f] mb-3">Client Testimonials</h2>
            <p className="text-[#7d6b5d] max-w-2xl mx-auto text-sm">
              Read what our clients have to say about their experience working with 3ller¿.
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop Reviews Carousel */}
        <div className="hidden md:block">
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#906c3e]"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                {/* Featured Review */}
                <div className="md:col-span-3">
                  <div className="mb-3">
                    <svg
                      className="h-8 w-8 text-[#906c3e] opacity-30"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="min-h-[160px]"
                  >
                    <p className="text-base text-[#5a4a3f] mb-4 italic line-clamp-4">
                      "{reviews[activeIndex].text}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#e8ddc9] flex items-center justify-center text-[#3a2a1f] font-bold text-sm mr-3">
                        {reviews[activeIndex].initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#3a2a1f] text-sm">{reviews[activeIndex].name}</h4>
                        <p className="text-[#7d6b5d] text-xs">{reviews[activeIndex].position}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Other Reviews Preview */}
                <div className="md:col-span-2">
                  <div className="space-y-3">
                    {reviews.map((review, index) => (
                      <motion.div
                        key={index}
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          index === activeIndex 
                            ? 'bg-[#e8ddc9] border-l-4 border-[#906c3e]' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                        whileHover={{ x: index === activeIndex ? 0 : 5 }}
                        onClick={() => goToReview(index)}
                      >
                        <p className="text-[#5a4a3f] line-clamp-1 text-xs">
                          "{review.text.substring(0, 50)}..."
                        </p>
                        <p className={`mt-1 font-medium text-xs ${
                          index === activeIndex ? 'text-[#906c3e]' : 'text-[#3a2a1f]'
                        }`}>
                          {review.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-end mt-4 space-x-2">
                <motion.button
                  className="w-8 h-8 rounded-full bg-[#e8ddc9] flex items-center justify-center text-[#3a2a1f]"
                  whileHover={{ scale: 1.1, backgroundColor: '#d7c9ae' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevReview}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  className="w-8 h-8 rounded-full bg-[#e8ddc9] flex items-center justify-center text-[#3a2a1f]"
                  whileHover={{ scale: 1.1, backgroundColor: '#d7c9ae' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextReview}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mobile Reviews */}
        <div className="md:hidden">
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="bg-white rounded-lg shadow-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#906c3e]"></div>
              
              <div className="mb-3">
                <svg
                  className="h-6 w-6 text-[#906c3e] opacity-30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-[140px]"
              >
                <p className="text-[#5a4a3f] mb-4 italic text-sm line-clamp-4">
                  "{reviews[activeIndex].text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#e8ddc9] flex items-center justify-center text-[#3a2a1f] font-bold text-xs mr-2">
                    {reviews[activeIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3a2a1f] text-sm">{reviews[activeIndex].name}</h4>
                    <p className="text-xs text-[#7d6b5d]">{reviews[activeIndex].position}</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Dot Indicators */}
              <div className="flex justify-center mt-4 space-x-1">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === activeIndex ? 'bg-[#906c3e]' : 'bg-[#e8ddc9]'
                    }`}
                    onClick={() => goToReview(index)}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-between mt-3">
                <motion.button
                  className="w-8 h-8 rounded-full bg-[#e8ddc9] flex items-center justify-center text-[#3a2a1f]"
                  whileTap={{ scale: 0.95 }}
                  onClick={prevReview}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  className="w-8 h-8 rounded-full bg-[#e8ddc9] flex items-center justify-center text-[#3a2a1f]"
                  whileTap={{ scale: 0.95 }}
                  onClick={nextReview}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="mt-8 text-center">
            <motion.button
              className="bg-[#906c3e] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#7d5b30] transition-colors shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('consultation');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book a Consultation
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ReviewsSection; 