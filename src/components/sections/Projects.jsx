import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import portfolio from "../../data/portfolio";

import smartIT from "../../assets/images/projects/smart-it.png";
import savi from "../../assets/images/projects/savi.png";

const images = {
  "smart-it.png": smartIT,
  "savi.png": savi,
};

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto leading-8">
            A collection of projects that demonstrate my skills in frontend
            development, backend development, AI, IoT, and modern web
            technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {portfolio.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={images[project.image]}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 text-slate-400 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-7">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-cyan-500 text-cyan-400 bg-cyan-500/10 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-3 rounded-xl font-semibold transition"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-2 bg-slate-700 text-slate-400 px-5 py-3 rounded-xl cursor-not-allowed"
                    >
                      <Github size={18} />
                      Coming Soon
                    </button>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-5 py-3 rounded-xl transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;