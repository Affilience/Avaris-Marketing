import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Web Design Agency",
  description: "Explore our latest web design and development projects showcasing creativity and innovation.",
};

export default function Portfolio() {
  const projects = [
    {
      title: "Modern E-Commerce Platform",
      category: "E-Commerce",
      description: "A sleek online store with seamless shopping experience and integrated payment solutions.",
      tags: ["Next.js", "Stripe", "Tailwind CSS"]
    },
    {
      title: "Corporate Website Redesign",
      category: "Corporate",
      description: "Complete brand refresh with modern design and improved user experience.",
      tags: ["React", "CMS", "SEO Optimization"]
    },
    {
      title: "Restaurant Booking System",
      category: "Hospitality",
      description: "Custom reservation platform with real-time availability and customer management.",
      tags: ["Full-Stack", "Database", "API Integration"]
    },
    {
      title: "Creative Portfolio Site",
      category: "Portfolio",
      description: "Stunning visual showcase for a professional photographer with gallery features.",
      tags: ["Animation", "Responsive", "Performance"]
    },
    {
      title: "SaaS Landing Page",
      category: "Tech Startup",
      description: "High-converting landing page with compelling messaging and clear call-to-actions.",
      tags: ["Conversion Focused", "A/B Testing", "Analytics"]
    },
    {
      title: "Non-Profit Organization",
      category: "Non-Profit",
      description: "Mission-driven website with donation integration and volunteer management.",
      tags: ["Accessibility", "Donation Gateway", "Content Rich"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-forest text-fence py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-light">
            A showcase of our recent work and successful partnerships
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fence">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg border border-light overflow-hidden hover:border-ash transition-all hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-forest to-ash"></div>
                <div className="p-6">
                  <div className="text-sm text-ash mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-forest mb-3">{project.title}</h3>
                  <p className="text-ash mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-light/50 text-forest rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-forest mb-6">Like What You See?</h2>
          <p className="text-xl text-ash mb-8">
            Let's create something amazing together
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forest text-fence px-10 py-4 rounded-md font-semibold hover:bg-forest/90 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
