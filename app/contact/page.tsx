'use client';

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      title: "Email",
      value: "hello@avarismarketing.com",
      gradient: "from-forest/10 to-ash/10"
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
      title: "Phone",
      value: "+1 (555) 123-4567",
      gradient: "from-ash/10 to-light/20"
    },
    {
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ),
      title: "Location",
      value: "123 Design Street\nCreative City, ST 12345",
      gradient: "from-light/15 to-forest/10"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-forest text-fence py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-ash rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-light rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Start Your Project
          </motion.h1>
          <motion.p
            className="text-2xl text-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tell us about your vision and we'll help you bring it to life. Free consultation and project quotes available.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-fence">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-forest mb-6">Let's Discuss Your Project</h2>
              <p className="text-ash text-lg mb-12 leading-relaxed">
                Have questions about pricing, timelines, or how we work? Want to discuss your specific project needs?
                Reach out and we'll schedule a free consultation to explore how we can help achieve your goals.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start group"
                  >
                    <motion.div
                      className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {info.icon}
                      </svg>
                    </motion.div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-forest mb-1">{info.title}</h3>
                      <p className="text-ash whitespace-pre-line">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-10 rounded-2xl border border-light shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-forest/5 to-transparent rounded-bl-full"></div>

                <form className="space-y-6 relative z-10">
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                    { id: "subject", label: "Subject", type: "text", placeholder: "How can we help?" }
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor={field.id} className="block text-sm font-semibold text-forest mb-2">
                        {field.label}
                      </label>
                      <motion.input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        animate={{
                          scale: focusedField === field.id ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        className="w-full px-4 py-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-semibold text-forest mb-2">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={5}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      animate={{
                        scale: focusedField === "message" ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-full px-4 py-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest resize-none transition-all"
                      placeholder="Tell us about your project..."
                    ></motion.textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-forest text-fence py-4 rounded-lg font-semibold hover:bg-forest/90 transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-light/20 to-fence relative overflow-hidden">
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
            className="text-4xl font-bold text-forest mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Quick Response Times
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-ash mb-8 leading-relaxed">
              We typically respond to all inquiries within 24 hours during business days.<br/>
              For urgent matters, feel free to call us directly.
            </p>
            <p className="text-ash text-lg">
              Monday - Friday: 9:00 AM - 6:00 PM EST<br/>
              Weekend inquiries are answered first thing Monday morning
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
