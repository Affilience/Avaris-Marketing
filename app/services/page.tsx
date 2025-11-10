import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Web Design Agency",
  description: "Comprehensive web design and development services tailored to your business needs.",
};

export default function Services() {
  const services = [
    {
      title: "Custom Web Design",
      description: "Unique, visually stunning designs that reflect your brand identity and captivate your audience.",
      features: [
        "Responsive design for all devices",
        "User experience (UX) optimization",
        "Brand-aligned visual identity",
        "Interactive prototypes"
      ]
    },
    {
      title: "Web Development",
      description: "Robust, scalable websites built with modern technologies and best practices.",
      features: [
        "React, Next.js, and modern frameworks",
        "Performance optimization",
        "SEO-friendly architecture",
        "Secure and maintainable code"
      ]
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online store development with seamless shopping experiences.",
      features: [
        "Custom shopping cart integration",
        "Payment gateway setup",
        "Inventory management",
        "Order tracking systems"
      ]
    },
    {
      title: "CMS Integration",
      description: "Easy-to-use content management systems that put you in control of your website.",
      features: [
        "WordPress, Contentful, or custom CMS",
        "Training and documentation",
        "Simple content updates",
        "Media library management"
      ]
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support to keep your website running smoothly and securely.",
      features: [
        "Regular updates and backups",
        "Security monitoring",
        "Performance optimization",
        "Technical support"
      ]
    },
    {
      title: "Digital Strategy",
      description: "Data-driven strategies to help your website achieve your business goals.",
      features: [
        "Analytics setup and reporting",
        "Conversion optimization",
        "User behavior analysis",
        "Growth recommendations"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-forest text-fence py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-light">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fence">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-light hover:border-ash transition-colors">
                <h2 className="text-3xl font-bold text-forest mb-4">{service.title}</h2>
                <p className="text-ash text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-ash">
                      <svg className="w-6 h-6 text-forest mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-forest mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-ash mb-8">
            Let's discuss how we can help bring your project to life
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forest text-fence px-10 py-4 rounded-md font-semibold hover:bg-forest/90 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
