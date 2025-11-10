'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import EnhancedHero from "../components/EnhancedHero";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Elevate Safety Solutions",
      category: "Fire Safety Consultancy",
      description: "Professional fire safety consultancy website for a UK-based company. Features comprehensive service information, expert consultancy details, and streamlined contact forms to help businesses ensure fire safety compliance.",
      tags: ["Responsive Design", "SEO Optimized", "Professional Services"],
      image: "/elevate-safety.jpg",
      url: "https://www.elevatesafetysolutions.co.uk/"
    },
    {
      title: "Aurix Recovery",
      category: "Sustainable E-Waste",
      description: "Industrial-scale e-waste refining platform for sustainable gold recovery. Built with modern design showcasing advanced technology, environmental responsibility, and the company's commitment to transforming electronic waste into 99.99% pure gold.",
      tags: ["Next.js", "Modern Design", "Industry Leader"],
      image: "/aurix-recovery.jpg",
      url: "https://www.aurixrecovery.com/"
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedHero>
        <div className="text-center">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-2xl text-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Examples of the diverse web solutions we create for businesses across industries
          </motion.p>
        </div>
      </EnhancedHero>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-fence">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl border-2 border-ash/30 hover:border-forest/40 overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-400"
                      style={{
                        transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />

                    <motion.div
                      className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-16 h-16 bg-fence/90 rounded-full flex items-center justify-center"
                      >
                        <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <div className="text-sm text-ash mb-2 uppercase tracking-wider font-semibold">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-forest mb-3 group-hover:text-forest/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-ash mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          className="text-sm px-4 py-2 bg-gradient-to-br from-forest/90 to-forest text-fence rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-light/20 to-fence relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                 backgroundSize: '40px 40px'
               }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl font-bold text-forest mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Build Your Custom Solution?
          </motion.h2>
          <motion.p
            className="text-2xl text-ash mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every project is unique. Let's discuss your specific needs and create a website tailored to your business goals.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block bg-forest text-fence px-12 py-5 rounded-lg font-semibold hover:bg-forest/90 transition-all shadow-xl hover:shadow-2xl text-lg"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
