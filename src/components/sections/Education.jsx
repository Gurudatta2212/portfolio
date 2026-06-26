import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import portfolio from "../../data/portfolio";

function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            My academic journey that built the foundation for my technical
            skills and passion for software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-slate-800"></div>

          {portfolio.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative flex gap-8 mb-12"
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex w-12 h-12 rounded-full bg-cyan-500 items-center justify-center z-10 shadow-lg shadow-cyan-500/30">
                <GraduationCap size={22} className="text-black" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="flex-1 bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {edu.degree}
                    </h3>

                    <p className="text-cyan-400 mt-3">
                      {edu.college}
                    </p>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-3">

                    <span className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full text-slate-300">
                      <Calendar size={16} />
                      {edu.duration}
                    </span>

                    <span className="bg-cyan-500/10 border border-cyan-500 text-cyan-400 px-4 py-2 rounded-full font-semibold">
                      {edu.percentage}
                    </span>

                  </div>

                </div>

                <p className="mt-6 text-slate-300 leading-8">
                  {edu.description}
                </p>

              </motion.div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;