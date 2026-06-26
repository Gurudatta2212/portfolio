import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";

import ScrollProgress from "./components/ui/ScrollProgress";
import ScrollTop from "./components/ui/ScrollTop";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>

      {/* Floating Button */}
      <ScrollTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;