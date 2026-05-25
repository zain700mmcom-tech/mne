import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";

export default function ReservationSection() {
  return (
    <section id="reservation" className="relative py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #c9a96e 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              احجز{' '}
              <span className="gradient-text">طاولتك</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              ننتظركم في مطعم النخبة لتجربة طعام لا تنسى. احجزوا طاولتكم مسبقاً
              لضمان أفضل تجربة.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: <MapPin size={20} />,
                  title: "العنوان",
                  value: "شارع التحلية، جدة، المملكة العربية السعودية",
                },
                {
                  icon: <Phone size={20} />,
                  title: "الهاتف",
                  value: "+966 55 123 4567",
                },
                {
                  icon: <Clock size={20} />,
                  title: "ساعات العمل",
                  value: "يومياً من ١٢:٠٠ ظهراً - ١٢:٠٠ منتصف الليل",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white/40 text-sm">{item.title}</h4>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] rounded-3xl border border-white/5 p-6 md:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              نموذج الحجز
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/40 mb-1.5">
                    الاسم
                  </label>
                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-1.5">
                    الهاتف
                  </label>
                  <input
                    type="tel"
                    placeholder="رقم الجوال"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all"
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/40 mb-1.5">
                    التاريخ
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-1.5">
                    الوقت
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/40 mb-1.5">
                  عدد الضيوف
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-zinc-900">
                      {n} {n === 1 ? "شخص" : n <= 2 ? "شخصان" : n <= 10 ? "أشخاص" : "شخصاً"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/40 mb-1.5">
                  ملاحظات إضافية
                </label>
                <textarea
                  rows={3}
                  placeholder="مناسبات خاصة، تفضيلات الطعام..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all resize-none"
                  dir="rtl"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-l from-amber-500 to-yellow-500 text-black font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>إرسال الحجز</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
