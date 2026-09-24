import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import { navigation } from "@/data/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-soft ${
        isScrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-[78px] items-center justify-between">
        <a href="/#inicio" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold font-display text-sm font-semibold text-gold">
            FT
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-foreground">Dr. Fábio Thuler</span>
            <span className="mt-0.5 text-[9.5px] font-medium uppercase tracking-widest text-muted">
              O Elo Mais Frágil
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              className="font-body text-sm text-foreground/75 transition-colors duration-200 hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/#comprar"
            className="rounded-soft bg-gradient-to-b from-gold-soft to-gold px-6 py-2.5 font-body text-sm font-bold text-[#1a1206] transition-transform duration-200 ease-soft hover:-translate-y-0.5"
          >
            Quero o livro
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </button>
      </Container>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
