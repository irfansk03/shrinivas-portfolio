import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FileSpreadsheet,
  Presentation,
  FileText,
  BarChart3,
  Target,
  MessageSquare,
  Sparkles,
  Bot,
} from 'lucide-react';

const tools = [
  { name: 'Microsoft Excel', icon: FileSpreadsheet, color: 'from-green-500 to-green-700' },
  { name: 'Microsoft PowerPoint', icon: Presentation, color: 'from-orange-500 to-red-500' },
  { name: 'Microsoft Word', icon: FileText, color: 'from-blue-500 to-blue-700' },
  { name: 'Power BI', icon: BarChart3, color: 'from-yellow-500 to-amber-600' },
  { name: 'HubSpot', icon: Target, color: 'from-orange-400 to-orange-600' },
  { name: 'ChatGPT', icon: MessageSquare, color: 'from-emerald-500 to-teal-600' },
  { name: 'Google Gemini', icon: Sparkles, color: 'from-blue-400 to-indigo-500' },
  { name: 'Claude', icon: Bot, color: 'from-amber-500 to-orange-500' },
];

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-sky" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex flex-col items-center gap-3 group cursor-default border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.07 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
                >
                  <Icon size={26} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700 text-center leading-tight">
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
