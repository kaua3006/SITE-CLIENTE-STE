import Container from "@/components/Container";

const items = [
  { title: "Cirurgião digestivo", text: "Especialista em cirurgia geral e digestiva" },
  { title: "Mestre e doutor", text: "Faculdade de Ciências Médicas da Santa Casa de SP" },
  { title: "Professor", text: "Docente na Santa Casa de SP" },
  { title: "Medicina Funcional Integrativa", text: "Criador da Medicina do Elo Crítico" },
];

export default function CredStrip() {
  return (
    <section className="bg-cream py-14 text-ink-on-cream">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-1.5">
              <span className="font-display text-base font-semibold">{item.title}</span>
              <span className="font-body text-sm text-muted-on-cream">{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
