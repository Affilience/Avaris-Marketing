'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative bg-gradient-to-br from-forest via-forest to-forest/95 text-fence py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-ash rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-light rounded-full blur-3xl opacity-15"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-ash rounded-full blur-3xl opacity-10"
            animate={{
              x: [-100, 100, -100],
              y: [-50, 50, -50],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(183, 183, 164, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(183, 183, 164, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Decorative geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 border border-ash/20 rounded-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-24 h-24 border-2 border-light/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute top-40 left-1/4 w-2 h-2 bg-ash/40 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-light/30 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-ash/50 rounded-full"></div>
        </div>

        {/* Accent lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-ash/30 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-t from-transparent via-light/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6"
            >
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Transform Your Brand with
                <motion.span
                  className="block text-ash mt-4 bg-clip-text text-transparent bg-gradient-to-r from-ash to-light"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Strategic Web Design
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-light max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Professional web design and development agency specializing in custom websites that drive measurable results. We combine stunning aesthetics with conversion-focused strategies to grow your business online.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/portfolio"
                  className="inline-block bg-fence text-forest px-8 py-4 rounded-lg font-semibold hover:bg-light transition-all shadow-lg hover:shadow-xl"
                >
                  View Our Work
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-ash text-ash px-8 py-4 rounded-lg font-semibold hover:bg-ash hover:text-forest transition-all"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-ash" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-fence relative">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-5xl font-bold text-forest text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Comprehensive Digital Solutions
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Web Design",
                  description: "Professional UI/UX design that elevates your brand identity and creates memorable user experiences. We craft pixel-perfect interfaces that resonate with your target audience and drive engagement across all devices.",
                  icon: "🎨",
                  gradient: "from-forest/10 to-ash/10"
                },
                {
                  title: "Web Development",
                  description: "High-performance websites built with React, Next.js, and modern technologies. Our developers create scalable, SEO-optimized solutions with lightning-fast load times and seamless functionality.",
                  icon: "⚡",
                  gradient: "from-ash/10 to-light/20"
                },
                {
                  title: "Digital Strategy",
                  description: "Data-driven marketing strategies that convert visitors into customers. We analyze user behavior, optimize conversion funnels, and implement proven tactics to maximize your ROI and achieve sustainable growth.",
                  icon: "📊",
                  gradient: "from-light/10 to-forest/10"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`bg-gradient-to-br ${service.gradient} backdrop-blur-sm p-10 rounded-2xl border border-light shadow-lg hover:shadow-2xl transition-all group`}
                >
                  <motion.div
                    className="text-5xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-3xl font-semibold text-forest mb-4 group-hover:text-forest/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-ash leading-relaxed text-lg">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-light/30 to-fence relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                 backgroundSize: '40px 40px'
               }}
          ></div>
        </div>

        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              className="text-5xl font-bold text-forest mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Accelerate Your Business Growth?
            </motion.h2>
            <motion.p
              className="text-2xl text-ash mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Partner with Avaris Marketing to create a high-converting website that amplifies your brand and drives revenue. Let's turn your digital vision into measurable business results.
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
        </AnimatedSection>
      </section>
    </div>
  );
}
