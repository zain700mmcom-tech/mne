import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Flame, Star, Leaf, X, ChefHat } from "lucide-react";
import type { Dish } from "../data/menu";

interface DishCardProps {
  dish: Dish;
  index: number;
}

export default function DishCard({ dish, index }: DishCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative bg-gradient-to-b from-white/[0.06] to-white/[0.02] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 card-hover h-full">
          {/* Image */}
          <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden img-zoom">
            {imgError ? (
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <ChefHat size={48} className="text-amber-500/40" />
              </div>
            ) : (
              <img
                src={dish.image}
                alt={dish.name}
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Badges */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              {dish.popular && (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-black text-xs font-bold shadow-lg">
                  <Star size={12} className="fill-black" />
                  <span>الأكثر طلباً</span>
                </div>
              )}
            </div>

            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {dish.spicy && (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/90 text-white text-xs font-medium shadow-lg">
                  <Flame size={12} />
                  <span>حار</span>
                </div>
              )}
              {dish.vegetarian && (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/90 text-white text-xs font-medium shadow-lg">
                  <Leaf size={12} />
                  <span>نباتي</span>
                </div>
              )}
            </div>

            {/* Price */}
            <div className="absolute bottom-3 left-3">
              <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10">
                <span className="text-lg font-bold text-amber-400">
                  {dish.price}
                </span>
                <span className="text-xs text-white/60 mr-1">ر.س</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                {dish.name}
              </h3>
            </div>
            <p className="text-sm text-white/50 line-clamp-2 mb-3">
              {dish.description}
            </p>

            {/* Ingredients preview */}
            <div className="flex flex-wrap gap-1.5">
              {dish.ingredients.slice(0, 3).map((ing) => (
                <span
                  key={ing}
                  className="px-2 py-0.5 rounded-lg bg-white/5 text-xs text-white/40"
                >
                  {ing}
                </span>
              ))}
              {dish.ingredients.length > 3 && (
                <span className="px-2 py-0.5 rounded-lg bg-amber-500/10 text-xs text-amber-400/70">
                  +{dish.ingredients.length - 3}
                </span>
              )}
            </div>

            {/* View Details */}
            <div className="mt-4 flex items-center gap-2 text-amber-400/60 text-sm font-medium group-hover:text-amber-300 transition-colors">
              <ShoppingCart size={14} />
              <span>عرض التفاصيل</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-gradient-to-b from-zinc-900 to-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 left-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/70 hover:text-white hover:bg-black/70 transition-all"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative h-56 sm:h-72 md:h-80">
                {imgError ? (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <ChefHat size={64} className="text-amber-500/30" />
                  </div>
                ) : (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Badges in modal */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {dish.popular && (
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-bold">
                      <Star size={12} className="fill-black" />
                      الأكثر طلباً
                    </div>
                  )}
                  {dish.spicy && (
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/90 text-white text-xs font-medium">
                      <Flame size={12} />
                      حار
                    </div>
                  )}
                  {dish.vegetarian && (
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/90 text-white text-xs font-medium">
                      <Leaf size={12} />
                      نباتي
                    </div>
                  )}
                </div>

                {/* Price badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-sm border border-amber-500/30">
                    <span className="text-2xl font-bold text-amber-400">
                      {dish.price}
                    </span>
                    <span className="text-sm text-white/60 mr-1">ر.س</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="mb-2">
                  <span className="text-sm text-amber-400/60">
                    {dish.nameEn}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">
                  {dish.name}
                </h2>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {dish.description}
                </p>

                {/* Ingredients */}
                <div>
                  <h4 className="text-sm font-medium text-white/40 mb-3 flex items-center gap-2">
                    <ChefHat size={14} />
                    المكونات
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dish.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-white/70 text-sm"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <button className="mt-8 w-full py-3.5 rounded-2xl bg-gradient-to-l from-amber-500 to-yellow-500 text-black font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]">
                  أضف إلى الطلب
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
