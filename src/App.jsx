import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Professional from "./components/sections/Professional";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

import ScrollProgress from "./components/ui/ScrollProgress";
import ScrollTop from "./components/ui/ScrollTop";
import AnimatedBackground from "./components/ui/AnimatedBackground";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Professional />
        <Education />
        <Contact />
      </main>

      {/* Scroll To Top */}
      <ScrollTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;