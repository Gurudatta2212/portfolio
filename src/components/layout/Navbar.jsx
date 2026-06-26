import { useState } from "react";
import portfolio from "../../data/portfolio";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          GM<span className="text-white">.</span>
        </h1>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-3">
          <a
            href={portfolio.personal.github}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-cyan-500 transition"
          >
            GitHub
          </a>

          <a
  href="/resume/Gurudatta_Mulage_Resume.pdf"
  download
  className="bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
>
  Resume
</a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-cyan-400"
                >
                  {item}
                </a>
              </li>
            ))}

            <a
              href={portfolio.personal.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;