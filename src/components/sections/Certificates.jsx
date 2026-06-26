import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import portfolio from "../../data/portfolio";

function Certificates() {
  return (
    <section
      id="certificates"
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
            My <span className="text-cyan-400">Certificates</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Certifications and training programs that enhanced my technical
            knowledge and practical skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {portfolio.certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              <Award
                size={42}
                className="text-cyan-400 mb-6"
              />

              <h3 className="text-2xl font-bold">
                {certificate.title}
              </h3>

              <p className="text-cyan-400 mt-3">
                {certificate.issuer}
              </p>

              <div className="flex items-center gap-2 mt-3 text-slate-400">
                <Calendar size={16} />
                <span>{certificate.year}</span>
              </div>

              <p className="mt-6 text-slate-300 leading-8">
                {certificate.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;