import { Instagram as InstagramIcon, Youtube } from "lucide-react";
import Container from "@/components/Container";
import { getFullClinicAddress, getInstagramLink, getWhatsAppLink, siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-14">
      <Container className="flex flex-col gap-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold font-display text-sm font-semibold text-gold">
                FT
              </span>
              <span className="font-display text-xl font-semibold text-foreground">
                {siteConfig.authorName}
              </span>
            </div>
            <span className="font-body text-sm text-muted">Cirurgião digestivo · {siteConfig.method}</span>
            <span className="font-body text-sm text-gold-soft">{siteConfig.crm}</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-body text-sm font-medium text-foreground">Consultório</span>
            <span className="font-body text-sm text-muted">{getFullClinicAddress()}</span>
            {siteConfig.clinic.phones.map((phone) => (
              <span key={phone} className="font-body text-sm text-muted">
                {phone}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-body text-sm font-medium text-foreground">Links</span>
            <a
              href={getInstagramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 font-body text-sm text-muted transition-colors duration-200 hover:text-teal"
            >
              <InstagramIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              @{siteConfig.instagram}
            </a>
            <a
              href={siteConfig.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 font-body text-sm text-muted transition-colors duration-200 hover:text-teal"
            >
              <Youtube className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              YouTube
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted transition-colors duration-200 hover:text-teal"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <p className="border-t border-border pt-6 font-body text-xs leading-relaxed text-muted">
          As informações apresentadas neste site possuem caráter informativo e não substituem
          consulta médica. O checkout de compra deste site é uma simulação para demonstração —
          nenhum pagamento é processado.
        </p>

        <p className="font-body text-xs text-muted">
          © {year} {siteConfig.authorName}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
