# OBRA — Landing page conceito

Site de um **estúdio criativo fictício** ("faz tudo que acontece numa tela, e além"),
inspirado na linguagem visual de produtoras premium europeias — nenhum texto, logo, case
ou nome copiado de nenhuma produtora real.

> Este projeto **substituiu** o site do livro "O Elo Mais Frágil" (Dr. Fábio Thuler) neste
> repositório, a pedido do usuário. O histórico do site antigo continua disponível nos
> commits anteriores do Git, caso precise recuperá-lo.

## O que é

Página única (`index.html`), sem framework — HTML/CSS/JS puro, sem imagens externas
(gradientes, ruído e formas em CSS). Preto absoluto dominante, tipografia editorial gigante
(Archivo + Instrument Serif), um único acento verde-limão.

Seções: header + menu fullscreen · hero com disciplinas clicáveis · manifesto com revelação
de texto no scroll · /Capacidades (hover troca mídia de fundo) · /Trabalhos (grid assimétrico,
cursor customizado, filtro por disciplina) · /Novidades (cards horizontais arrastáveis) ·
newsletter com marquee · footer com as cidades do estúdio.

## Rodar localmente

Pré-requisito: Node.js 18+.

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # build de produção em dist/
npm run preview
```

Como é uma página estática, também dá pra abrir `index.html` direto no navegador sem
instalar nada — só as fontes do Google Fonts precisam de internet.

## Estrutura

```
index.html          -> tudo: markup, <style> e <script> inline
public/
  favicon.svg
  og-image.jpg       -> miniatura ao compartilhar (1200×630)
  robots.txt
```

## Se quiser transformar num site real

Hoje é um projeto conceito/fictício. Para virar um site de verdade, trocar:

| O que | Onde |
|---|---|
| Nome do estúdio (se "OBRA" não for o definitivo) | busca e troca em `index.html` (logo, `<title>`, meta tags, rodapé) |
| E-mail de contato (`ola@obra.studio`) | `index.html` — vários links `mailto:` |
| Redes sociais (hoje apontam para dentro da própria página) | rodapé em `index.html` |
| Domínio | `index.html` (`canonical`, Open Graph) |
| Cases e nomes de diretores (hoje fictícios) | seção `/Trabalhos` em `index.html` |

## Acessibilidade

- `prefers-reduced-motion` respeitado (loader, marquee, revelações, parallax)
- Menu fullscreen com `aria-modal`, trap de teclado e fechamento por `Escape`
- Cursor customizado desativado em telas de toque (mantém o cursor nativo)
- `:focus-visible` visível em todos os elementos interativos
- Contraste ajustado para os textos grandes em tons "apagados" (`--faint`)
