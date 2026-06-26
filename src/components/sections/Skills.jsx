import { motion } from "framer-motion";
import portfolio from "../../data/portfolio";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mt-5"
        >
          Technologies and tools I use to build modern web applications.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {portfolio.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>

                <span className="text-cyan-400 font-bold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-cyan-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;