import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { menuData } from "../data/menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Find active category based on scroll position
      const sections = document.querySelectorAll("[data-category]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          current = section.getAttribute("data-category") || "";
        }
      });
      setActiveCategory(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const el = document.querySelector(`[data-category="${categoryId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-900/30 group-hover:scale-110 transition-transform duration-300">
                <span className="font-display">ن</span>
              </div>
              <div className="absolute -inset-1 rounded-full bg-amber-400/20 blur-sm group-hover:blur-md transition-all duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-white font-display leading-tight">
                مطعم النخبة
              </h1>
              <p className="text-[10px] md:text-xs text-amber-300/80 tracking-widest uppercase">
                Al Nokhba Restaurant
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto max-w-3xl">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`px-3 xl:px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="ml-1.5">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/5 px-4 py-4 space-y-1">
          {menuData.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`w-full text-right px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 animate-fade-in-up ${
                activeCategory === cat.id
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/20"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <span className="ml-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
