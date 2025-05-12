import React from 'react';
import { motion } from 'framer-motion';

const FeaturedPortfolio = () => {
  // Featured projects (could be expanded or pulled from an API/database)
  const featuredProjects = [
    {
      id: 1,
      title: "Embassy Renovation",
      description: "Complete renovation of a diplomatic embassy in Ottawa",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "Commercial"
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      description: "Full interior design for a 4,500 sq ft penthouse",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "Residential"
    },
    {
      id: 3,
      title: "Historic Home Restoration",
      description: "Careful restoration of a 19th century home in Rockcliffe Park",
      image: "https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      category: "Residential"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our signature transformations that showcase our commitment to quality, 
            innovative design, and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-w-16 aspect-h-9 h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#906c3e] px-2 py-1 rounded-full mb-2 inline-block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-2">{project.description}</p>
                <motion.span 
                  className="inline-flex items-center text-sm font-medium text-white"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -10 }}
                  transition={{ delay: 0.2 }}
                >
                  View Project 
                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#portfolio"
            className="inline-flex items-center bg-[#f8f4e9] text-[#3a2a1f] font-medium px-6 py-3 rounded-lg border border-[#e8ddc9] hover:bg-[#e8ddc9] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio; 