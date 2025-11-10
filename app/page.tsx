import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-forest text-fence py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Crafting Digital
              <span className="block text-ash mt-2">Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-light max-w-3xl mx-auto mb-12 leading-relaxed">
              We design and build stunning websites that elevate your brand and engage your audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="bg-fence text-forest px-8 py-4 rounded-md font-semibold hover:bg-light transition-colors"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="border-2 border-ash text-ash px-8 py-4 rounded-md font-semibold hover:bg-ash hover:text-forest transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fence">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-forest text-center mb-16">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-light">
              <h3 className="text-2xl font-semibold text-forest mb-4">Web Design</h3>
              <p className="text-ash leading-relaxed">
                Beautiful, intuitive designs that capture your brand essence and create lasting impressions
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-light">
              <h3 className="text-2xl font-semibold text-forest mb-4">Development</h3>
              <p className="text-ash leading-relaxed">
                Modern, responsive websites built with cutting-edge technologies for optimal performance
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-light">
              <h3 className="text-2xl font-semibold text-forest mb-4">Strategy</h3>
              <p className="text-ash leading-relaxed">
                Data-driven solutions tailored to meet your business goals and exceed expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-forest mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-ash mb-8">
            Let's collaborate to bring your vision to life
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
