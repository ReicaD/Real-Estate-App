import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* Image Column */}
          <AnimatedSection
            className='lg:w-1/2 mb-10 lg:mb-0 lg:pr-10'
            animation='fade-right'
          >
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
                alt='Interior Design Studio'
                className='rounded-lg shadow-lg w-full h-auto object-cover'
              />
              <AnimatedSection
                className='absolute -bottom-6 -right-6 bg-gray-100 p-6 rounded-lg shadow-md hidden md:block'
                animation='zoom-in'
                delay={0.5}
              >
                <p className='text-gray-800 font-medium'>
                  <span className='text-4xl font-bold block mb-1'>15+</span>
                  Years of Experience
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Content Column */}
          <AnimatedSection
            className='lg:w-1/2'
            animation='fade-left'
            delay={0.2}
          >
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Our Design Philosophy
            </h2>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Founded in 2008, our interior design studio has been transforming
              spaces into beautiful, functional environments that reflect our
              clients' unique personalities and needs. We believe that good
              design should be accessible to everyone and that your home should
              tell your story.
            </p>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              Our team of experienced designers approaches each project with
              fresh eyes, combining timeless principles with contemporary trends
              to create spaces that are both elegant and livable. We work
              closely with our clients throughout the design process, ensuring
              that every detail aligns with their vision and lifestyle.
            </p>

            {/* Testimonial */}
            <AnimatedSection
              className='bg-gray-50 p-6 rounded-lg border-l-4 border-gray-800'
              animation='fade-up'
              delay={0.4}
            >
              <p className='text-gray-700 italic mb-4'>
                "Working with this team was a dream. They transformed our house
                into a home that perfectly reflects our style while improving
                functionality in ways we hadn't even considered."
              </p>
              <div className='flex items-center'>
                <div className='w-10 h-10 rounded-full bg-gray-300 mr-3'></div>
                <div>
                  <p className='font-medium text-gray-800'>Sarah Johnson</p>
                  <p className='text-sm text-gray-600'>Residential Client</p>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>

        {/* Values Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
          <AnimatedSection
            className='text-center p-6'
            animation='fade-up'
            delay={0.1}
          >
            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-gray-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>Quality</h3>
            <p className='text-gray-600'>
              We source the finest materials and work with skilled craftspeople
              to ensure every piece stands the test of time.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className='text-center p-6'
            animation='fade-up'
            delay={0.3}
          >
            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-gray-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>
              Sustainability
            </h3>
            <p className='text-gray-600'>
              We're committed to eco-friendly design practices that minimize
              environmental impact without compromising style.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className='text-center p-6'
            animation='fade-up'
            delay={0.5}
          >
            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-gray-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>Innovation</h3>
            <p className='text-gray-600'>
              We blend traditional techniques with cutting-edge design to create
              spaces that are both timeless and contemporary.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
