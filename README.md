# walberjr.github.io

Site pessoal: https://walberjr.github.io

## Onde editar

| O quê | Arquivo |
|---|---|
| Texto da página inicial, links, publicações | `index.html` (procure por `EDITE`) |
| Menu do topo e menu lateral do tutorial QE | `assets/js/site.js` |
| Cores | `assets/css/style.css` (bloco `:root` no topo) |
| Tutorial Quantum ESPRESSO | `espresso/*.html` |
| Tutorial ORCA | `orca/index.html` |
| Foto | `assets/img/walber.webp` |

Para adicionar uma página ao tutorial QE: copie um arquivo de `espresso/`, troque o conteúdo
dentro de `<main class="content">` e adicione o nome dele na lista `QE` em `assets/js/site.js`.

Site estático puro (HTML + CSS + JS), sem etapa de build.
