import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';

const FloatingChart = () => (
  <svg className="w-20 h-20 float-animation" viewBox="0 0 80 80" fill="none">
    <rect x="10" y="40" width="12" height="30" rx="3" fill="#2563eb" opacity="0.7" />
    <rect x="26" y="25" width="12" height="45" rx="3" fill="#38bdf8" opacity="0.7" />
    <rect x="42" y="15" width="12" height="55" rx="3" fill="#2563eb" opacity="0.5" />
    <rect x="58" y="30" width="12" height="40" rx="3" fill="#38bdf8" opacity="0.6" />
  </svg>
);

const FloatingPie = () => (
  <svg className="w-16 h-16 float-animation-delay" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="28" stroke="#2563eb" strokeWidth="3" opacity="0.3" />
    <path d="M32 4a28 28 0 0 1 24.25 14L32 32V4z" fill="#2563eb" opacity="0.6" />
    <path d="M56.25 18A28 28 0 0 1 32 60V32l24.25-14z" fill="#38bdf8" opacity="0.5" />
  </svg>
);

const FloatingTrend = () => (
  <svg className="w-24 h-14 float-animation-delay-2" viewBox="0 0 96 56" fill="none">
    <polyline
      points="8,48 24,32 40,36 56,16 72,24 88,8"
      stroke="#2563eb"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
    <circle cx="88" cy="8" r="4" fill="#38bdf8" opacity="0.8" />
  </svg>
);

const Hero = () => {
  const headingWords = "Turning Market Insights Into Business Opportunities.".split(' ');

  return (
    <section id="home" className="relative min-h-screen flex items-center animated-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-accent/30 rounded-full float-animation" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-sky/20 rounded-full float-animation-delay" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent/20 rounded-full float-animation-delay-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="text-accent font-semibold text-lg mb-3 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm Shrinivas Hanegave
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-3 ${
                    ['Market', 'Insights', 'Business', 'Opportunities.'].includes(word)
                      ? 'gradient-text'
                      : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-lg text-accent/80 font-medium mb-4 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              MBA Marketing | Market Research | Lead Generation
            </motion.p>

            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              An aspiring marketing professional with practical experience in market research,
              competitor analysis, sales and distribution analysis, and consumer insights.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-6 py-3 bg-accent text-white rounded-xl font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:bg-accent/90 transition-all duration-300 flex items-center gap-2"
              >
                Explore My Profile
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Photo with Floating Analytics */}
          <motion.div
            className="flex flex-col items-center justify-center relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square max-w-full">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/20 via-sky/20 to-transparent blur-2xl -z-10" />

              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-3xl p-2 bg-gradient-to-br from-white via-sky-light/30 to-accent/20 shadow-2xl border border-white/60 backdrop-blur-sm overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Shrinivas Hanegave - MBA Marketing Professional"
                  className="w-full h-full object-cover object-top rounded-2xl shadow-inner hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle dark gradient overlay at bottom for badge contrast */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none rounded-b-2xl" />

                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <p className="text-sm font-bold tracking-wide">Shrinivas Hanegave</p>
                  <p className="text-xs text-sky-light font-medium">MBA Marketing (2025-27)</p>
                </div>
              </div>

              {/* Floating Element 1: Bar Chart badge (Top-Right) */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 float-animation hidden sm:flex z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FloatingChart />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">FMCG Research</span>
                  <span className="text-xs font-bold text-gray-800">Consumption Trends</span>
                </div>
              </motion.div>

              {/* Floating Element 2: AMUL Intern badge (Bottom-Left) */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 float-animation-delay z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-amul-red font-bold text-xs">
                  AMUL
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Internship '26</span>
                  <span className="text-xs font-bold text-gray-800">Market & Competitor Intel</span>
                </div>
              </motion.div>

              {/* Floating Element 3: Trend pill (Middle-Right) */}
              <motion.div
                className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 float-animation-delay-2 hidden md:flex z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                <FloatingTrend />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="text-accent scroll-indicator" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
