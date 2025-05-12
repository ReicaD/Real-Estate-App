import React, { useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ icon, title, description, delay, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl service-card"
    >
      <div className="text-[#b8a283] mb-5 service-icon">{icon}</div>
      <h3 className="text-xl font-bold text-[#5a4a3f] mb-3 service-title">{title}</h3>
      <p className="text-[#7d6b5d] service-description">{description}</p>
      <motion.button
        className="mt-5 text-[#b8a283] font-medium flex items-center service-button"
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
      </motion.button>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const servicesContainerRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const serviceRefs = useRef([]);

  // Initialize an array to hold the service card refs
  serviceRefs.current = [];

  // Add to refs helper function
  const addToRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  // GSAP ScrollTrigger animations
  useEffect(() => {
    if (
      sectionRef.current &&
      headingRef.current && 
      descriptionRef.current &&
      servicesContainerRef.current &&
      serviceRefs.current.length > 0
    ) {
      // Parallax effect for the section background
      gsap.to(sectionRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top bottom-=80",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Service cards staggered animations
      serviceRefs.current.forEach((card, index) => {
        if (card) {
          // Card reveal animation
          gsap.fromTo(
            card,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=50",
                toggleActions: "play none none none"
              }
            }
          );

          // Internal elements animation (icon, title, description, button)
          const cardElements = [
            card.querySelector('.service-icon'),
            card.querySelector('.service-title'),
            card.querySelector('.service-description'),
            card.querySelector('.service-button')
          ];

          gsap.fromTo(
            cardElements,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.1,
              delay: 0.1 + (index * 0.05),
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=30",
                toggleActions: "play none none none"
              }
            }
          );

          // Hover animation
          const hoverTl = gsap.timeline({ paused: true });
          
          hoverTl.to(card, {
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            duration: 0.3
          });
          
          card.addEventListener("mouseenter", () => hoverTl.play());
          card.addEventListener("mouseleave", () => hoverTl.reverse());
        }
      });

      // CTA button animation
      if (ctaButtonRef.current) {
        gsap.fromTo(
          ctaButtonRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: ctaButtonRef.current,
              start: "top bottom-=50",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
        // Remove event listeners
        serviceRefs.current.forEach(card => {
          if (card) {
            card.removeEventListener("mouseenter", () => {});
            card.removeEventListener("mouseleave", () => {});
          }
        });
      };
    }
  }, []);

  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Interior Design Consultation",
      description:
        "Our professional interior designers will consult with you to understand your vision, style preferences, and functional needs to create a personalized design plan.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "In-Home Consultations",
      description:
        "We offer professional house calls where our design experts visit your space to assess, measure, and help you visualize potential design solutions in person.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      title: "Space Planning",
      description:
        "Optimize your living or working space with our expert space planning services. We create functional layouts that maximize flow, comfort, and aesthetic appeal.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "Custom Color Consultation",
      description:
        "Find the perfect color palette for your space with our specialized color consultation services. We help select hues that enhance mood, complement furnishings, and reflect your personality.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      ),
      title: "Furniture Selection",
      description:
        "Let us help you choose furniture pieces that perfectly complement your space, balancing aesthetics, comfort, and functionality for a cohesive look.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
      title: "Project Management",
      description:
        "From concept to completion, we handle all aspects of your interior design project, coordinating contractors, deliveries, and installations for a seamless experience.",
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-white to-[#f8f4e9]"
      id="services"
      style={{ backgroundSize: "100% 200%" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-3xl font-bold text-[#5a4a3f] mb-4"
          >
            Our Premium Design Services
          </h2>
          <p 
            ref={descriptionRef}
            className="text-[#7d6b5d] max-w-2xl mx-auto"
          >
            We offer a comprehensive range of interior design services tailored to your needs,
            whether you're looking to refresh a single room or transform your entire home.
            Our team of experts is here to guide you through every step of the process.
          </p>
        </div>

        <div 
          ref={servicesContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.1 * (index + 1)}
              cardRef={el => addToRefs(el)}
            />
          ))}
        </div>

        <div
          className="mt-16 text-center"
        >
          <motion.button
            ref={ctaButtonRef}
            className="bg-[#b8a283] text-white px-8 py-3 rounded-md font-medium hover:bg-[#a59178] transition-colors shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
