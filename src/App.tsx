import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import ReservationSection from "./components/ReservationSection";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import { menuData } from "./data/menu";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* Menu Section */}
      <section className="relative">
        {/* Dark background with subtle grain */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-amber-500/5 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          {menuData.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </section>

      <ReservationSection />
      <Footer />
      <FloatingButton />
    </div>
  );
}
