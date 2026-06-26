import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import portfolio from "../../data/portfolio";

function Contact() {
  const { contact } = portfolio;

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            I'm always open to discussing internships, job opportunities,
            collaborations, or exciting projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Left */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-800 rounded-3xl border border-slate-700 p-8"
          >
            <h3 className="text-3xl font-bold">
              Let's Connect 👋
            </h3>

            <p className="text-slate-400 mt-5 leading-8">
              Feel free to contact me for internships, full-time
              opportunities, freelance work, or collaborations.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span>{contact.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <span>{contact.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span>{contact.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-xl" />
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400"
                >
                  GitHub Profile
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-800 rounded-3xl border border-slate-700 p-8 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold">
              Ready to Work Together?
            </h3>

            <p className="text-slate-400 mt-6 leading-8">
              I'm passionate about building modern web applications
              using React, Tailwind CSS, Node.js, and other modern
              technologies. Let's build something amazing together.
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-10 inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-7 py-3 rounded-xl transition"
            >
              Send Email
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;