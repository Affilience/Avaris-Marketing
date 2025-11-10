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
            A dedicated team of designers and developers partnering with businesses to create impactful digital experiences
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
              "At Avaris Marketing, we believe every business deserves a website that not only looks beautiful but performs exceptionally. We're a team of dedicated designers and developers who understand that your website is often the first impression potential customers have of your brand.",
              "Our approach combines strategic thinking with creative execution. We don't just build websites—we craft digital experiences that connect with your target audience and drive measurable results. From the initial discovery phase through launch and beyond, we're invested in your success.",
              "Every project is an opportunity to solve unique challenges and create solutions tailored to your specific business goals. We focus on understanding your industry, your customers, and your competitive landscape to deliver websites that truly make an impact."
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
                title: "Quality Craftsmanship",
                description: "We take pride in delivering clean code, thoughtful design, and attention to detail. Every pixel, every interaction, and every line of code is crafted with care to ensure your website performs flawlessly.",
                icon: "✨"
              },
              {
                title: "True Partnership",
                description: "Your success is our success. We work as an extension of your team, maintaining open communication and involving you in key decisions throughout the entire development process.",
                icon: "🤝"
              },
              {
                title: "Modern Solutions",
                description: "We leverage current technologies and best practices to build fast, secure, and scalable websites. Our commitment to continuous learning ensures your site is built with the tools that matter.",
                icon: "💡"
              },
              {
                title: "Honest Communication",
                description: "Clear timelines, realistic expectations, and straightforward pricing. We believe in transparency at every stage—you'll always know where your project stands and what to expect next.",
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
