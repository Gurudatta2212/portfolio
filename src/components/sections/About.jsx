import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  BookOpen,
  BrainCircuit,
} from "lucide-react";
import portfolio from "../../data/portfolio";


function About() {
  const icons = {
  "Frontend Development": (
    <Code2 className="w-12 h-12 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300" />
  ),

  "Real-World Projects": (
    <Rocket className="w-12 h-12 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
  ),

  "Continuous Learning": (
    <BookOpen className="w-12 h-12 text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300" />
  ),

  "Problem Solving": (
    <BrainCircuit className="w-12 h-12 text-orange-400 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-300" />
  ),
};

  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-center text-slate-400 mt-6 max-w-4xl mx-auto leading-8">
            {portfolio.personal.about}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {portfolio.aboutSection.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
  y: -8,
  scale: 1.03,
}}
            className={`group h-full bg-slate-800/70 backdrop-blur-md rounded-3xl p-8 border border-slate-700/70 hover:-translate-y-2 transition-all duration-300 ${
  index === 0
    ? "hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]"
    : index === 1
    ? "hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(52,211,153,0.2)]"
    : index === 2
    ? "hover:border-violet-400 hover:shadow-[0_0_35px_rgba(167,139,250,0.2)]"
    : "hover:border-orange-400 hover:shadow-[0_0_35px_rgba(251,146,60,0.2)]"
}`}
            >
              <div className="mb-6">
  {icons[item.title]}
</div>

<h3
  className={`text-xl font-semibold transition-colors duration-300 group-hover:text-white ${
    index === 0
      ? "text-cyan-400"
      : index === 1
      ? "text-emerald-400"
      : index === 2
      ? "text-violet-400"
      : "text-orange-400"
  }`}
>
  {item.title}
</h3>

<p className="text-slate-300 mt-4 leading-7">
  {item.description}
</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;