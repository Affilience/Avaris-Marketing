'use client';

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Modern E-Commerce Platform",
      category: "E-Commerce",
      description: "A sleek online store with seamless shopping experience and integrated payment solutions.",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      gradient: "from-forest via-forest/80 to-ash"
    },
    {
      title: "Corporate Website Redesign",
      category: "Corporate",
      description: "Complete brand refresh with modern design and improved user experience.",
      tags: ["React", "CMS", "SEO Optimization"],
      gradient: "from-ash via-light to-forest"
    },
    {
      title: "Restaurant Booking System",
      category: "Hospitality",
      description: "Custom reservation platform with real-time availability and customer management.",
      tags: ["Full-Stack", "Database", "API Integration"],
      gradient: "from-light via-ash/80 to-forest"
    },
    {
      title: "Creative Portfolio Site",
      category: "Portfolio",
      description: "Stunning visual showcase for a professional photographer with gallery features.",
      tags: ["Animation", "Responsive", "Performance"],
      gradient: "from-forest/90 via-ash to-light"
    },
    {
      title: "SaaS Landing Page",
      category: "Tech Startup",
      description: "High-converting landing page with compelling messaging and clear call-to-actions.",
      tags: ["Conversion Focused", "A/B Testing", "Analytics"],
      gradient: "from-ash via-forest/70 to-light"
    },
    {
      title: "Non-Profit Organization",
      category: "Non-Profit",
      description: "Mission-driven website with donation integration and volunteer management.",
      tags: ["Accessibility", "Donation Gateway", "Content Rich"],
      gradient: "from-light via-forest/80 to-ash"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-forest text-fence py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-ash rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-light rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
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
            A showcase of our recent work and successful partnerships
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-fence">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                <div className="bg-white rounded-2xl border border-light overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="absolute inset-0 opacity-20"
                           style={{
                             backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                             backgroundSize: '30px 30px'
                           }}
                      ></div>
                    </motion.div>

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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <motion.div
                      className="text-sm text-ash mb-2 uppercase tracking-wider font-semibold"
                      animate={{ x: hoveredIndex === index ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.category}
                    </motion.div>
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
                          className="text-xs px-3 py-2 bg-light/50 text-forest rounded-full font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
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
            Like What You See?
          </motion.h2>
          <motion.p
            className="text-2xl text-ash mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's create something amazing together
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
