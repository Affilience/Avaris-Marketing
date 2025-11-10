import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Web Design Agency",
  description: "Get in touch with our team to discuss your next web design project.",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="bg-forest text-fence py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-light">
            Ready to start your project? We'd love to hear from you
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fence">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-forest mb-6">Get In Touch</h2>
              <p className="text-ash text-lg mb-8 leading-relaxed">
                Whether you have a question about our services, pricing, or anything else,
                our team is ready to answer all your questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-forest mb-1">Email</h3>
                    <p className="text-ash">hello@youragency.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-forest mb-1">Phone</h3>
                    <p className="text-ash">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-forest mb-1">Location</h3>
                    <p className="text-ash">123 Design Street<br/>Creative City, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-light">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-forest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-forest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-forest mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-forest mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest text-fence py-4 rounded-md font-semibold hover:bg-forest/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-forest mb-4">Business Hours</h2>
          <p className="text-lg text-ash mb-6">
            Monday - Friday: 9:00 AM - 6:00 PM<br/>
            Saturday: 10:00 AM - 4:00 PM<br/>
            Sunday: Closed
          </p>
          <p className="text-ash">
            We typically respond to inquiries within 24 hours during business days
          </p>
        </div>
      </section>
    </div>
  );
}
