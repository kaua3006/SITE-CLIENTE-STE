# Pendências antes de publicar — O Elo Mais Frágil (Dr. Fábio Thuler)

Site montado a partir do Instagram [@drfabiothuler](https://www.instagram.com/drfabiothuler),
dos sites [fabiothuler.com.br](https://www.fabiothuler.com.br/) e
[fabiothuler.care](https://fabiothuler.care/), da ficha do livro na Amazon, e das 10 fotos que
você colocou em `FOTOS\`. O que não estava confirmado ficou marcado como PENDENTE no código.

## 1. Dados a confirmar

| Item | Situação | Onde ajustar |
|---|---|---|
| **Preço do livro** | **Faltando** — usei R$ 59,90 (de R$ 79,90) como exemplo | `src/config/site.ts` → `price` |
| **CRM do Dr. Fábio** | **Faltando** — não encontrei publicado em nenhum lugar | `src/config/site.ts` → `crm` |
| Prazo de entrega | **Faltando** | `src/data/faq.ts` |
| Endereço do consultório | OK — Rua Costa Rica, 34, Bairro Frezzarim, Americana - SP (confirmado na receita e no site fabiothuler.com.br) | `src/config/site.ts` → `clinic` |
| Telefones | OK — (19) 3406-5417, (19) 3461-1071, WhatsApp (19) 99854-4030 | `src/config/site.ts` |

## 2. Vídeos

Você pediu um espaço para vídeos dele explicando o livro. **Ainda não tenho os arquivos.**
Hoje os 2 cards de vídeo (`src/data/videos.ts`) usam fotos como pôster e, ao clicar, abrem o
canal do YouTube dele (`youtube.com/@fabiothuler237`) — não tocam um vídeo de verdade.

Quando tiver os vídeos: me manda os arquivos `.mp4`, ou os links exatos do YouTube/Instagram
que quer usar, que eu troco o card por um player real (ou embed).

## 3. Checkout — é uma simulação

A rota `/checkout` é só uma demonstração visual, como você pediu ("para simular"):
- O formulário (dados, endereço, cartão/Pix) não envia nada, não salva nada
- O botão "Finalizar compra" só mostra uma tela de sucesso local
- Tem um aviso fixo no topo da página deixando isso claro

**Antes de vender de verdade**, essa etapa precisa virar um checkout real — o caminho mais comum
pra livro físico é usar uma plataforma pronta (Hotmart, Kiwify, Mercado Pago Checkout Pro) que
já cuida de pagamento, nota fiscal e frete, e só linkar o botão "Quero garantir o meu" pra lá.
Se preferir um checkout próprio, dá pra integrar um gateway (Stripe, Pagar.me) diretamente —
mas isso envolve backend e é um projeto à parte deste site.

## 4. Depoimentos

Não há depoimentos de leitores/pacientes ainda. A seção "Prova real" (`src/components/Proof.tsx`)
está sinalizando isso — sem inventar nada. Assim que tiver 2-3 depoimentos reais (com autorização),
eu adiciono.

## 5. Imagens

Processei as 10 fotos da pasta `FOTOS\` — detalhes de onde cada uma foi usada (e a que **não**
usei, a "RECEITA DO DR") em `public/images/README.md`.

## 6. Para rodar o site

Precisa instalar o Node.js (versão 18+). Depois, na pasta do projeto:

```
npm install
npm run dev
```
