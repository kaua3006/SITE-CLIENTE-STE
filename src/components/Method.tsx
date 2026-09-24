import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { methodStages } from "@/data/method";

function NodeCircle({ critical, children }: { critical?: boolean; children: ReactNode }) {
  return (
    <span
      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border font-display text-lg font-semibold ${
        critical
          ? "critical-pulse border-teal bg-teal/10 text-teal"
          : "border-gold/45 bg-raise-2 text-gold"
      }`}
    >
      {children}
    </span>
  );
}

export default function Method() {
  const shouldReduceMotion = useReducedMotion();
  const criticalIndex = methodStages.findIndex((stage) => stage.critical);
  const criticalPercent = ((criticalIndex + 0.5) / methodStages.length) * 100;

  return (
    <section id="metodo" className="bg-raise py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="O método do livro"
          title="Uma corrente com quatro elos."
          description='A "Medicina do Elo Crítico" parte de uma ideia simples: sua saúde é uma corrente. Ela não rompe inteira — cede pelo elo mais frágil. O método encontra esse ponto e o fortalece.'
          align="center"
        />

        {/* Desktop: corrente horizontal */}
        <div className="relative hidden lg:block">
          <div
            className="pointer-events-none absolute top-7 h-px bg-gold/30"
            style={{ left: `${(0.5 / methodStages.length) * 100}%`, right: `${(0.5 / methodStages.length) * 100}%` }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-7 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal"
            style={{ left: `${criticalPercent}%`, boxShadow: "0 0 18px 5px rgba(63,207,192,0.55)" }}
            aria-hidden="true"
          />

          <div className="flex items-start">
            {methodStages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-1 flex-col items-center gap-5 px-4 text-center"
              >
                {stage.critical && (
                  <span className="absolute -top-7 inset-x-0 font-body text-[0.65rem] font-bold uppercase tracking-widest text-teal">
                    o elo crítico
                  </span>
                )}
                <NodeCircle critical={stage.critical}>{stage.number}</NodeCircle>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{stage.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted">{stage.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: corrente vertical */}
        <div className="relative flex flex-col gap-10 lg:hidden">
          <span
            className="pointer-events-none absolute left-7 top-7 bottom-7 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(205,163,84,0.3), rgba(63,207,192,0.55) 38%, rgba(63,207,192,0.55) 58%, rgba(205,163,84,0.3))",
            }}
            aria-hidden="true"
          />
          {methodStages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: -16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-5"
            >
              <NodeCircle critical={stage.critical}>{stage.number}</NodeCircle>
              <div className="flex flex-col gap-1.5 pt-1.5">
                {stage.critical && (
                  <span className="font-body text-[0.65rem] font-bold uppercase tracking-widest text-teal">
                    o elo crítico
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-foreground">{stage.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted">{stage.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
