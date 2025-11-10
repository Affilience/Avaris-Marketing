import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Web Design Agency",
  description: "Learn about our passion for creating exceptional digital experiences and our commitment to excellence.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-forest text-fence py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-light">
            Passionate designers and developers dedicated to bringing your vision to life
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fence">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-forest mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-ash leading-relaxed">
            <p>
              We started with a simple belief: every business deserves a website that not only looks beautiful
              but performs exceptionally. What began as a small team of passionate designers and developers
              has grown into a full-service digital agency trusted by clients across industries.
            </p>
            <p>
              Our approach combines strategic thinking with creative excellence. We don't just build websites—we
              craft digital experiences that connect with your audience and drive real results for your business.
            </p>
            <p>
              Every project we take on is an opportunity to push boundaries, explore new possibilities, and
              deliver something truly remarkable. We're not satisfied with good enough; we strive for exceptional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-forest text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-fence p-8 rounded-lg border border-light">
              <h3 className="text-2xl font-semibold text-forest mb-4">Excellence</h3>
              <p className="text-ash leading-relaxed">
                We hold ourselves to the highest standards in everything we do, from initial concept to final delivery.
              </p>
            </div>
            <div className="bg-fence p-8 rounded-lg border border-light">
              <h3 className="text-2xl font-semibold text-forest mb-4">Collaboration</h3>
              <p className="text-ash leading-relaxed">
                Your success is our success. We work closely with you as partners throughout the entire process.
              </p>
            </div>
            <div className="bg-fence p-8 rounded-lg border border-light">
              <h3 className="text-2xl font-semibold text-forest mb-4">Innovation</h3>
              <p className="text-ash leading-relaxed">
                We stay ahead of industry trends and continuously explore new technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-fence p-8 rounded-lg border border-light">
              <h3 className="text-2xl font-semibold text-forest mb-4">Transparency</h3>
              <p className="text-ash leading-relaxed">
                Clear communication, honest timelines, and straightforward pricing—no surprises, just great work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
