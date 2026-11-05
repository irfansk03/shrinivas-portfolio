import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-sky" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            I'm open to internship opportunities, collaborations, and conversations about marketing
            and business development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:Shrinivashanegave139@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-sky transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <p className="text-sm font-medium">Shrinivashanegave139@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919577082424"
                  className="flex items-center gap-4 text-gray-300 hover:text-sky transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                    <p className="text-sm font-medium">+91 9577082424</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-sm font-medium">Pimpri-Chinchwad, Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="mailto:Shrinivashanegave139@gmail.com"
                  className="px-5 py-2.5 bg-accent text-white rounded-xl font-semibold text-sm hover:bg-accent/90 transition-colors flex items-center gap-2 shadow-lg shadow-accent/20"
                >
                  <Mail size={16} />
                  Email Me
                </a>
                <a
                  href="tel:+919577082424"
                  className="px-5 py-2.5 border border-gray-600 text-gray-300 rounded-xl font-semibold text-sm hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-8">Send a Message</h3>

              {/* 
                NOTE: Replace the formspree URL below with your actual Formspree endpoint.
                Sign up at https://formspree.io to get your form endpoint.
              */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = form.elements.name.value;
                  const email = form.elements.email.value;
                  const subject = form.elements.subject.value;
                  const message = form.elements.message.value;
                  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
                  window.location.href = `mailto:Shrinivashanegave139@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                }}
                className="space-y-5"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-accent to-sky text-white rounded-xl font-semibold text-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Send size={16} />
                  Send Message via Email
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
