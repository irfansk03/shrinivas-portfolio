import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'MBA – Marketing',
    institution: 'Sri Balaji University, Pune',
    college: 'Balaji Institute of Technology & Management',
    year: '2025–2027',
    score: '65.09%',
    icon: GraduationCap,
    highlight: true,
  },
  {
    degree: 'BCA – Computer Application',
    institution: 'Savitribai Phule University, Pune',
    college: 'SM Joshi College, Pune',
    year: '2025',
    score: '56.95%',
    icon: GraduationCap,
    highlight: false,
  },
  {
    degree: 'Class XII – Science',
    institution: 'Maharashtra State Board, Amravati',
    college: 'ND Khole Junior College, Washim',
    year: '2020',
    score: '83.54%',
    icon: BookOpen,
    highlight: false,
  },
  {
    degree: 'Class X – General',
    institution: 'Maharashtra State Board, Latur',
    college: 'Vivekanand Madhyamik School, Hadgaon',
    year: '2018',
    score: '80.4%',
    icon: BookOpen,
    highlight: false,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-sky" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central timeline line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-sky to-accent/20" />

          <div className="space-y-8 md:space-y-12">
            {educationData.map((edu, i) => {
              const Icon = edu.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6, type: 'spring', stiffness: 80 }}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}>
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 group">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-md ${
                            edu.highlight
                              ? 'bg-gradient-to-br from-accent to-sky'
                              : 'bg-gradient-to-br from-gray-600 to-gray-800'
                          }`}
                        >
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="text-base font-bold text-gray-900">{edu.degree}</h3>
                            <span className="flex-shrink-0 px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                              {edu.year}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 font-medium">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.college}</p>
                          <div className="mt-3 inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                            Score: {edu.score}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-accent shadow-md z-10" />

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
