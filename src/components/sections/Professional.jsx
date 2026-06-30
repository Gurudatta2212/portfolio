import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaBriefcase,
  FaTrophy,
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

function Professional() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section
      id="professional"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional{" "}
            <span className="text-cyan-400">
              Journey
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            My technical skills, work experience,
            and achievements in one place.
          </p>
        </motion.div>

        <div className="flex justify-center mt-14">

  <div className="flex bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-full p-2">

    {["skills", "experience", "achievements"].map((tab) => (

      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className="relative px-10 py-3 rounded-full font-semibold capitalize"

      >

        {activeTab === tab && (

          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-cyan-500 rounded-full"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
          />

        )}

        <span
          className={`relative z-10 transition-colors duration-300 ${
            activeTab === tab
              ? "text-black"
              : "text-slate-300"
          }`}
        >

          {tab}

        </span>

      </button>

    ))}

  </div>

</div>
        <AnimatePresence mode="wait">

        {/* ================= Skills ================= */}

{activeTab === "skills" && (
  <motion.div
    key="skills"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -25 }}
    transition={{ duration: 0.35 }}
    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
  >
    {portfolio.skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.05,
        }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="group relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-cyan-400/10 blur-3xl" />

</div>
        <div className="flex justify-center mb-5">

<motion.div
whileHover={{
  rotate: 15,
  scale: 1.15,
  y: -3,
}}
transition={{
type:"spring",
stiffness:350,
damping:12
}}

>

{icons[skill.name]}

</motion.div>

</div>

        <h3 className="text-xl font-semibold text-center">
  {skill.name}
</h3>

<div className="flex justify-center mt-3">

</div>

       <p className="text-center text-cyan-300 text-lg font-bold mt-3">
          {skill.level}%
        </p>

        <div className="mt-6 h-3 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${skill.level}%`,
            }}
            transition={{
              duration: 1,
              delay: index * 0.08,
            }}
            className="
h-full
rounded-full
bg-gradient-to-r
from-cyan-400
via-cyan-300
to-blue-500
shadow-[0_0_18px_rgba(34,211,238,0.7)]
"
          />
        </div>

<div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-400/20 pointer-events-none transition-all duration-500" />

</motion.div>
    ))}
  </motion.div>
)}

{/* ================= Experience ================= */}

{activeTab === "experience" && (
  <motion.div
    key="experience"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -25 }}
    transition={{ duration: 0.35 }}
    className="mt-16 space-y-8"
  >
    {portfolio.experience.map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
        whileHover={{
          y: -5,
          scale: 1.01,
        }}
        className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <FaBriefcase className="text-cyan-400 text-xl" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-cyan-400">
                  {exp.company}
                </p>
              </div>

            </div>
          </div>

          <div className="flex gap-3 flex-wrap">

            <span className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
              {exp.duration}
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-800 border border-cyan-400/20 text-cyan-300 text-xs tracking-wide">
              {exp.type}
            </span>

          </div>

        </div>

        <p className="mt-6 text-slate-300 leading-8">
          {exp.description}
        </p>

      </motion.div>
    ))}
  </motion.div>
)}

{/* ================= Achievements ================= */}

{activeTab === "achievements" && (
  <motion.div
    key="achievements"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -25 }}
    transition={{ duration: 0.35 }}
    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
  >
    {portfolio.achievements.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
        }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.18)] transition-all duration-300"
      >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
          <FaTrophy className="text-yellow-400 text-3xl" />
        </div>

        <h3 className="mt-6 text-xl font-bold">
          {item.title}
        </h3>

        <p className="mt-4 text-slate-400 leading-7">
          {item.description}
        </p>
      </motion.div>
    ))}
  </motion.div>
)}

</AnimatePresence>

      </div>
    </section>
  );
}

export default Professional;