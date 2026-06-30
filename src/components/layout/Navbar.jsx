import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import portfolio from "../../data/portfolio";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    "home",
    "about",
    "projects",
    "Professional",
    "education",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((id) => document.getElementById(id));

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-cyan-400"
        >
          GM<span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`capitalize transition duration-300 ${
                  active === item
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item}
              </a>

              {active === item && (
                <div className="h-[2px] bg-cyan-400 rounded-full mt-1" />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">

          <a
            href={portfolio.personal.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="/resume/Gurudatta_Mulage_Resume.pdf"
            download
            className="px-5 py-2 rounded-xl bg-cyan-500 text-black hover:bg-cyan-600 transition"
          >
            Resume
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center gap-6 py-6">

            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className={`capitalize ${
                    active === item
                      ? "text-cyan-400"
                      : "text-slate-300"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}

            <a
              href={portfolio.personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="/resume/Gurudatta_Mulage_Resume.pdf"
              download
              className="text-cyan-400"
            >
              Resume
            </a>

          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;