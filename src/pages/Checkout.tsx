import { useState } from "react";
import { ArrowLeft, Check, CreditCard, QrCode, ShieldCheck, Truck } from "lucide-react";
import { formatBRL, siteConfig } from "@/config/site";

type PaymentMethod = "card" | "pix";

export default function Checkout() {
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="main-content" className="min-h-screen">
      <div className="bg-gradient-to-r from-teal-dim to-[#16302c] px-4 py-2.5 text-center font-body text-sm font-semibold text-[#dffaf5]">
        🔒 Ambiente de demonstração — este checkout é uma simulação visual. Nenhum dado é enviado,
        salvo ou cobrado.
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-10">
        <a
          href="/#comprar"
          className="mb-8 inline-flex items-center gap-2 font-body text-sm text-muted transition-colors duration-200 hover:text-teal"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          Voltar à oferta
        </a>

        {submitted ? (
          <div className="mx-auto flex max-w-lg flex-col items-center gap-5 py-16 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-teal bg-teal/10">
              <Check className="h-7 w-7 text-teal" strokeWidth={2} aria-hidden="true" />
            </span>
            <h1 className="font-display text-3xl font-semibold text-foreground">Simulação concluída</h1>
            <p className="font-body text-sm leading-relaxed text-muted">
              Este é um checkout de demonstração — nenhum pedido real foi feito e nenhum dado foi
              enviado ou cobrado. Quando o site for para produção, esta etapa se conecta a um
              gateway de pagamento de verdade (Pix, cartão, boleto).
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="rounded-soft border border-white/25 px-7 py-3 font-body text-sm font-medium text-foreground transition-colors duration-200 hover:border-teal hover:text-teal"
            >
              Voltar ao formulário
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.3fr_0.95fr]">
            <form
              className="flex flex-col gap-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <fieldset className="flex flex-col gap-5 rounded-soft border border-border bg-raise p-7">
                <legend className="mb-1 flex items-center gap-2.5 px-1 font-display text-lg font-semibold text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold font-display text-xs text-[#1a1206]">1</span>
                  Seus dados
                </legend>
                <Field label="Nome completo" placeholder="Seu nome" full />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="E-mail" type="email" placeholder="voce@email.com" />
                  <Field label="WhatsApp" type="tel" placeholder="(19) 90000-0000" />
                </div>
              </fieldset>

              <fieldset className="flex flex-col gap-5 rounded-soft border border-border bg-raise p-7">
                <legend className="mb-1 flex items-center gap-2.5 px-1 font-display text-lg font-semibold text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold font-display text-xs text-[#1a1206]">2</span>
                  Endereço de entrega
                </legend>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="CEP" placeholder="00000-000" />
                  <Field label="Cidade / UF" placeholder="Americana - SP" />
                </div>
                <Field label="Endereço" placeholder="Rua, número, complemento" full />
              </fieldset>

              <fieldset className="flex flex-col gap-5 rounded-soft border border-border bg-raise p-7">
                <legend className="mb-1 flex items-center gap-2.5 px-1 font-display text-lg font-semibold text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold font-display text-xs text-[#1a1206]">3</span>
                  Pagamento
                </legend>

                <div className="flex gap-2.5">
                  <PayTab active={payment === "card"} onClick={() => setPayment("card")} icon={CreditCard} label="Cartão de crédito" />
                  <PayTab active={payment === "pix"} onClick={() => setPayment("pix")} icon={QrCode} label="Pix" />
                </div>

                {payment === "card" ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Número do cartão" placeholder="0000 0000 0000 0000" full />
                    <Field label="Nome impresso no cartão" placeholder="Como está no cartão" full />
                    <Field label="Validade" placeholder="MM/AA" />
                    <Field label="CVV" placeholder="000" />
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3 rounded-soft border border-dashed border-border p-6 text-center">
                    <div
                      className="h-[130px] w-[130px] rounded-soft opacity-90"
                      style={{
                        backgroundImage:
                          "repeating-conic-gradient(#f2efe6 0% 25%, #0a1017 0% 50%)",
                        backgroundSize: "14px 14px",
                      }}
                      aria-hidden="true"
                    />
                    <p className="font-body text-sm text-foreground/85">
                      Escaneie o QR Code ou copie o código Pix
                    </p>
                    <code className="w-full break-all rounded-soft bg-background px-3 py-2 font-mono text-[0.68rem] text-muted">
                      00020126PIX-SIMULACAO-NAO-USAR-000000000000
                    </code>
                  </div>
                )}
              </fieldset>

              <button
                type="submit"
                className="w-full rounded-soft bg-gradient-to-b from-gold-soft to-gold px-8 py-4 text-center font-body text-sm font-bold text-[#1a1206] transition-transform duration-200 ease-soft hover:-translate-y-0.5"
              >
                Finalizar compra simulada — R$ {formatBRL(siteConfig.price.current)}
              </button>
            </form>

            <aside className="sticky top-24 flex flex-col gap-5 rounded-soft border border-border bg-raise p-7">
              <div className="flex gap-4">
                <img
                  src="/images/livro-capa.webp"
                  alt={siteConfig.bookTitle}
                  className="h-20 w-16 rounded-soft border border-border object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div>
                  <p className="font-display text-base font-semibold text-foreground">{siteConfig.bookTitle}</p>
                  <p className="font-body text-xs text-muted">Capa física · {siteConfig.authorName}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t border-border pt-4 font-body text-sm text-muted">
                <div className="flex justify-between">
                  <span>Livro</span>
                  <span>R$ {formatBRL(siteConfig.price.current)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>Grátis</span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 font-body text-base font-bold text-foreground">
                  <span>Total</span>
                  <span className="font-display text-2xl text-gold-soft">
                    R$ {formatBRL(siteConfig.price.current)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 border-t border-border pt-4 font-body text-xs text-muted">
                <span className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                  Simulação — sem processamento real de pagamento
                </span>
                <span className="flex items-start gap-2">
                  <Truck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                  Envio para todo o Brasil (em produção)
                </span>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  full,
}: {
  label: string;
  placeholder: string;
  type?: string;
  full?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="font-body text-xs text-muted">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className="rounded-soft border border-border bg-background px-3.5 py-3 font-body text-sm text-foreground placeholder:text-muted/60 focus:border-teal focus:outline-none"
      />
    </label>
  );
}

function PayTab({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof CreditCard;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-1 items-center justify-center gap-2 rounded-soft border px-4 py-3 font-body text-sm font-semibold transition-colors duration-200 ${
        active
          ? "border-teal bg-teal/10 text-teal"
          : "border-border bg-background text-muted hover:border-white/30"
      }`}
    >
      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      {label}
    </button>
  );
}
