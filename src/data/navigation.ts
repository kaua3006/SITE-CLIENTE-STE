export interface NavLink {
  label: string;
  href: string;
}

export const navigation: NavLink[] = [
  { label: "O autor", href: "#sobre" },
  { label: "O método", href: "#metodo" },
  { label: "Vídeos", href: "#videos" },
  { label: "O livro", href: "#livro" },
  { label: "Perguntas", href: "#perguntas" },
];
