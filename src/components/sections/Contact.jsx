import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import portfolio from "../../data/portfolio";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const { contact } = portfolio;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (status) {
    setStatus("");
}
  };

  const sendEmail = (e) => {
    e.preventDefault();

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
  setStatus("success");

  setForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  setTimeout(() => {
    setStatus("");
  }, 4000);
})
.catch((error) => {
  console.error(error);

  setStatus("error");

  setTimeout(() => {
    setStatus("");
  }, 4000);
})
.finally(() => {
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
            className="bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700 p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition-all duration-300"
          >
            <h3 className="text-3xl font-bold">
              Let's Connect 👋
            </h3>

            <div className="mt-5 inline-flex items-center gap-2 bg-green-500/10 border border-green-500 text-green-400 px-4 py-2 rounded-full">

  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

  Available for Internship

</div>

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

              <a
  href={contact.github}
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-4 bg-slate-900/60 border border-slate-700 rounded-2xl p-4 hover:border-cyan-400 transition"
>
  <FaGithub className="text-cyan-400 text-xl" />
  <span>GitHub Profile</span>
</a>

<div className="flex gap-4 pt-2">

<a
  href={contact.github}
  target="_blank"
  rel="noreferrer"
  title="GitHub"
  aria-label="GitHub Profile"
  className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
>
  <FaGithub />
</a>

  {contact.linkedin && (
    <a
      href={contact.linkedin}
      target="_blank"
      rel="noreferrer"
      title="LinkedIn"
      aria-label="LinkedIn Profile"
      className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"
    >
      <FaLinkedin />
    </a>
  )}

  {contact.instagram && (
    <a
      href={contact.instagram}
      target="_blank"
      rel="noreferrer"
      title="Instagram"
      aria-label="Instagram Profile"
      className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pink-500 hover:text-white transition duration-300"
    >
      <FaInstagram />
    </a>
  )}

</div>
            </div>
          </motion.div>

          

          {/* Right */}
          <motion.form
            autoComplete="on"
            onSubmit={sendEmail}
            whileHover={{ y: -5 }}
            className="bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700 p-8 space-y-5 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition-all duration-300"
          >

          <div className="mb-6">
  <h3 className="text-3xl font-bold">Send Me a Message</h3>

  <p className="text-slate-400 mt-2">
    Fill out the form below and I'll get back to you as soon as possible.
  </p>
</div>

            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="👤 Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-950/70 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="📧 Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-950/70 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />

            <input
              type="text"
              name="subject"
              autoComplete="off"
              placeholder="📝 Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full bg-slate-950/70 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />

            <textarea
              rows="6"
              name="message"
              autoComplete="off"
              placeholder="💬 Your Message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-950/70 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 resize-none focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />


            {status === "success" && (
  <div className="bg-green-500/10 border border-green-500 text-green-400 rounded-xl p-4">
    ✅ Thank you! Your message has been sent successfully.
  </div>
)}

{status === "error" && (
  <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-xl p-4">
    ❌ Something went wrong. Please try again.
  </div>
)}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300"
            >
              {loading ? (
  <span className="flex items-center justify-center gap-2">
    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
    Sending...
  </span>
) : (
  "🚀 Send Message"
)}
            </button>
          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;