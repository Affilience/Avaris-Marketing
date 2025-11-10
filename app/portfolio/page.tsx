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

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fence via-light/30 to-fence relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ash rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-forest mb-4">What Our Clients Say</h2>
            <p className="text-xl text-ash">Real results from real businesses we've helped transform</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Elevate Safety Solutions Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-2 border-ash/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-forest/5 to-transparent rounded-bl-full"></div>

              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <svg className="w-12 h-12 text-forest/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-ash text-lg leading-relaxed mb-6">
                  "Before working with Avaris Marketing, our advertising campaigns were underperforming and our website wasn't converting. Taylor completely transformed our digital presence with a stunning new website that achieved a perfect Semrush score of 100%. The impact was immediate—our ad return multiplied substantially, and we're now seeing conversion rates we never thought possible. The attention to detail, SEO optimization, and user experience design has been absolutely game-changing for our business."
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-light">
                  <div>
                    <p className="font-bold text-forest text-lg">Sarah Mitchell</p>
                    <p className="text-ash text-sm">Managing Director</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-forest">Elevate Safety Solutions</p>
                    <div className="flex gap-1 mt-1 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Aurix Recovery Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-2 border-ash/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-forest/5 to-transparent rounded-bl-full"></div>

              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <svg className="w-12 h-12 text-forest/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-ash text-lg leading-relaxed mb-6">
                  "Working with Avaris Marketing was exceptional from start to finish. Taylor took the time to truly understand our industry and translated our complex industrial processes into a sleek, modern website that commands authority. The design perfectly balances technical sophistication with accessibility, helping us establish credibility with enterprise clients. Since launch, we've seen a significant increase in qualified leads and our brand perception has elevated tremendously. This investment has paid for itself many times over."
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-light">
                  <div>
                    <p className="font-bold text-forest text-lg">Marcus Chen</p>
                    <p className="text-ash text-sm">Chief Operations Officer</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-forest">Aurix Recovery</p>
                    <div className="flex gap-1 mt-1 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
