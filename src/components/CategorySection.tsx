import { motion } from "framer-motion";
import type { Category } from "../data/menu";
import DishCard from "./DishCard";

interface CategorySectionProps {
  category: Category;
}

export default function CategorySection({
  category,
}: CategorySectionProps) {
  return (
    <section
      data-category={category.id}
      className="relative py-16 md:py-20 scroll-mt-28"
    >
      {/* Section decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-600/10 border border-amber-500/20 mb-4">
          <span className="text-3xl">{category.icon}</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
          {category.name}
        </h2>
        <p className="text-amber-400/50 text-sm md:text-base">
          {category.nameEn} · {category.dishes.length} أطباق
        </p>

        {/* Decorative line under title */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-8 h-px bg-amber-500/30" />
          <div className="w-2 h-2 rotate-45 bg-amber-500/40" />
          <div className="w-8 h-px bg-amber-500/30" />
        </div>
      </motion.div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {category.dishes.map((dish, dishIdx) => (
          <DishCard key={dish.id} dish={dish} index={dishIdx} />
        ))}
      </div>
    </section>
  );
}
