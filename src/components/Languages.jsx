import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Heart, Map, Compass, Car } from 'lucide-react';

const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Marathi', level: 'Native' },
];

const interests = [
  { name: 'Travelling', icon: Map },
  { name: 'Exploring New Things', icon: Compass },
  { name: 'Driving', icon: Car },
];

const Languages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-sky flex items-center justify-center">
                <Globe size={20} className="text-white" />
              </div>
              Languages
            </h3>

            <div className="space-y-4">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-accent/5 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className="text-base font-semibold text-gray-800">{lang.name}</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                <Heart size={20} className="text-white" />
              </div>
              Interests
            </h3>

            <div className="space-y-4">
              {interests.map((interest, i) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.name}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-rose-50 transition-colors duration-200"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-rose-500" />
                    </div>
                    <span className="text-base font-semibold text-gray-800">{interest.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
