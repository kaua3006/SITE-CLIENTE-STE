import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, HeartPulse, Sparkles, Stethoscope } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const credentials = [
  { icon: Stethoscope, text: "Mestre e doutor em Cirurgia — Santa Casa de SP" },
  { icon: Sparkles, text: "Formação em Medicina Funcional Integrativa, Homeopatia e Psiquiatria" },
  { icon: HeartPulse, text: "Um dos pioneiros da cirurgia robótica digestiva no Brasil" },
  { icon: BookOpen, text: 'Criador da Medicina do Elo Crítico e autor de "O Elo Mais Frágil"' },
];

export default function AuthorAbout() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="sobre" className="py-24 md:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-soft border border-border bg-raise-2 shadow-soft lg:max-w-none">
            <img
              src="/images/autor-retrato.webp"
              alt="Dr. Fábio Thuler de jaleco"
              className="h-full w-full object-cover"
              width={1000}
              height={1250}
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="Quem escreveu este livro" title="Um cirurgião que parou de tratar só o órgão." />

          <blockquote className="font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
            "Mesmo com a técnica perfeita, muitos pacientes voltavam a adoecer."
          </blockquote>

          <p className="font-body text-base leading-relaxed text-muted md:text-lg">
            Por 20 anos, o Dr. Fábio Thuler operou tumores e reconstruiu órgãos como um dos
            pioneiros da cirurgia robótica no Brasil — hoje ensina a técnica a outros cirurgiões.
            Foi percebendo que a precisão cirúrgica não impedia a doença de voltar que ele foi
            buscar, na Medicina Funcional Integrativa, o que estava faltando: tratar a causa, não
            o sintoma.
          </p>

          <ul className="grid grid-cols-1 gap-4 border-t border-border pt-7 sm:grid-cols-2">
            {credentials.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-body text-sm text-foreground/85">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
