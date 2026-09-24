import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "onDark" | "onCream";
  as?: "h2" | "h3";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "onDark",
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const eyebrowColor = tone === "onCream" ? "text-[#9c7a2e]" : "text-gold";
  const titleColor = tone === "onCream" ? "text-ink-on-cream" : "text-foreground";
  const descColor = tone === "onCream" ? "text-muted-on-cream" : "text-muted";

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}
    >
      <span className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest ${eyebrowColor}`}>
        <span className="h-px w-4 bg-current" aria-hidden="true" />
        {eyebrow}
      </span>
      <HeadingTag className={`font-display text-4xl font-semibold leading-tight md:text-5xl ${titleColor}`}>
        {title}
      </HeadingTag>
      {description && (
        <p className={`font-body text-base leading-relaxed md:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
