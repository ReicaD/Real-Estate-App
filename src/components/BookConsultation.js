import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const BookConsultation = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-white to-[#f8f4e9]">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#3a2a1f] mb-4">Book a Consultation</h1>
            <p className="text-[#7d6b5d] max-w-2xl mx-auto">
              Let our experts help you transform your space. Contact us to schedule
              a consultation with our design team.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fade-up" delay={0.2}>
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-[#3a2a1f] font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-[#e8ddc9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#906c3e]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#3a2a1f] font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-[#e8ddc9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#906c3e]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-[#3a2a1f] font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-[#e8ddc9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#906c3e]"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-[#3a2a1f] font-medium mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-[#e8ddc9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#906c3e]"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Interior Design</option>
                    <option value="commercial">Commercial Space Design</option>
                    <option value="construction">Construction Work</option>
                    <option value="event">Event Decoration</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#3a2a1f] font-medium mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-[#e8ddc9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#906c3e]"
                  placeholder="Tell us about your project and what you're looking to achieve..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-[#906c3e] text-white py-3 rounded-md font-medium hover:bg-[#7d5b30] transition-colors"
                whileHover={{ scale: 1.01, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.99 }}
              >
                Schedule Consultation
              </motion.button>
            </form>
          </AnimatedSection>
          
          {/* Contact Information */}
          <AnimatedSection animation="fade-up" delay={0.4}>
            <div className="bg-[#3a2a1f] text-white rounded-lg shadow-lg p-10 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#906c3e] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">343-996-9179</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#906c3e] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">d.3ller@yahoo.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold mb-3">Our Services</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300">
                  <li>Interior Design Solutions</li>
                  <li>Construction Work</li>
                  <li>Home & Event Decor</li>
                  <li>Commercial Spaces</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-300">
                  With 8 years of experience working with top-tier interiors and ambassadors
                  in Ottawa, our team brings unmatched expertise to every project.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
