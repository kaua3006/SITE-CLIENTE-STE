import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Scissors, Users } from "lucide-react";
import Container from "@/components/Container";

const stats = [
  { icon: Users, value: "11 mil+", label: "seguidores acompanham o método" },
  { icon: Scissors, value: "20 anos", label: "de cirurgia digestiva e oncológica" },
  { icon: GraduationCap, value: "Santa Casa SP", label: "mestrado, doutorado e docência" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? undefined : { opacity: 0, y: 20 },
    animate: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-[9.5rem]">
      <div
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[90%] w-[130%] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(63,207,192,0.14), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="flex flex-col items-start gap-7">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-gold"
          >
            <span className="h-px w-4 bg-current" aria-hidden="true" />
            Lançamento · Best Seller Amazon
          </motion.span>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display text-5xl font-semibold leading-[1.08] text-foreground md:text-6xl lg:text-[3.4rem]"
          >
            Sua saúde não quebra de uma vez. Ela cede pelo{" "}
            <em className="italic text-gold">elo mais frágil</em>.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="max-w-xl font-body text-base leading-relaxed text-muted md:text-lg"
          >
            Depois de 20 anos como cirurgião, o Dr. Fábio Thuler percebeu que tratar o órgão
            doente não bastava. Em "O Elo Mais Frágil", ele mostra como sono, intestino,
            metabolismo, estresse e emoção formam uma única rede — e como encontrar o ponto que
            está enfraquecendo a sua.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#comprar"
              className="rounded-soft bg-gradient-to-b from-gold-soft to-gold px-8 py-3.5 text-center font-body text-sm font-bold text-[#1a1206] transition-transform duration-200 ease-soft hover:-translate-y-0.5"
            >
              Garantir meu exemplar
            </a>
            <a
              href="#videos"
              className="rounded-soft border border-white/25 px-8 py-3.5 text-center font-body text-sm font-medium text-foreground transition-colors duration-200 ease-soft hover:border-teal hover:text-teal"
            >
              Assistir ao Dr. Fábio
            </a>
          </motion.div>

          <motion.dl
            {...fadeUp(0.32)}
            className="mt-2 grid w-full grid-cols-1 gap-6 border-t border-border pt-7 sm:grid-cols-3"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <dt className="font-display text-2xl font-semibold text-gold">{value}</dt>
                <dd className="font-body text-xs text-muted">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
        >
          <div
            className="absolute -right-3 -top-3 z-10 flex h-[84px] w-[84px] rotate-6 items-center justify-center rounded-full text-center font-display text-[0.62rem] font-bold leading-tight text-[#1a1206] shadow-soft"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #e6c477, #cda354 60%, #8a6a2c 100%)",
            }}
          >
            Best
            <br />
            Seller
            <br />
            Amazon
          </div>
          <div className="absolute -inset-3.5 -z-10 rounded-soft border border-gold/35" aria-hidden="true" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-soft border border-border bg-raise-2 shadow-soft">
            <img
              src="/images/hero-livro.webp"
              alt="Dr. Fábio Thuler segurando o livro O Elo Mais Frágil"
              className="h-full w-full object-cover"
              width={1100}
              height={1375}
              loading="eager"
              decoding="async"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
