import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef(null);

  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Embassy Renovation",
      category: "commercial",
      description: "Complete renovation of a diplomatic embassy in Ottawa, transforming traditional spaces into modern functional areas while preserving historical elements.",
      year: "2022",
      location: "Ottawa Diplomatic District",
      beforeImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      category: "residential",
      description: "Full interior design for a 4,500 sq ft penthouse featuring custom furnishings, smart home integration, and panoramic views of downtown Ottawa.",
      year: "2023",
      location: "Downtown Ottawa",
      beforeImage: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "commercial",
      description: "Redesign of a boutique hotel lobby and common areas to create a unique guest experience that reflects local culture and artistry.",
      year: "2021",
      location: "ByWard Market, Ottawa",
      beforeImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Tech Startup Office",
      category: "commercial",
      description: "Design of a collaborative workspace for a growing tech company that balances open-concept spaces with private areas and integrates innovative technology.",
      year: "2022",
      location: "Kanata, Ottawa",
      beforeImage: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Historic Home Restoration",
      category: "residential",
      description: "Careful restoration of a 19th century home, preserving architectural details while modernizing systems and interior spaces for contemporary living.",
      year: "2020",
      location: "Rockcliffe Park, Ottawa",
      beforeImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
      featured: true
    },
    {
      id: 6,
      title: "Waterfront Restaurant",
      category: "commercial",
      description: "Redesign of a waterfront dining establishment with a focus on maximizing views, creating intimate dining spaces, and incorporating sustainable materials.",
      year: "2021",
      location: "Ottawa River",
      beforeImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    // GSAP animations with ScrollTrigger
    if (sectionRef.current && headingRef.current && filterRef.current && projectsRef.current) {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { 
          y: -50,
          opacity: 0
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
          }
        }
      );

      // Filter buttons animation
      gsap.fromTo(
        filterRef.current.children,
        { 
          scale: 0.8,
          opacity: 0
        },
        { 
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: filterRef.current,
            start: 'top bottom-=80',
            toggleActions: 'play none none none'
          }
        }
      );

      // Project cards staggered animation
      const projectCards = projectsRef.current.querySelectorAll('.project-card');
      
      gsap.fromTo(
        projectCards,
        { 
          y: 100,
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top bottom-=50',
            end: 'bottom center',
            toggleActions: 'play none none none',
            scrub: 1
          }
        }
      );

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [filteredProjects]); // Re-run when filtered projects change

  const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
      if (cardRef.current) {
        // Add hover animation enhancement
        gsap.set(cardRef.current, { 
          transformPerspective: 1000 
        });
        
        const hoverAnimation = gsap.timeline({ paused: true })
          .to(cardRef.current, { 
            scale: 1.02, 
            boxShadow: '0 22px 40px rgba(0,0,0,0.15)',
            duration: 0.3
          });
        
        cardRef.current.addEventListener('mouseenter', () => hoverAnimation.play());
        cardRef.current.addEventListener('mouseleave', () => hoverAnimation.reverse());
        
        return () => {
          if (cardRef.current) {
            cardRef.current.removeEventListener('mouseenter', () => hoverAnimation.play());
            cardRef.current.removeEventListener('mouseleave', () => hoverAnimation.reverse());
          }
        };
      }
    }, []);

    return (
      <div 
        ref={cardRef}
        className="mb-16 bg-white rounded-lg overflow-hidden shadow-lg project-card"
      >
        <div 
          className="relative h-96 overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Before Image Layer */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.beforeImage})` }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* After Image Layer */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.afterImage})` }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Overlay with labels */}
          <div className="absolute inset-0 flex">
            <div className={`w-1/2 flex items-end p-4 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
              <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded font-medium">Before</span>
            </div>
            <div className={`w-1/2 flex items-end justify-end p-4 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <span className="bg-[#b8a283] bg-opacity-90 text-white px-3 py-1 rounded font-medium">After</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
            <span className="px-3 py-1 bg-[#b8a283] text-white text-xs uppercase rounded-full">
              {project.category}
            </span>
          </div>
          
          <p className="text-gray-700 mb-4">{project.description}</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Location:</span> {project.location}
            </div>
            <div>
              <span className="font-medium">Year:</span> {project.year}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-6">
        <div 
          ref={headingRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our curated collection of transformational projects spanning residential and commercial spaces. 
            Hover over each image to see the dramatic before and after changes.
          </p>
          
          <div ref={filterRef} className="flex flex-wrap justify-center gap-3 mb-10">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${activeFilter === 'all' 
                  ? 'bg-[#b8a283] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveFilter('residential')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${activeFilter === 'residential' 
                  ? 'bg-[#b8a283] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Residential
            </button>
            <button 
              onClick={() => setActiveFilter('commercial')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${activeFilter === 'commercial' 
                  ? 'bg-[#b8a283] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Commercial
            </button>
          </div>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage; 