Imagens do site. Mantenha exatamente estes nomes de arquivo (ou atualize as referências nos
componentes correspondentes). Enquanto um arquivo não existir, a `<img>` some silenciosamente
(sem quebrar o layout).

## Já colocadas (processadas a partir da pasta FOTOS)

| Arquivo | Onde aparece | Origem |
|---|---|---|
| `hero-livro.webp` (1100×1375) | Hero + pôster de vídeo 2 | DR E O LIVRO |
| `autor-retrato.webp` (1000×1250) | Seção "O autor" + pôster de vídeo 1 | DR DE JALECO |
| `autor-tecnica.webp` (1000×1250) | Reserva — cirurgia/técnica | DR MEXENDO NA MAQUINA |
| `autor-atendendo.webp` (1000×1250) | Reserva — em atendimento (P&B) | DR ATENDENDO |
| `autor-feliz.webp` (1000×1250) | Reserva — retrato casual (P&B) | DR FELIZ |
| `livro-capa.webp` (900×1125) | Seção "O livro" + resumo do checkout | DR E O LIVRO APROXIMADO (recorte isolado da capa) |
| `livro-assinado.webp` (900×1125) | Seção "Prova real" | ASSINATURA NA CAPA |
| `leao-textura.webp` (1600×700) | Reserva — textura/banner decorativo | LEAO DE PAREDE |
| `../og-image.jpg` (1200×630) | Miniatura ao compartilhar (WhatsApp/redes) | montagem sobre a capa do livro |

`RECEITA DO DR.JPG` não virou imagem do site — só usei o endereço e os telefones que estavam
nela (letterhead de outra marca do consultório, "Centro Diagnóstico em Gastroenterologia").

## Ainda faltam

| Item | Detalhe |
|---|---|
| Vídeos reais | `src/data/videos.ts` — hoje os cards de vídeo levam para o canal do YouTube (`@fabiothuler237`) em vez de tocar um vídeo. Trocar por embed real quando tiver os arquivos. |
| CRM do Dr. Fábio | Não encontrado publicado. Aparece como "CRM a confirmar" no rodapé (`src/config/site.ts` → `crm`). |
| Preço do livro | Hoje R$ 59,90 (de R$ 79,90) é só exemplo. Ver `src/config/site.ts` → `price`. |
| Depoimentos de leitores | Nenhum disponível ainda — sinalizado na seção "Prova real". |

Para trocar qualquer imagem: substitua o arquivo com o mesmo nome nesta pasta e dê `git push`.
