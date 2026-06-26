import { motion } from "framer-motion";
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

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mt-5 max-w-2xl mx-auto"
        >
          Here are some of the projects I have worked on using modern web
          technologies and AI/IoT solutions.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {portfolio.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              <img
                src={images[project.image]}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/10 text-cyan-400 border border-cyan-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.demo) && (
                  <div className="flex gap-4 mt-8">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-2 rounded-xl font-semibold"
                      >
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-5 py-2 rounded-xl"
                      >
                        Live Demo
                      </a>
                    )}

                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;