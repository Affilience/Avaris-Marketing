'use client';

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Custom Web Design",
      description: "Visually compelling designs tailored to your brand and target audience. We create interfaces that not only look professional but guide users toward taking action, whether that's making a purchase, filling out a form, or getting in touch.",
      features: [
        "Mobile-responsive design across all devices",
        "User experience (UX) research and optimization",
        "Brand-consistent visual identity",
        "Interactive prototypes for early feedback"
      ],
      icon: "🎨",
      gradient: "from-forest/5 to-ash/10"
    },
    {
      title: "Web Development",
      description: "Clean, efficient code that powers fast-loading, secure websites. We build with modern frameworks and follow industry standards to ensure your site performs reliably and scales as your business grows.",
      features: [
        "React, Next.js, and contemporary frameworks",
        "Speed optimization for better user experience",
        "SEO-optimized technical foundation",
        "Secure, maintainable codebase"
      ],
      icon: "💻",
      gradient: "from-ash/5 to-light/15"
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online store development designed to maximize conversions and streamline operations. From product catalogs to secure checkout, we build e-commerce experiences that make buying easy for your customers.",
      features: [
        "Shopping cart and checkout optimization",
        "Secure payment gateway integration",
        "Product and inventory management tools",
        "Order processing and tracking systems"
      ],
      icon: "🛒",
      gradient: "from-light/10 to-forest/10"
    },
    {
      title: "CMS Integration",
      description: "User-friendly content management systems that empower you to update your website independently. We provide training and documentation so you can manage your content with confidence.",
      features: [
        "WordPress, Contentful, or headless CMS options",
        "Comprehensive training and support",
        "Intuitive content editing interfaces",
        "Media organization and management"
      ],
      icon: "📝",
      gradient: "from-forest/10 to-light/10"
    },
    {
      title: "Website Maintenance",
      description: "Ongoing technical support to keep your website secure, fast, and functioning optimally. Regular maintenance prevents issues before they affect your visitors and ensures your site stays current.",
      features: [
        "Scheduled updates and automated backups",
        "Proactive security monitoring",
        "Continuous performance improvements",
        "Priority technical support when you need it"
      ],
      icon: "🔧",
      gradient: "from-ash/10 to-forest/5"
    },
    {
      title: "Digital Strategy & Analytics",
      description: "Data-informed strategies that align your website with your business objectives. We help you understand your visitors, identify opportunities for improvement, and make decisions based on real user behavior.",
      features: [
        "Google Analytics configuration and tracking",
        "Conversion rate optimization strategies",
        "User behavior insights and recommendations",
        "Actionable reports to guide decisions"
      ],
      icon: "📊",
      gradient: "from-light/15 to-ash/10"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-forest text-fence py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-ash rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-light rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-2xl text-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive solutions to bring your digital vision to life
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-fence">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-gradient-to-br ${service.gradient} p-10 rounded-2xl border border-light shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-forest/5 to-transparent rounded-bl-full"></div>

                <motion.div
                  className="text-6xl mb-6 relative z-10"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                <h2 className="text-3xl font-bold text-forest mb-4 relative z-10">{service.title}</h2>
                <p className="text-ash text-lg mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start text-ash"
                    >
                      <motion.svg
                        className="w-6 h-6 text-forest mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-2xl text-ash mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how we can help bring your project to life
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
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
