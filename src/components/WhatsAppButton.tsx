import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp sobre o livro"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-gold-soft to-gold text-[#1a1206] shadow-soft transition-transform duration-300 ease-soft hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}
