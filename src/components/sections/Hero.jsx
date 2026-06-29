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
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

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
              "React Developer",
              2000,
              "Full Stack Learner",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl lg:text-3xl text-cyan-400 mt-4 font-semibold"
          />

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-6">

            <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400">
              🟢 Available for Projects
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
              📍 {portfolio.personal.location}
            </span>

          </div>

          {/* About */}
          <p className="mt-6 text-slate-400 leading-8 max-w-xl">
            {portfolio.personal.about}
          </p>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-5 mt-6 text-slate-300">

            <div className="flex items-center gap-2">
              📧
              <span>{portfolio.personal.email}</span>
            </div>

            <div className="flex items-center gap-2">
              📱
              <span>{portfolio.personal.phone}</span>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>

          {/* Stats */}
          <div className="hidden lg:flex flex-col gap-5 absolute -left-20 top-10">

            {portfolio.personal.stats.map((item, index) => (
              <motion.div
                key={item.title}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.3,
                  repeat: Infinity,
                }}
                className="bg-slate-900/90 backdrop-blur-md border border-cyan-500 rounded-2xl px-5 py-4 shadow-xl"
              >
                <h3 className="text-cyan-400 text-2xl font-bold">
                  {item.number}
                </h3>

                <p className="text-slate-300 text-sm">
                  {item.title}
                </p>

              </motion.div>
            ))}

          </div>

          {/* Profile Image */}
          <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_60px_rgba(34,211,238,0.35)]">

            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover object-[center_15%]"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;