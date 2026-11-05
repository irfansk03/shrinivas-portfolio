import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Building2 } from 'lucide-react';

const responsibilities = [
  'Conducted market research and area-wise daily product consumption analysis across assigned territories.',
  'Performed competitor analysis covering pricing, product mix, and distribution reach of rival FMCG brands.',
  'Monitored sales and distribution networks to ensure product availability across retail and wholesale outlets.',
  'Mapped distribution gaps and supported the field sales team in achieving monthly targets.',
  'Contributed to NPD strategy by gathering consumer feedback and preparing market intelligence reports.',
];

const skillTags = [
  'Market Research',
  'Competitor Analysis',
  'Distribution Analysis',
  'Consumer Insights',
  'Sales Support',
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-sky" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-sky to-accent/20" />

          {/* Timeline dot */}
          <motion.div
            className="absolute left-0 md:left-8 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-accent to-sky shadow-lg z-10"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            <div className="absolute inset-0 rounded-full pulse-glow" />
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="ml-6 md:ml-20"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7, type: 'spring', stiffness: 80 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              {/* Red accent bar (AMUL branding) */}
              <div className="h-1.5 bg-gradient-to-r from-amul-red to-amul-yellow" />

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={18} className="text-amul-red" />
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Anand Milk Union Limited (AMUL)
                      </h3>
                    </div>
                    <p className="text-lg font-semibold text-accent">
                      Marketing & Research Intern
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      May 2026 – July 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      India
                    </span>
                  </div>
                </div>

                {/* Left red border for responsibilities */}
                <div className="border-l-4 border-amul-red/30 pl-5 space-y-4 mb-6">
                  {responsibilities.map((resp, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.12 }}
                    >
                      <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-amul-red" />
                      <p className="text-gray-700 text-sm leading-relaxed">{resp}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Skills Tags */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  {skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
