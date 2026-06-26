import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import portfolio from "../../data/portfolio";

function Contact() {
  const { contact } = portfolio;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

      console.log("EMAILJS BUTTON CLICKED");

    setLoading(true);

    emailjs
      .send(
        "service_8ftjwzj",
        "template_zqgqebc",
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        "VymiXAX1RF3CNDsR2"
      )
      .then(() => {
        alert("✅ Thank you! Your message has been sent successfully.");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
  console.error(error);

  alert("❌ Failed to send message.");

  setLoading(false);
});

};

return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6">

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
            Have a project in mind or an opportunity for me?
            Feel free to send me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 mt-16 items-stretch">

          {/* Left */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-800 rounded-3xl border border-slate-700 p-8"
          >
            <h3 className="text-3xl font-bold">
              Let's Connect 👋
            </h3>

            <p className="text-slate-400 mt-5 leading-8">
              I'm always available for internships, freelance work,
              collaborations, and full-time opportunities.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-700 rounded-2xl p-4 hover:border-cyan-400 transition">
                <Mail className="text-cyan-400" />
                <span>{contact.email}</span>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-700 rounded-2xl p-4 hover:border-cyan-400 transition">
                <Phone className="text-cyan-400" />
                <span>{contact.phone}</span>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-700 rounded-2xl p-4 hover:border-cyan-400 transition">
                <MapPin className="text-cyan-400" />
                <span>{contact.location}</span>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-700 rounded-2xl p-4 hover:border-cyan-400 transition">
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
          <motion.form
            onSubmit={sendEmail}
            whileHover={{ y: -5 }}
            className="bg-slate-800 rounded-3xl border border-slate-700 p-8 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="👤 Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-950/70 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              placeholder="📧 Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-950/70 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />

            <input
              type="text"
              name="subject"
              placeholder="📝 Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full bg-slate-950/70 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="💬 Your Message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-950/70 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 resize-none focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;