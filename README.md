# walberjr.github.io

Site pessoal: https://walberjr.github.io

## Onde editar

| O quê | Arquivo |
|---|---|
| Texto da página inicial, links, publicações | `index.html` (procure por `EDITE`) |
| Menu do topo e menus laterais dos tutoriais | `assets/js/site.js` |
| Cores | `assets/css/style.css` (bloco `:root` no topo) |
| Programas (KStudio, MeChemical, COAT) | `index.html`, seção `PROGRAMAS`; logos em `assets/img/` |
| Tutorial Quantum ESPRESSO | `espresso/index.html`, `setup-*.html`, `theory-*.html`, `hands-on-*.html`, `ref-*.html`; imagens em `espresso/img/` |
| Tutorial ORCA | `orca/*.html`; imagens em `orca/img/` |
| Foto | `assets/img/walber.webp` |

Para adicionar uma página a um tutorial: copie um arquivo de `espresso/` ou `orca/`, troque o conteúdo
dentro de `<main class="content">` e adicione o nome dele na lista `DOCS` em `assets/js/site.js`.

Site estático puro (HTML + CSS + JS), sem etapa de build.

## Créditos

O tutorial completo de Quantum ESPRESSO (`espresso/setup-*`, `theory-*`, `hands-on-*`, `ref-*`
e `espresso/img/`) foi adaptado do [Quantum Espresso Tutorial](https://pranabdas.github.io/espresso/)
de Pranab Das, sob licença [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
As fórmulas usam o [KaTeX](https://katex.org) (MIT), em `assets/vendor/katex/`.
