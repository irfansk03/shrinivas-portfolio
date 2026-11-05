import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Winner at Business Tech Conclave',
    description: 'Recognized for outstanding performance and innovative business solutions.',
  },
  {
    icon: Award,
    title: 'AMUL Internship – Market Research & Competitor Analysis',
    description: 'Successfully completed a summer internship focused on market research, competitor analysis, and distribution network optimization.',
  },
  {
    icon: Trophy,
    title: 'Analytical & Data Interpretation Skills',
    description: 'Developed strong analytical capabilities through hands-on projects in market data analysis and consumer research.',
  },
];

const certifications = [
  {
    title: 'Coursera Professional Learning Programs',
    issuer: 'Coursera',
  },
  {
    title: 'Generative AI Applications for Business & Marketing',
    issuer: 'Professional Certification',
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-sky" />
        </motion.div>

        {/* Achievements */}
        <div className="mb-16">
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Trophy size={22} className="text-amber-500" />
            Achievements
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group border-l-4 border-l-amber-400"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 shadow-md">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <Award size={22} className="text-accent" />
            Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.12 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-sky flex items-center justify-center shadow-md flex-shrink-0">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-1">{cert.title}</h4>
                    <p className="text-gray-500 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
