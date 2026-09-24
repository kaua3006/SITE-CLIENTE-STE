export const siteConfig = {
  authorName: "Dr. Fábio Thuler",
  method: "Medicina do Elo Crítico",
  bookTitle: "O Elo Mais Frágil",
  bookSubtitle: "Como a Medicina Funcional Integrativa recupera e protege a sua saúde",
  instagram: "drfabiothuler",
  youtube: "https://www.youtube.com/@fabiothuler237",
  // WhatsApp confirmado na receita do consultório e no site fabiothuler.com.br
  whatsapp: "5519998544030",
  clinic: {
    name: "Centro Diagnóstico em Gastroenterologia",
    street: "Rua Costa Rica, 34",
    neighborhood: "Bairro Frezzarim",
    city: "Americana",
    state: "SP",
    phones: ["(19) 3406-5417", "(19) 3461-1071"],
  },
  // PENDENTE: CRM não encontrado publicado — confirmar com o Dr. Fábio antes de publicar.
  crm: "CRM a confirmar",
  whatsappDefaultMessage:
    "Olá! Vim pelo site do livro O Elo Mais Frágil e quero saber mais.",
  // PENDENTE: confirmar preço real do livro (físico) antes de publicar.
  price: {
    current: 59.9,
    original: 79.9,
    installments: 3,
  },
} as const;

export function getWhatsAppLink(message: string = siteConfig.whatsappDefaultMessage): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function getInstagramLink(): string {
  return `https://www.instagram.com/${siteConfig.instagram}/`;
}

export function getFullClinicAddress(): string {
  const { street, neighborhood, city, state } = siteConfig.clinic;
  return `${street}, ${neighborhood}, ${city} - ${state}`;
}

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
