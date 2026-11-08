# walberjr.github.io

Site pessoal: https://walberjr.github.io

## Onde editar

| O quê | Arquivo |
|---|---|
| Texto da página inicial, links, publicações | `index.html` (procure por `EDITE`) |
| Menu do topo e menu lateral do tutorial QE | `assets/js/site.js` |
| Cores | `assets/css/style.css` (bloco `:root` no topo) |
| Programas (KStudio, MeChemical, COAT) | `index.html`, seção `PROGRAMAS`; logos em `assets/img/` |
| Tutorial Quantum ESPRESSO, guia rápido (PT) | `espresso/index.html`, `instalacao.html`, `scf.html`… |
| Tutorial Quantum ESPRESSO, completo | `espresso/setup-*.html`, `theory-*.html`, `hands-on-*.html`, `ref-*.html`; imagens em `espresso/img/` |
| Tutorial ORCA | `orca/index.html` |
| Foto | `assets/img/walber.webp` |

Para adicionar uma página ao tutorial QE: copie um arquivo de `espresso/`, troque o conteúdo
dentro de `<main class="content">` e adicione o nome dele na lista `QE` em `assets/js/site.js`.

Site estático puro (HTML + CSS + JS), sem etapa de build.

## Créditos

O tutorial completo de Quantum ESPRESSO (`espresso/setup-*`, `theory-*`, `hands-on-*`, `ref-*`
e `espresso/img/`) foi adaptado do [Quantum Espresso Tutorial](https://pranabdas.github.io/espresso/)
de Pranab Das, sob licença [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
As fórmulas usam o [KaTeX](https://katex.org) (MIT), em `assets/vendor/katex/`.
