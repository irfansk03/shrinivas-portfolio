import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const contributions = [
  'Conducted territory-wise product consumption analysis.',
  'Assessed competitor market positioning and pricing strategies.',
  'Identified distribution gaps and sales improvement opportunities.',
  'Generated actionable recommendations for market expansion.',
];

const tools = [
  'Market Research',
  'Competitor Analysis',
  'MS Excel',
  'PowerPoint',
  'Data Analysis',
  'Distribution Mapping',
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [3, -3]);
  const rotateY = useTransform(mouseX, [-150, 150], [-3, 3]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Project</h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-sky" />
        </motion.div>

        {/* Project Card */}
        <motion.div
          ref={cardRef}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="rounded-3xl p-[2px] bg-gradient-to-br from-accent via-sky to-accent shadow-2xl"
          >
            <div className="bg-white rounded-[22px] overflow-hidden">
              {/* Header with decorative SVG */}
              <div className="relative bg-gradient-to-br from-navy/5 to-accent/5 p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4">
                      Research Project
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Market Consumption & Distribution Analysis
                    </h3>
                    <p className="text-lg text-accent font-medium">AMUL (2026)</p>
                  </div>

                  {/* Decorative SVG */}
                  <div className="hidden md:block flex-shrink-0">
                    <svg
                      className="w-40 h-32"
                      viewBox="0 0 160 128"
                      fill="none"
                    >
                      {/* Bar chart */}
                      <rect x="10" y="70" width="16" height="48" rx="3" fill="#2563eb" opacity="0.6" className="float-animation" />
                      <rect x="32" y="45" width="16" height="73" rx="3" fill="#38bdf8" opacity="0.5" className="float-animation-delay" />
                      <rect x="54" y="55" width="16" height="63" rx="3" fill="#2563eb" opacity="0.4" className="float-animation-delay-2" />
                      <rect x="76" y="35" width="16" height="83" rx="3" fill="#38bdf8" opacity="0.6" className="float-animation" />

                      {/* Network nodes */}
                      <circle cx="120" cy="30" r="8" fill="#2563eb" opacity="0.3" />
                      <circle cx="145" cy="50" r="6" fill="#38bdf8" opacity="0.4" />
                      <circle cx="115" cy="65" r="5" fill="#2563eb" opacity="0.25" />
                      <circle cx="140" cy="80" r="7" fill="#38bdf8" opacity="0.35" />
                      <line x1="120" y1="30" x2="145" y2="50" stroke="#2563eb" strokeWidth="1" opacity="0.2" />
                      <line x1="145" y1="50" x2="115" y2="65" stroke="#38bdf8" strokeWidth="1" opacity="0.2" />
                      <line x1="115" y1="65" x2="140" y2="80" stroke="#2563eb" strokeWidth="1" opacity="0.2" />
                      <line x1="120" y1="30" x2="115" y2="65" stroke="#38bdf8" strokeWidth="1" opacity="0.15" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-8">
                {/* Overview */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Project Overview</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A market research project focused on territory-wise product consumption,
                    competitor positioning, pricing strategies, and distribution opportunities.
                  </p>
                </div>

                {/* Key Contributions */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Contributions</h4>
                  <div className="space-y-3">
                    {contributions.map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-3 items-start"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills & Tools */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Skills & Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-gray-400 text-xs italic">
                  *Visualizations are illustrative and do not represent actual research data.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
