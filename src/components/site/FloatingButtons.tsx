import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href="https://wa.me/918108801290" target="_blank" rel="noopener" aria-label="WhatsApp" className="group w-14 h-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform">
        <MessageCircle className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
      </a>
      <a href="tel:+918108801290" aria-label="Call" className="w-14 h-14 rounded-full grid place-items-center bg-gradient-navy text-primary-foreground shadow-gold hover:scale-110 transition-transform">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
