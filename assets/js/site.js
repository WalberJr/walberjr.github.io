// Cabeçalho, barra lateral e botões de copiar — tudo gerado aqui
// para que cada menu seja editado em UM só lugar.
(function () {
  const root = document.body.dataset.root || "./";
  const section = document.body.dataset.section || "home";

  // ---- Menu principal ----
  const NAV = [
    ["Início", "index.html", "home"],
    ["Pesquisa", "index.html#pesquisa", "pesquisa"],
    ["Formação", "index.html#formacao", "formacao"],
    ["Publicações", "index.html#publicacoes", "pub"],
    ["KStudio", "index.html#kstudio", "kstudio"],
    ["Quantum ESPRESSO", "espresso/index.html", "espresso"],
    ["ORCA", "orca/index.html", "orca"],
    ["Contato", "index.html#contato", "contato"],
  ];

  const header = document.createElement("header");
  header.className = "topbar";
  header.innerHTML = `
    <div class="inner">
      <a class="brand" href="${root}index.html"><span>W</span>alber Guimarães Jr.</a>
      <button class="menu-btn" aria-label="Abrir menu">☰</button>
      <nav class="nav">
        ${NAV.map(([t, h, k]) =>
          `<a href="${root}${h}" class="${k === section ? "active" : ""}">${t}</a>`).join("")}
      </nav>
    </div>`;
  document.body.prepend(header);
  header.querySelector(".menu-btn").onclick = () =>
    header.querySelector(".nav").classList.toggle("open");

  // ---- Barra lateral do tutorial de Quantum ESPRESSO ----
  const QE = [
    ["Começando", [
      ["Introdução", "index.html"],
      ["Instalação", "instalacao.html"],
      ["Estrutura do input", "input.html"],
    ]],
    ["Cálculos básicos", [
      ["Primeiro cálculo SCF", "scf.html"],
      ["Testes de convergência", "convergencia.html"],
      ["Otimização de estrutura", "relax.html"],
    ]],
    ["Propriedades eletrônicas", [
      ["Estrutura de bandas", "bandas.html"],
      ["DOS e PDOS", "dos.html"],
    ]],
    ["Referências", [
      ["Links úteis", "referencias.html"],
    ]],
  ];

  const sidebar = document.querySelector(".sidebar[data-docs='espresso']");
  if (sidebar) {
    const here = location.pathname.split("/").pop() || "index.html";
    const flat = QE.flatMap(([, items]) => items);
    sidebar.innerHTML = QE.map(([group, items]) =>
      `<h4>${group}</h4>` + items.map(([t, h]) =>
        `<a href="${h}" class="${h === here ? "active" : ""}">${t}</a>`).join("")).join("");

    // Navegação anterior / próximo
    const i = flat.findIndex(([, h]) => h === here);
    const pager = document.querySelector(".pager");
    if (pager && i >= 0) {
      const prev = flat[i - 1], next = flat[i + 1];
      pager.innerHTML =
        (prev ? `<a href="${prev[1]}"><small>« Anterior</small>${prev[0]}</a>` : "<span></span>") +
        (next ? `<a class="next" href="${next[1]}"><small>Próximo »</small>${next[0]}</a>` : "<span></span>");
    }
  }

  // ---- Botão "copiar" nos blocos de código ----
  document.querySelectorAll(".content pre").forEach((pre) => {
    const b = document.createElement("button");
    b.className = "copy-btn";
    b.textContent = "copiar";
    b.onclick = () => {
      navigator.clipboard.writeText(pre.innerText.replace(/copiar$|copiado!$/, "").trim());
      b.textContent = "copiado!";
      setTimeout(() => (b.textContent = "copiar"), 1500);
    };
    pre.appendChild(b);
  });

  // ---- Rodapé ----
  const f = document.createElement("footer");
  f.innerHTML = `© ${new Date().getFullYear()} Walber Gonçalves Guimarães Júnior · Hospedado no GitHub Pages`;
  document.body.appendChild(f);
})();
