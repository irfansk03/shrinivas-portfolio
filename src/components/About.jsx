import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, GraduationCap, Briefcase, TrendingUp, Users, BarChart3 } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, text: 'MBA in Marketing from Sri Balaji University, Pune (Balaji Institute of Technology & Management)' },
  { icon: BarChart3, text: 'BCA background providing a strong tech-analytical foundation for data-driven marketing' },
  { icon: Briefcase, text: 'Summer internship at Anand Milk Union Limited (AMUL) – hands-on market research & competitor analysis' },
  { icon: TrendingUp, text: 'Passionate about consumer behavior analysis and market research methodologies' },
  { icon: Users, text: 'Skilled in lead generation, prospect research, and business development outreach' },
  { icon: BarChart3, text: 'Experienced with marketing analytics tools – Excel, Power BI, and HubSpot' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-sky" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Profile Card */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent/10 float-animation" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-sky/10 float-animation-delay" />
              <div className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-accent/15 float-animation-delay-2" />

              {/* Main card */}
              <div className="glass rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden border border-white/70">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-sky/5" />
                <div className="relative text-center">
                  <div className="relative w-36 h-36 mx-auto mb-6">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent to-sky animate-spin-slow opacity-75 blur-[2px]" />
                    <img
                      src="/profile.jpg"
                      alt="Shrinivas Hanegave"
                      className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full shadow" title="Available for opportunities" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Shrinivas Hanegave</h3>
                  <p className="text-accent font-medium mt-1">MBA Marketing (2025–2027)</p>
                  <p className="text-gray-500 text-sm mt-2">Pimpri-Chinchwad, Pune, Maharashtra</p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['Market Research', 'Lead Generation', 'Business Development', 'FMCG Analytics'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Introduction */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aspiring Marketing Professional
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I am an MBA Marketing student at Sri Balaji University, Pune, with a BCA background
              that gives me a unique blend of technical and business acumen. My internship at
              Anand Milk Union Limited (AMUL) provided hands-on experience in FMCG market research,
              competitor analysis, and distribution network optimization.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I am passionate about transforming raw market data into actionable business insights.
              My interests span consumer behavior analysis, lead generation strategies, and
              leveraging marketing analytics to drive business growth.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle size={14} className="text-accent" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
