import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Target, BarChart3, Sparkles } from 'lucide-react';

const categories = [
  {
    title: 'Marketing & Research',
    icon: TrendingUp,
    color: 'from-accent to-blue-600',
    skills: [
      'Market Research',
      'Market & Competitor Research',
      'Market Consumption Analysis',
      'Consumer Insights',
      'Product Research',
    ],
  },
  {
    title: 'Sales & Business Development',
    icon: Target,
    color: 'from-sky-dark to-sky',
    skills: [
      'Lead Generation',
      'Prospect Research',
      'Lead Qualification',
      'Target Account Research',
      'Outbound Email & LinkedIn Outreach',
      'Sales Support',
      'Distribution Analysis',
      'Client Communication & Follow-ups',
      'Cold Calling & Inside Sales (Basic Knowledge)',
    ],
  },
  {
    title: 'Marketing Tools & Analytics',
    icon: BarChart3,
    color: 'from-indigo-500 to-accent',
    skills: ['MS Excel', 'MS PowerPoint', 'Power BI', 'HubSpot'],
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    color: 'from-violet-500 to-purple-500',
    skills: ['ChatGPT', 'Gemini', 'Claude'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-sky" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400 overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Top gradient border */}
                <div className={`h-1 bg-gradient-to-r ${cat.color}`} />

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 bg-accent/8 text-accent text-sm font-medium rounded-full hover:bg-accent hover:text-white transition-colors duration-200 cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + i * 0.1 + j * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
