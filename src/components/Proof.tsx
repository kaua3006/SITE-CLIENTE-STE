import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/Container";

export default function Proof() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-soft border border-border bg-raise-2 shadow-soft">
            <img
              src="/images/livro-assinado.webp"
              alt="Página assinada do livro O Elo Mais Frágil, com dedicatória do Dr. Fábio Thuler"
              className="h-full w-full object-cover"
              width={900}
              height={1125}
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </motion.div>

        <div>
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-gold">
            <span className="h-px w-4 bg-current" aria-hidden="true" />
            Prova real
          </span>
          <p className="mt-5 font-display text-2xl italic leading-relaxed text-foreground md:text-3xl">
            "Para uma vida com saúde. Um abraço do Dr. Fábio."
          </p>
          <p className="mt-6 font-body text-base leading-relaxed text-muted">
            Cada exemplar sai da mão de quem escreveu — e de quem, antes de virar autor, passou 20
            anos operando as consequências de diagnósticos tardios.
          </p>
          <p className="mt-6 font-body text-sm text-gold-soft">
            PENDENTE: trocar por depoimentos reais de leitores/pacientes quando disponíveis.
          </p>
        </div>
      </Container>
    </section>
  );
}
