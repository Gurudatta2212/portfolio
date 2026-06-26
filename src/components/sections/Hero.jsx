import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import portfolio from "../../data/portfolio";
import profile from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg font-semibold mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            {portfolio.personal.name}
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Computer Engineering Student",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl lg:text-3xl text-cyan-400 mt-4 font-semibold"
          />

          <p className="mt-6 text-slate-400 leading-8 max-w-xl">
            {portfolio.personal.about}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={portfolio.personal.github}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-xl font-semibold transition"
            >
              GitHub
            </a>

            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl transition">
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full border-4 border-cyan-500 shadow-2xl overflow-hidden bg-slate-900">
            <img
              src={profile}
              alt="Profile"
               className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover object-[center_15%] border-4 border-cyan-500 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;