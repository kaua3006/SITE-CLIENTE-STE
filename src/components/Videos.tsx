import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { videos } from "@/data/videos";

export default function Videos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="videos" className="py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Ouça do próprio autor"
          title="Dr. Fábio explica o livro."
          description="PENDENTE: inserir os vídeos reais (arquivo .mp4 ou embed do YouTube/Instagram). Por enquanto, os cards abaixo levam para o canal do Dr. Fábio."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {videos.map((video, index) => (
            <motion.a
              key={video.title}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block aspect-[16/10] overflow-hidden rounded-soft border border-border"
            >
              <img
                src={video.poster}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(10,16,23,0.05) 40%, rgba(10,16,23,0.92))" }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-soft bg-background/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-gold">
                  <Play className="ml-0.5 h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#1a1206]" fill="currentColor" aria-hidden="true" />
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5">
                <span className="block font-display text-lg font-semibold text-white">{video.title}</span>
                <span className="font-body text-xs text-white/70">{video.subtitle}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
