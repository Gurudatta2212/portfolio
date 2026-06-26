import { motion } from "framer-motion";
import portfolio from "../../data/portfolio";

function About() {
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
          <h2 className="text-4xl font-bold text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
            {portfolio.personal.about}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
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
                y: -12,
                scale: 1.04,
              }}
              className="bg-slate-800 rounded-2xl p-7 border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              <h3 className="text-cyan-400 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-slate-300 mt-5 leading-7">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;