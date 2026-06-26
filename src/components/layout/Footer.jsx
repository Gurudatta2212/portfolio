import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolio from "../../data/portfolio";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
          <div className="text-center lg:text-left">

            <h2 className="text-3xl font-bold text-cyan-400">
              GM<span className="text-white">.</span>
            </h2>

            <p className="mt-4 text-slate-400 max-w-md leading-7">
              Thank you for visiting my portfolio.
              I'm always open to internships, full-time opportunities,
              freelance work, and exciting collaborations.
            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col items-center lg:items-end gap-5">

            <div className="flex gap-6">

              <a
                href={portfolio.personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-black transition duration-300 flex items-center justify-center text-xl"
              >
                <FaGithub />
              </a>

              {portfolio.personal.linkedin && (
                <a
                  href={portfolio.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-black transition duration-300 flex items-center justify-center text-xl"
                >
                  <FaLinkedin />
                </a>
              )}

              <a
                href={`mailto:${portfolio.personal.email}`}
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-black transition duration-300 flex items-center justify-center text-xl"
              >
                <FaEnvelope />
              </a>

            </div>

          

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6">

  <p className="text-center text-slate-500 text-sm">
    © {new Date().getFullYear()}{" "}
    <span className="text-white font-medium">
      Gurudatta Mulage
    </span>
    . All Rights Reserved.
  </p>

</div>

      </div>
    </footer>
  );
}

export default Footer;