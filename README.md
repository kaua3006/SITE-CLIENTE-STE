# O Elo Mais Frágil — Site do livro (Dr. Fábio Thuler)

Site institucional + página de vendas do livro **"O Elo Mais Frágil"**, do Dr. Fábio Thuler
(cirurgião digestivo, criador da Medicina do Elo Crítico). Inclui um **checkout simulado**
em `/checkout` para demonstração — não processa pagamentos reais.

Conceito visual: segue a própria capa do livro — azul-marinho quase preto, dourado e um brilho
ciano na corrente se rompendo. Tipografia Spectral (serifada, literária) + Plus Jakarta Sans.

> **Leia o `PENDENCIAS.md`** — lista tudo que ainda precisa ser confirmado (preço do livro, CRM,
> vídeos reais, depoimentos) antes de publicar de verdade.

## Tecnologias

- React 18 + TypeScript + Vite
- React Router (rota `/` e `/checkout`)
- Tailwind CSS
- Framer Motion (animações sutis, respeita `prefers-reduced-motion`)
- Lucide React (ícones lineares)

## Rodar o projeto

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # build de produção em dist/
npm run preview
```

## Estrutura

```
src/
  components/     -> Seções da página (Hero, AuthorAbout, Method, Videos, BookSection,
                      Proof, Offer, FaqSection, Header, Footer, ...)
  data/           -> Conteúdo estruturado (method, videos, faq, navigation)
  config/site.ts  -> Dados centrais (nome, WhatsApp, endereço do consultório, preço do livro)
  pages/
    Home.tsx      -> Página de vendas (rota "/")
    Checkout.tsx  -> Checkout simulado (rota "/checkout")
  App.tsx         -> Header + Router + Footer + botão flutuante de WhatsApp
  index.css       -> Tailwind + estilos globais (.gold-rule, .grain)
```

## O checkout é uma simulação

A rota `/checkout` (`src/pages/Checkout.tsx`) é só uma demonstração visual: o formulário não
envia nada para nenhum servidor, não salva nada e o botão "Finalizar compra" apenas mostra uma
tela de sucesso local. **Antes de publicar de verdade**, essa página precisa ser trocada por um
checkout real, ligado a um gateway de pagamento (Hotmart, Kiwify, Stripe, Mercado Pago etc.) —
isso é um passo de integração separado.

## O que substituir antes de publicar

Resumo — detalhado em `PENDENCIAS.md`.

| O que | Onde |
|---|---|
| Preço do livro | `src/config/site.ts` → `price` |
| CRM do Dr. Fábio | `src/config/site.ts` → `crm` |
| Vídeos reais | `src/data/videos.ts` |
| Depoimentos de leitores | `src/components/Proof.tsx` |
| Checkout real (gateway de pagamento) | `src/pages/Checkout.tsx` |
| Domínio / SEO | `index.html` (`canonical`, Open Graph, JSON-LD) |

## Acessibilidade e SEO

- Um único `<h1>` (Hero), hierarquia `<h2>`/`<h3>` nas demais seções
- `alt` descritivo nas imagens, `aria-label` em botões só com ícone
- `:focus-visible` visível, link "pular para o conteúdo"
- Metatags de título, descrição, Open Graph, Twitter Card e Schema.org (`Book` + `Person`)
- Respeita `prefers-reduced-motion`

## Responsividade

Mobile-first com Tailwind (`sm`/`md`/`lg`), pensado para 375 / 768 / 1024 / 1440 px.
