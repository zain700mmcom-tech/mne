import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-white font-bold">
                <span className="font-display">ن</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  مطعم النخبة
                </h3>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              نقدم أشهى المأكولات العربية الأصيلة في أجواء عصرية فاخرة. 
              خبرة تزيد عن ١٥ عاماً في عالم الضيافة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {["القائمة", "المقبلات", "الأطباق الرئيسية", "المشاوي", "الحلويات", "المشروبات"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-amber-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>شارع التحلية، جدة</li>
              <li dir="ltr">+966 55 123 4567</li>
              <li dir="ltr">info@alnokhba.com</li>
              <li>يومياً ١٢:٠٠ ظهراً - ١٢:٠٠ منتصف الليل</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} مطعم النخبة. جميع الحقوق محفوظة.
          </p>
          <p className="text-white/20 text-sm flex items-center gap-1.5">
            صنع بـ <Heart size={14} className="text-red-400 fill-red-400" />
            في جدة
          </p>
        </div>
      </div>
    </footer>
  );
}
