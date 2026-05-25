import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 p-3.5 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 text-black shadow-xl shadow-amber-900/30 transition-all duration-500 hover:scale-110 hover:shadow-amber-500/40 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} strokeWidth={3} />
    </button>
  );
}
