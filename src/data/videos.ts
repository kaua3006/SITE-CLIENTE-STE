export interface VideoItem {
  title: string;
  subtitle: string;
  poster: string;
  // PENDENTE: trocar pelo vídeo real (arquivo .mp4 ou embed do YouTube/Instagram).
  // Por enquanto, cada card leva para o canal do Dr. Fábio no YouTube.
  href: string;
}

export const videos: VideoItem[] = [
  {
    title: 'Por que escrevi "O Elo Mais Frágil"',
    subtitle: "Dr. Fábio Thuler",
    poster: "/images/autor-retrato.webp",
    href: "https://www.youtube.com/@fabiothuler237",
  },
  {
    title: "O que é a Medicina do Elo Crítico",
    subtitle: "Dr. Fábio Thuler",
    poster: "/images/hero-livro.webp",
    href: "https://www.youtube.com/@fabiothuler237",
  },
];
