import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { methodStages } from "@/data/method";

export default function Method() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="metodo" className="bg-raise py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="O método do livro"
          title="Medicina do Elo Crítico, em 4 etapas."
          description="A mesma lógica que ele usa em consulta, explicada passo a passo no livro."
          align="center"
        />

        <div className="grid grid-cols-1 overflow-hidden rounded-soft border border-border sm:grid-cols-2 lg:grid-cols-4">
          {methodStages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3.5 border-b border-border bg-raise-2 p-8 sm:border-r [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <span className="font-display text-3xl font-semibold text-gold">{stage.number}</span>
              <h3 className="font-display text-lg font-semibold text-foreground">{stage.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted">{stage.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
