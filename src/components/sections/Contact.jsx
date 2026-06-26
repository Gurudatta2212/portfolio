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
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-8">
            I'm always open to internships, full-time opportunities,
            collaborations, and exciting development projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Contact Information */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 p-8"
          >
            <h3 className="text-3xl font-bold">
              Let's Connect 👋
            </h3>

            <p className="text-slate-400 mt-5 leading-8">
              Feel free to contact me if you have an internship,
              job opportunity, freelance project or just want to connect.
            </p>

            <div className="mt-10 space-y-5">

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-black transition"
              >
                <Mail className="text-cyan-400" />
                <span>{contact.email}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-black transition"
              >
                <Phone className="text-cyan-400" />
                <span>{contact.phone}</span>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900">
                <MapPin className="text-cyan-400" />
                <span>{contact.location}</span>
              </div>

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-black transition"
              >
                <FaGithub className="text-xl text-cyan-400" />
                <span>GitHub Profile</span>
              </a>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 p-8 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold">
              Ready to Work Together?
            </h3>

            <p className="text-slate-400 mt-6 leading-8">
              I'm passionate about building modern, responsive and
              scalable web applications using React.js, Tailwind CSS,
              JavaScript and Node.js.

              <br />
              <br />

              If you're looking for a dedicated Frontend Developer or
              an enthusiastic Computer Engineering student for your team,
              I'd love to hear from you.
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-10 inline-flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition duration-300 text-black font-bold px-8 py-4 rounded-xl shadow-lg"
            >
              📧 Send Email
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;