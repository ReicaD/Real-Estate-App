import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Interior Design',
      description:
        'Full-service interior design for residential and commercial spaces, from concept to completion.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Space Planning',
      description:
        'Optimize your space for functionality and flow with our expert space planning services.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Custom Furniture',
      description:
        'Unique, made-to-measure furniture pieces designed specifically for your space and style.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Color Consultation',
      description:
        'Expert guidance on color schemes that enhance your space and reflect your personal style.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
          />
        </svg>
      ),
    },
  ];

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <AnimatedSection animation='fade-up'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Our Design Services
            </h2>
            <p className='text-gray-600 max-w-lg mx-auto'>
              We offer a comprehensive range of interior design services to
              transform your space into something extraordinary.
            </p>
          </div>
        </AnimatedSection>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation='fade-up'
              delay={0.1 * (index + 1)}
            >
              <motion.div
                className='bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg'
                whileHover={{ y: -8 }}
              >
                <div className='text-gray-800 mb-4'>{service.icon}</div>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mb-4'>{service.description}</p>
                <motion.a
                  href='#'
                  className='text-gray-800 font-medium inline-flex items-center group'
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Process Section */}
        <AnimatedSection animation='fade-up' delay={0.5} className='mt-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Our Design Process
            </h2>
            <p className='text-gray-600 max-w-lg mx-auto'>
              We follow a proven, client-centered approach to bring your vision
              to life.
            </p>
          </div>

          <div className='flex flex-col md:flex-row justify-between'>
            <AnimatedSection
              className='md:w-1/4 mb-8 md:mb-0 text-center px-4'
              animation='fade-up'
              delay={0.6}
            >
              <motion.div
                className='w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'
                whileHover={{ scale: 1.1 }}
              >
                1
              </motion.div>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                Consultation
              </h3>
              <p className='text-gray-600'>
                We meet to discuss your needs, preferences, and vision for your
                space.
              </p>
            </AnimatedSection>

            <AnimatedSection
              className='md:w-1/4 mb-8 md:mb-0 text-center px-4'
              animation='fade-up'
              delay={0.7}
            >
              <motion.div
                className='w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'
                whileHover={{ scale: 1.1 }}
              >
                2
              </motion.div>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                Concept Development
              </h3>
              <p className='text-gray-600'>
                We create detailed design concepts based on your requirements
                and feedback.
              </p>
            </AnimatedSection>

            <AnimatedSection
              className='md:w-1/4 mb-8 md:mb-0 text-center px-4'
              animation='fade-up'
              delay={0.8}
            >
              <motion.div
                className='w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'
                whileHover={{ scale: 1.1 }}
              >
                3
              </motion.div>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                Implementation
              </h3>
              <p className='text-gray-600'>
                We manage the execution of the design, coordinating with
                contractors and vendors.
              </p>
            </AnimatedSection>

            <AnimatedSection
              className='md:w-1/4 text-center px-4'
              animation='fade-up'
              delay={0.9}
            >
              <motion.div
                className='w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'
                whileHover={{ scale: 1.1 }}
              >
                4
              </motion.div>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                Final Reveal
              </h3>
              <p className='text-gray-600'>
                We present your transformed space, ensuring every detail meets
                your expectations.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection
          animation='fade-up'
          delay={1}
          className='mt-16 text-center'
        >
          <motion.a
            href='#'
            className='inline-block bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-700 transition duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
