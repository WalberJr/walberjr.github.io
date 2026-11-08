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
    ["Programas", "index.html#programas", "programas"],
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
    ["Guia rápido (português)", [
      ["Introdução", "index.html"],
      ["Instalação rápida", "instalacao.html"],
      ["Estrutura do input", "input.html"],
      ["Primeiro cálculo SCF", "scf.html"],
      ["Testes de convergência", "convergencia.html"],
      ["Otimização de estrutura", "relax.html"],
      ["Estrutura de bandas", "bandas.html"],
      ["DOS e PDOS", "dos.html"],
      ["Links úteis", "referencias.html"],
    ]],
    ["Tutorial completo", [
      ["Boas-vindas", "ref-welcome.html"],
    ]],
    ["Configuração", [
      ["Instalação", "setup-install.html"],
      ["Computação de alto desempenho", "setup-hpc.html"],
      ["Jupyter notebooks", "setup-jupyter.html"],
      ["Estrutura cristalina", "setup-crystal-structure.html"],
      ["Pseudopotenciais", "setup-pseudo-potential.html"],
    ]],
    ["Teoria", [
      ["O problema de muitos corpos", "theory-problem-statement.html"],
      ["Hartree-Fock", "theory-hartree-fock.html"],
      ["Visão geral da DFT", "theory-dft.html"],
      ["Base de Wannier", "theory-wannier.html"],
      ["Complexidade computacional", "theory-complexity.html"],
    ]],
    ["Prática", [
      ["Cálculo SCF", "hands-on-scf.html"],
      ["Testes de convergência", "hands-on-convergence.html"],
      ["Otimização de estrutura", "hands-on-structure-optimization.html"],
      ["Cálculo de DOS", "hands-on-dos.html"],
      ["Estrutura de bandas", "hands-on-bands.html"],
      ["Al (metal)", "hands-on-aluminum.html"],
      ["PDOS", "hands-on-pdos.html"],
      ["DOS resolvida em k", "hands-on-kpdos.html"],
      ["Grafeno", "hands-on-graphene.html"],
      ["GaAs", "hands-on-gaas.html"],
      ["Fe (magnético)", "hands-on-fe.html"],
      ["Ni (bandas com spin)", "hands-on-ni.html"],
      ["Cálculo DFT+U", "hands-on-dft-u.html"],
      ["Acoplamento spin-órbita", "hands-on-soc.html"],
      ["Bi₂Se₃ (isolante topológico)", "hands-on-bi2se3.html"],
      ["Constante dielétrica", "hands-on-epsilon.html"],
      ["Superfície de Fermi", "hands-on-fermi-surface.html"],
      ["Dispersão de fônons", "hands-on-phonon.html"],
      ["Método de Wannier", "hands-on-wannier.html"],
      ["Dinâmica molecular (PW)", "hands-on-md.html"],
    ]],
    ["Referências", [
      ["Recursos", "ref-resources.html"],
      ["Licença", "ref-license.html"],
    ]],
  ];

  const sidebar = document.querySelector(".sidebar[data-docs='espresso']");
  if (sidebar) {
    const here = location.pathname.split("/").pop() || "index.html";
    const flat = QE.flatMap(([, items]) => items);
    sidebar.innerHTML = QE.map(([group, items]) =>
      `<h4>${group}</h4>` + items.map(([t, h]) =>
        `<a href="${h}" class="${h === here ? "active" : ""}">${t}</a>`).join("")).join("");

    const act = sidebar.querySelector("a.active");
    if (act) sidebar.scrollTop = act.offsetTop - sidebar.clientHeight / 2;

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

  // ---- Download do KStudio: escolhe o arquivo conforme o sistema do visitante ----
  const dl = document.getElementById("kstudio-dl");
  if (dl && /Linux/i.test(navigator.userAgent) && !/Android/i.test(navigator.userAgent)) {
    dl.href = dl.href.replace("KStudio-Windows-x64.exe", "KStudio-Linux-x86_64.AppImage");
    document.getElementById("kstudio-os").textContent = "Linux";
  }

  // ---- Rodapé ----
  const f = document.createElement("footer");
  f.innerHTML = `© ${new Date().getFullYear()} Walber Gonçalves Guimarães Júnior · Hospedado no GitHub Pages`;
  document.body.appendChild(f);
})();
