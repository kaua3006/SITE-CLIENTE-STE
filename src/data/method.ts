export interface MethodStage {
  number: string;
  title: string;
  text: string;
  // Marca a etapa em que o "elo crítico" é encontrado — recebe destaque visual distinto.
  critical?: boolean;
}

// Etapas do método "Medicina do Elo Crítico", como descritas em fabiothuler.care/about
export const methodStages: MethodStage[] = [
  {
    number: "01",
    title: "Mapeamento do Elo",
    text: "Histórico clínico detalhado e avaliação metabólica para enxergar o sistema inteiro, não só o sintoma.",
  },
  {
    number: "02",
    title: "Hierarquia de Prioridades",
    text: "Identificação do ponto mais frágil — o que está realmente sustentando o quadro atual.",
    critical: true,
  },
  {
    number: "03",
    title: "Fortalecimento Progressivo",
    text: "Intervenções personalizadas em ciclos de 30 dias, com reavaliação constante.",
  },
  {
    number: "04",
    title: "Autonomia Sustentada",
    text: "O paciente aprende a reconhecer e manter o próprio equilíbrio, sem depender para sempre.",
  },
];
