import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black flex items-center justify-center shadow-lg transition-all duration-300 z-50"
    >
      <ChevronUp size={22} />
    </button>
  );
}

export default ScrollTop;