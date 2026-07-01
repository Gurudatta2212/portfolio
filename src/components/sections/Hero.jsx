import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import portfolio from "../../data/portfolio";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import { Code2 } from "lucide-react";

function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center"
>

<div className="absolute inset-0 overflow-hidden">

  <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[140px]" />

  <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[160px]" />

</div>

     <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <motion.div
initial={{ opacity: 0, x: -80 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
>

<h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">

Hi, I'm

<br />

<span className="text-cyan-400">

{portfolio.personal.name}

</span>

</h1>

<TypeAnimation

sequence={[

"Frontend Developer",

2000,

"Computer Engineering Student",

2000,

"Full Stack Learner",

2000,

]}

wrapper="h2"

repeat={Infinity}

speed={50}

className="text-2xl mt-6 text-slate-300 font-semibold"

/>

<p className="mt-8 max-w-xl text-slate-400 leading-8">

{portfolio.personal.about}

</p>

<div className="flex gap-4 mt-10">

<a

href="#projects"

className="px-7 py-4 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"

>

View My Work

</a>

<a

href="#contact"

className="px-7 py-4 rounded-xl border border-slate-700 hover:border-cyan-400 transition"

>

Contact Me

</a>

</div>

<div className="flex gap-5 mt-10">

<a

href={portfolio.personal.github}

target="_blank"

rel="noreferrer"

className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-green-500 hover:text-black transition"

>

<FaGithub className="text-2xl" />

</a>

<a

href={portfolio.personal.instagram}

target="_blank"

rel="noreferrer"

className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-pink-500 transition"

>

<FaInstagram className="text-2xl" />

</a>

<a
  href={portfolio.personal.linkedin}
  target="_blank"
  rel="noreferrer"
  className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition"
>
  <FaLinkedin className="text-2xl" />
</a>

</div>

</motion.div>

        <motion.div
initial={{ opacity: 0, x: 80 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
className="relative flex justify-center items-center h-[520px]"
>

<div className="absolute w-[420px] h-[420px] rounded-full border border-cyan-500/20 animate-spin"
style={{
animationDuration:"30s"
}}
>

<div className="absolute -top-6 left-1/2 -translate-x-1/2">

<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500 flex items-center justify-center shadow-lg">

<FaReact className="text-cyan-400 text-3xl"/>

</div>

</div>

<div className="absolute top-1/2 -right-6 -translate-y-1/2">

<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-yellow-500 flex items-center justify-center">

<SiJavascript className="text-yellow-400 text-3xl"/>

</div>

</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">

<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-400 flex items-center justify-center">

<SiTailwindcss className="text-cyan-400 text-3xl"/>

</div>

</div>

<div className="absolute top-1/2 -left-6 -translate-y-1/2">

<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-green-500 flex items-center justify-center">

<Code2 className="text-green-400"/>

</div>

</div>

</div>

<div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/20 blur-[90px]"/>

<div className="relative flex items-center justify-center">

  <div className="absolute w-80 h-80 rounded-full bg-cyan-500/20 blur-[90px]" />

  <div className="relative w-72 h-72 rounded-full bg-slate-900 border border-cyan-500/30 shadow-[0_0_80px_rgba(34,211,238,0.35)] flex items-center justify-center">

    <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      GM
    </h1>

  </div>

</div>

</motion.div>

      </div>
    </section>
  );
}

export default Hero;