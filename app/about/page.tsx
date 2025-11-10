'use client';

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedValue({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-fence p-10 rounded-2xl border border-light shadow-lg hover:shadow-2xl transition-all"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-forest text-fence py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 bg-ash rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-light rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-2xl text-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate designers and developers dedicated to bringing your vision to life
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-fence relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-forest mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <div className="space-y-8 text-xl text-ash leading-relaxed">
            {[
              "We started with a simple belief: every business deserves a website that not only looks beautiful but performs exceptionally. What began as a small team of passionate designers and developers has grown into a full-service digital agency trusted by clients across industries.",
              "Our approach combines strategic thinking with creative excellence. We don't just build websites—we craft digital experiences that connect with your audience and drive real results for your business.",
              "Every project we take on is an opportunity to push boundaries, explore new possibilities, and deliver something truly remarkable. We're not satisfied with good enough; we strive for exceptional."
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-6 border-l-4 border-ash/30"
              >
                {text}
              </motion.p>
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

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-5xl font-bold text-forest text-center mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Excellence",
                description: "We hold ourselves to the highest standards in everything we do, from initial concept to final delivery.",
                icon: "✨"
              },
              {
                title: "Collaboration",
                description: "Your success is our success. We work closely with you as partners throughout the entire process.",
                icon: "🤝"
              },
              {
                title: "Innovation",
                description: "We stay ahead of industry trends and continuously explore new technologies to deliver cutting-edge solutions.",
                icon: "💡"
              },
              {
                title: "Transparency",
                description: "Clear communication, honest timelines, and straightforward pricing—no surprises, just great work.",
                icon: "🔍"
              }
            ].map((value, index) => (
              <AnimatedValue key={index} index={index}>
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-3xl font-semibold text-forest mb-4">{value.title}</h3>
                <p className="text-ash leading-relaxed text-lg">
                  {value.description}
                </p>
              </AnimatedValue>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
