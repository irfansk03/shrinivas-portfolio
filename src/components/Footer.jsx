import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark relative">
      {/* Top gradient divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">Shrinivas Hanegave</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Aspiring Marketing Professional with expertise in market research, lead generation,
              and business development. MBA Marketing from Sri Balaji University, Pune.
            </p>
            <a
              href="mailto:Shrinivashanegave139@gmail.com"
              className="inline-flex items-center gap-2 text-accent hover:text-sky transition-colors text-sm"
            >
              <Mail size={16} />
              Shrinivashanegave139@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>Shrinivashanegave139@gmail.com</p>
              <p>+91 9577082424</p>
              <p>Pimpri-Chinchwad, Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Shrinivas Hanegave. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-accent group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
