import { useEffect, useState } from "react";
import { ChevronDown, Star } from "lucide-react";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/hero-bg.jpg)",
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Decorative overlay pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #c9a96e 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <Star size={14} className="fill-amber-400" />
          <span>أفضل المطاعم العربية الأصيلة</span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up font-display"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <span className="gradient-text">مطعم النخبة</span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-white/70 mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          تجربة طعام استثنائية تجمع بين أصالة الماضي وحداثة الحاضر
        </p>

        <p
          className="text-base text-amber-200/60 mb-12 animate-fade-in-up font-display"
          style={{ animationDelay: "0.7s", animationFillMode: "both" }}
        >
          "الطعام الجيد هو أساس السعادة الحقيقية"
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.9s", animationFillMode: "both" }}
        >
          <button
            onClick={() => {
              const firstCat = document.querySelector("[data-category]");
              firstCat?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group relative px-8 py-3.5 bg-gradient-to-l from-amber-500 to-yellow-500 text-black font-bold rounded-2xl text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105"
          >
            <span className="relative z-10">تصفح القائمة</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </button>

          <button
            onClick={() => {
              document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-2xl text-white/80 border border-white/20 font-medium transition-all duration-300 hover:bg-white/5 hover:text-white hover:border-white/40"
          >
            احجز طاولتك
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-in-up"
          style={{ animationDelay: "1.1s", animationFillMode: "both" }}
        >
          {[
            { value: "٥٠+", label: "طبق شهي" },
            { value: "١٥+", label: "سنوات خبرة" },
            { value: "١٠٠٠+", label: "زبون سعيد" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-amber-400/60" size={28} />
      </div>
    </section>
  );
}
