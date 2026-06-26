import portfolio from "../../data/portfolio";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            GM<span className="text-white">.</span>
          </h2>

          <p className="text-slate-400 mt-2 text-sm">
            © {new Date().getFullYear()} Gurudatta Mulage. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href={portfolio.personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href={`mailto:${portfolio.personal.email}`}
            className="text-slate-400 hover:text-cyan-400"
          >
            Email
          </a>

          <a
            href={`tel:${portfolio.personal.phone}`}
            className="text-slate-400 hover:text-cyan-400"
          >
            Phone
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;