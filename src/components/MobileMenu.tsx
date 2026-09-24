import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navigation } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-background lg:hidden"
        >
          <div className="flex h-[78px] items-center justify-between px-6">
            <span className="font-display text-xl font-semibold text-foreground">
              Dr. Fábio Thuler
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
            >
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Navegação mobile"
            className="flex flex-col items-start gap-7 px-8 pt-10"
          >
            {navigation.map((link, index) => (
              <motion.a
                key={link.href}
                href={`/${link.href}`}
                onClick={onClose}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl font-semibold text-foreground"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="/#comprar"
              onClick={onClose}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * navigation.length, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 w-full rounded-soft bg-gradient-to-b from-gold-soft to-gold px-6 py-4 text-center font-body text-base font-bold text-[#1a1206]"
            >
              Quero o livro
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
