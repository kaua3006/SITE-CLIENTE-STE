import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

const points = [
  "Para quem já passou por vários médicos e continua sem resposta",
  "Para quem quer entender sono, intestino, estresse e metabolismo como um sistema só",
  "Disponível em capa física e Kindle",
];

export default function BookSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="livro" className="bg-cream py-24 text-ink-on-cream md:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-soft border border-border-cream bg-white shadow-soft">
            <img
              src="/images/livro-capa.webp"
              alt="Capa do livro O Elo Mais Frágil"
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
          <SectionHeading
            eyebrow="O livro"
            title={siteConfig.bookSubtitle + "."}
            tone="onCream"
          />
          <p className="mt-5 font-body text-base leading-relaxed text-muted-on-cream md:text-lg">
            Baseado em Medicina Funcional Integrativa e na experiência com casos complexos, o
            livro mostra que a doença não vem só do acúmulo de fatores de risco — vem do
            enfraquecimento de um ponto estratégico que sustenta todo o sistema. Quando esse elo
            é identificado e fortalecido, o corpo recupera a capacidade de se autorregular.
          </p>

          <ul className="mt-7 flex flex-col gap-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 font-body text-sm text-ink-on-cream">
                <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#9c7a2e]" strokeWidth={2} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#comprar"
            className="mt-8 inline-flex rounded-soft bg-[#171310] px-8 py-3.5 font-body text-sm font-bold text-cream transition-transform duration-200 ease-soft hover:-translate-y-0.5"
          >
            Ver oferta do livro
          </a>
        </div>
      </Container>
    </section>
  );
}
