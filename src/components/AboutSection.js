import React, { useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const statsBoxRef = useRef(null);
  const testimonialRef = useRef(null);
  const servicesRef = useRef(null);
  const serviceCardsRef = useRef([]);

  // Set up GSAP animations with ScrollTrigger
  useEffect(() => {
    // Only run animations if all refs are available
    if (sectionRef.current && imageWrapperRef.current && statsBoxRef.current && testimonialRef.current && servicesRef.current) {
      
      // Subtle floating animation for the main image
      gsap.to(imageWrapperRef.current, {
        y: -20,
        duration: 2,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
      
      // Stats box animation
      gsap.fromTo(
        statsBoxRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: statsBoxRef.current,
            start: "top bottom-=150",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Testimonial parallax effect
      gsap.fromTo(
        testimonialRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Services heading reveal
      gsap.fromTo(
        servicesRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );

      // Service cards staggered animation
      serviceCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.15,
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=50",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  // Helper function to add element to service cards ref array
  const addToRefs = (el) => {
    if (el && !serviceCardsRef.current.includes(el)) {
      serviceCardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className='py-16 bg-gradient-to-b from-[#f8f4e9] to-white' id="about">
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* Image Column */}
          <div
            ref={imageWrapperRef}
            className='lg:w-1/2 mb-10 lg:mb-0 lg:pr-10'
          >
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
                alt='Interior Design Studio'
                className='rounded-lg shadow-lg w-full h-auto object-cover'
              />
              <div
                ref={statsBoxRef}
                className='absolute -bottom-6 -right-6 bg-[#3a2a1f] p-6 rounded-lg shadow-md hidden md:block'
              >
                <p className='text-white font-medium'>
                  <span className='text-4xl font-bold block mb-1 text-[#906c3e]'>8+</span>
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className='lg:w-1/2'
          >
            <h2 className='text-3xl font-bold text-[#3a2a1f] mb-4'>
              About 3ller¿
            </h2>
            <p className='text-[#7d6b5d] mb-6 leading-relaxed'>
              With 8 years of industry experience, 3ller¿ has established itself as a premier interior design company
              serving Ottawa and surrounding areas. Our journey began with a passion for transforming spaces into
              beautiful, functional environments that reflect our clients' unique personalities and needs.
            </p>
            <p className='text-[#7d6b5d] mb-8 leading-relaxed'>
              What sets us apart is our extensive experience working with top-tier interiors and ambassadors in Ottawa.
              Our portfolio includes prestigious projects for diplomatic residences, luxury homes, and high-end
              commercial spaces. We bring this refined expertise to every client, regardless of project size.
            </p>

            {/* Testimonial */}
            <div
              ref={testimonialRef}
              className='bg-[#f8f4e9] p-6 rounded-lg border-l-4 border-[#906c3e]'
            >
              <p className='text-[#5a4a3f] italic mb-4'>
                "3ller¿ transformed our embassy reception area with incredible attention to detail and respect for
                cultural elements. Their ability to blend functionality with diplomatic elegance was impressive."
              </p>
              <div className='flex items-center'>
                <div className='w-10 h-10 rounded-full bg-[#d7c9ae] mr-3 flex items-center justify-center text-[#3a2a1f] font-bold'>AM</div>
                <div>
                  <p className='font-medium text-[#3a2a1f]'>Ambassador M.</p>
                  <p className='text-sm text-[#7d6b5d]'>Diplomatic Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services We Offer */}
        <div className='mt-20'>
          <div ref={servicesRef}>
            <h2 className='text-3xl font-bold text-[#3a2a1f] text-center mb-12'>Services We Offer</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div
              ref={addToRefs}
              className='bg-white p-6 rounded-lg shadow-md'
            >
              <div className='w-16 h-16 bg-[#f8f4e9] rounded-full flex items-center justify-center mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-[#906c3e]'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-[#3a2a1f] mb-2'>Interior Design</h3>
              <p className='text-[#7d6b5d] mb-4'>
                Comprehensive design services for residential and commercial spaces, creating environments that balance aesthetics and functionality.
              </p>
              <motion.a
                href="#services"
                className="text-[#906c3e] font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>

            <div
              ref={addToRefs}
              className='bg-white p-6 rounded-lg shadow-md'
            >
              <div className='w-16 h-16 bg-[#f8f4e9] rounded-full flex items-center justify-center mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-[#906c3e]'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-[#3a2a1f] mb-2'>Construction Services</h3>
              <p className='text-[#7d6b5d] mb-4'>
                From minor renovations to complete build-outs, our construction team brings your vision to life with quality craftsmanship.
              </p>
              <motion.a
                href="#services"
                className="text-[#906c3e] font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>

            <div
              ref={addToRefs}
              className='bg-white p-6 rounded-lg shadow-md'
            >
              <div className='w-16 h-16 bg-[#f8f4e9] rounded-full flex items-center justify-center mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-[#906c3e]'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-[#3a2a1f] mb-2'>Event Decoration</h3>
              <p className='text-[#7d6b5d] mb-4'>
                Make your special occasions memorable with our event decoration services for weddings, corporate events, and private parties.
              </p>
              <motion.a
                href="#services"
                className="text-[#906c3e] font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

