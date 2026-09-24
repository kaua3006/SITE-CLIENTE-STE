import { motion, useReducedMotion } from "framer-motion";
import { Check, Lock, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { formatBRL, siteConfig } from "@/config/site";

const includes = [
  '1 exemplar físico de "O Elo Mais Frágil"',
  "Frete incluso para todo o Brasil",
  "Selo Best Seller Amazon",
];

export default function Offer() {
  const shouldReduceMotion = useReducedMotion();
  const [reais, centavos] = formatBRL(siteConfig.price.current).split(",");

  return (
    <section id="comprar" className="bg-raise py-24 md:py-32">
      <Container>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-gold">
          <span className="h-px w-4 bg-current" aria-hidden="true" />
          Oferta
        </span>
        <h2 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
          Leve "O Elo Mais Frágil" para casa.
        </h2>
        <p className="font-body text-muted">Capa física, com frete para todo o Brasil.</p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex w-full flex-col items-center gap-4 rounded-soft border border-gold/30 bg-gradient-to-b from-raise-2 to-raise p-10 shadow-soft"
        >
          <span className="font-body text-sm text-muted line-through">
            De R$ {formatBRL(siteConfig.price.original)}
          </span>
          <span className="font-display text-6xl font-semibold text-gold-soft">
            R$ {reais}
            <sup className="text-xl">,{centavos}</sup>
          </span>
          <span className="font-body text-xs text-muted">
            ou em até {siteConfig.price.installments}x sem juros · preço a confirmar
          </span>

          <ul className="mt-2 flex w-full flex-col gap-2.5 text-left">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 font-body text-sm text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={2} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/checkout"
            className="mt-2 w-full rounded-soft bg-gradient-to-b from-gold-soft to-gold px-8 py-4 text-center font-body text-sm font-bold text-[#1a1206] transition-transform duration-200 ease-soft hover:-translate-y-0.5"
          >
            Quero garantir o meu
          </Link>
        </motion.div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-5 font-body text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            Ambiente simulado para demonstração
          </span>
          <span className="flex items-center gap-1.5">
            <Truck className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            Envio para todo o Brasil
          </span>
        </div>
      </div>
      </Container>
    </section>
  );
}
