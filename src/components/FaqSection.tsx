import { Plus } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { faqItems } from "@/data/faq";

export default function FaqSection() {
  return (
    <section id="perguntas" className="bg-cream py-24 text-ink-on-cream md:py-32">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Perguntas frequentes" title="Antes de comprar" align="center" tone="onCream" />

        <div className="mx-auto flex w-full max-w-2xl flex-col divide-y divide-border-cream overflow-hidden rounded-soft border border-border-cream">
          {faqItems.map((item) => (
            <details key={item.question} className="group bg-white open:bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-body text-sm font-semibold text-ink-on-cream [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-[#9c7a2e] transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-[62ch] px-6 pb-6 font-body text-sm leading-relaxed text-muted-on-cream">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
