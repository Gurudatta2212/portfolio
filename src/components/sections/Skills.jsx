import { motion } from "framer-motion";
import portfolio from "../../data/portfolio";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSupabase,
  SiCplusplus,
} from "react-icons/si";

const icons = {
  HTML: <FaHtml5 className="text-orange-500 text-4xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-4xl" />,
  JavaScript: <FaJs className="text-yellow-400 text-4xl" />,
  React: <FaReact className="text-cyan-400 text-4xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-4xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-4xl" />,
  Supabase: <SiSupabase className="text-green-400 text-4xl" />,
  Git: <FaGitAlt className="text-orange-500 text-4xl" />,
  GitHub: <FaGithub className="text-white text-4xl" />,
  Java: <FaJava className="text-red-500 text-4xl" />,
  Python: <FaPython className="text-yellow-400 text-4xl" />,
  "C++": <SiCplusplus className="text-blue-500 text-4xl" />,
};

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-8">
            Technologies and tools I use to build modern, responsive and
            scalable web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {portfolio.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-slate-900/80 backdrop-blur-md rounded-3xl border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 p-6"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                {icons[skill.name]}
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold text-center">
                {skill.name}
              </h3>

              {/* Percentage */}
              <p className="text-center text-cyan-400 font-bold mt-2">
                {skill.level}%
              </p>

              {/* Progress */}
              <div className="mt-6 h-3 bg-slate-700 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
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