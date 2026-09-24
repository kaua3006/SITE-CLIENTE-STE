export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "O livro substitui uma consulta médica?",
    answer:
      "Não. O livro explica o raciocínio por trás da Medicina do Elo Crítico, mas cada caso precisa de avaliação individual com um profissional.",
  },
  {
    question: "Em quanto tempo recebo o livro?",
    answer:
      "PENDENTE: confirmar prazo de entrega com a transportadora ou plataforma de venda escolhida.",
  },
  {
    question: "Tem versão digital (Kindle)?",
    answer: "Sim, o livro também está disponível em Kindle na Amazon. Esta oferta é da capa física.",
  },
  {
    question: "Como falo com o consultório do Dr. Fábio?",
    answer: "Pelo WhatsApp (19) 99854-4030, ou pelo Instagram @drfabiothuler.",
  },
];
