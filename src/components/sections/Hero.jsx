import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import portfolio from "../../data/portfolio";
import profile from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-24"
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
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-7 py-3.5 rounded-xl font-semibold transition duration-300"
            >
              GitHub
            </a>

            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-7 py-3.5 rounded-xl transition duration-300">
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Projects Card */}
          <div className="hidden lg:block absolute top-6 -left-10 bg-slate-900/90 backdrop-blur-md border border-cyan-500 rounded-2xl px-5 py-3 shadow-xl">
            <h3 className="text-cyan-400 text-2xl font-bold">2+</h3>
            <p className="text-sm text-slate-300">Projects</p>
          </div>

          {/* Internship Card */}
          <div className="hidden lg:block absolute bottom-8 -left-14 bg-slate-900/90 backdrop-blur-md border border-cyan-500 rounded-2xl px-5 py-3 shadow-xl">
            <h3 className="text-cyan-400 text-xl font-bold">3 Months</h3>
            <p className="text-sm text-slate-300">Internship</p>
          </div>

          {/* Percentage Card */}
          <div className="hidden lg:block absolute top-20 -right-10 bg-slate-900/90 backdrop-blur-md border border-cyan-500 rounded-2xl px-5 py-3 shadow-xl">
            <h3 className="text-cyan-400 text-2xl font-bold">88.74%</h3>
            <p className="text-sm text-slate-300">Diploma</p>
          </div>

          {/* Profile Image */}
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