/* Este arquivo monta a página a partir de config.js e icons.js.
   Não é necessário editar nada aqui — todo o conteúdo é alterado em config.js. */

(function () {

  function escapeHtml(str) {
    if (!str) return "";
    const d = document.createElement("div");
    d.innerText = str;
    return d.innerHTML;
  }

  /* ---------- Cabeçalho ---------- */
  function montarCabecalho() {
    const marca = document.getElementById("marca");
    const iniciais = RESTAURANTE.nome
      .split(" ")
      .map(p => p[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();

    if (RESTAURANTE.logo) {
      const img = document.createElement("img");
      img.src = RESTAURANTE.logo;
      img.alt = "Logotipo " + RESTAURANTE.nome;
      img.onerror = function () {
        marca.innerHTML = `<div class="logo-fallback">${iniciais}</div>`;
      };
      marca.appendChild(img);
    } else {
      marca.innerHTML = `<div class="logo-fallback">${iniciais}</div>`;
    }

    document.getElementById("nome-restaurante").textContent = RESTAURANTE.nome;
    document.getElementById("subtitulo-restaurante").textContent = RESTAURANTE.subtitulo || "";
    document.title = "Cardápio — " + RESTAURANTE.nome;
  }

  /* ---------- Navegação ---------- */
  function montarNav() {
    const nav = document.getElementById("nav-lista");
    nav.innerHTML = MENU_SECOES.map(sec =>
      `<a href="#${sec.id}" data-id="${sec.id}">${escapeHtml(sec.titulo)}</a>`
    ).join("");
  }

  function ativarNavAoRolar() {
    const links = document.querySelectorAll(".nav-categorias-lista a");
    const secoes = MENU_SECOES.map(s => document.getElementById(s.id)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = document.querySelector(`.nav-categorias-lista a[data-id="${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove("ativo"));
          link.classList.add("ativo");
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

    secoes.forEach(sec => observer.observe(sec));
  }

  /* ---------- Um item do cardápio ---------- */
  function montarItem(item, iconeCategoria) {
    const temImagem = !!item.imagem;
    const iconeSvg = ICONES[iconeCategoria] || ICONES.prato;

    const imagemHtml = temImagem
      ? `<img src="${item.imagem}" alt="${escapeHtml(item.nome)}">`
      : iconeSvg;

    const metaPartes = [];
    if (item.rendimento) metaPartes.push(`<span><b>Rendimento</b> · ${escapeHtml(item.rendimento)}</span>`);
    if (item.acompanhamento) metaPartes.push(`<span><b>Acompanha</b> · ${escapeHtml(item.acompanhamento)}</span>`);
    if (item.modoPreparo) metaPartes.push(`<span><b>Preparo</b> · ${escapeHtml(item.modoPreparo)}</span>`);

    return `
      <div class="item">
        <div class="item-imagem" data-fallback-icon="${iconeCategoria}">
          ${imagemHtml}
        </div>
        <div class="item-texto">
          <div class="item-nome-preco">
            <span class="item-nome">${escapeHtml(item.nome)}</span>
            <span class="item-pontilhado"></span>
            ${item.preco ? `<span class="item-preco">R$ ${escapeHtml(item.preco)}</span>` : ""}
          </div>
          ${item.descricao ? `<p class="item-descricao">${escapeHtml(item.descricao)}</p>` : ""}
          ${metaPartes.length ? `<div class="item-meta">${metaPartes.join("")}</div>` : ""}
        </div>
      </div>
    `;
  }

  /* Corrige o fallback de imagem quebrada sem usar onerror inline complexo */
  function corrigirImagensQuebradas() {
    document.querySelectorAll(".item-imagem img").forEach(img => {
      img.addEventListener("error", () => {
        const wrap = img.closest(".item-imagem");
        const cat = wrap.getAttribute("data-fallback-icon");
        wrap.innerHTML = ICONES[cat] || ICONES.prato;
      });
    });
  }

  /* ---------- Seções ---------- */
  function montarSecoes() {
    const main = document.getElementById("menu-conteudo");
    main.innerHTML = MENU_SECOES.map((sec, i) => `
      <section class="secao" id="${sec.id}">
        <div class="secao-cabecalho">
          <span class="num">${String(i + 1).padStart(2, "0")}</span>
          <h2>${escapeHtml(sec.titulo)}</h2>
          <span class="traco"></span>
        </div>
        <div class="itens-grade">
          ${sec.itens.map(item => montarItem(item, sec.icone)).join("")}
        </div>
      </section>
    `).join("");
  }

  /* ---------- Rodapé ---------- */
  function montarRodape() {
    document.getElementById("rodape-nome").textContent = RESTAURANTE.nome;
    document.getElementById("rodape-endereco").textContent = RESTAURANTE.endereco || "";
    document.getElementById("rodape-horario").textContent = RESTAURANTE.horario || "";

    const mapaWrap = document.getElementById("rodape-mapa");
    if (RESTAURANTE.mapsEmbedUrl) {
      mapaWrap.innerHTML = `
        <iframe src="${RESTAURANTE.mapsEmbedUrl}" loading="lazy" allowfullscreen></iframe>
        ${RESTAURANTE.mapsLinkUrl ? `<a class="ver-mapa" href="${RESTAURANTE.mapsLinkUrl}" target="_blank" rel="noopener">Ver rota no Google Maps →</a>` : ""}
      `;
    } else if (RESTAURANTE.mapsLinkUrl) {
      mapaWrap.innerHTML = `<a class="ver-mapa" href="${RESTAURANTE.mapsLinkUrl}" target="_blank" rel="noopener">Ver localização no Google Maps →</a>`;
    }

    const social = RESTAURANTE.redesSociais || {};
    const icones = {
      facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.3C16.3 4.2 15.4 4.1 14.4 4.1c-2.5 0-4.2 1.5-4.2 4.3V10.5H7.7v3h2.5V21Z"/></svg>`,
      instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.3" cy="7.7" r="0.9" fill="currentColor" stroke="none"/></svg>`,
      whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4a8 8 0 0 0-6.9 12L4 20l4.2-1.1A8 8 0 1 0 12 4Zm0 1.6a6.4 6.4 0 0 1 5.4 9.8l.1.2.9 3.2-3.3-.9-.2.1A6.4 6.4 0 1 1 12 5.6Zm-2.6 3c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.1 1.8 2.9 4.4 3.9 2.2.9 2.6.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4-.3-.1-1.5-.7-1.8-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4Z"/></svg>`
    };

    const socialWrap = document.getElementById("rodape-social");
    socialWrap.innerHTML = Object.keys(icones)
      .filter(chave => social[chave])
      .map(chave => `<a href="${social[chave]}" target="_blank" rel="noopener" aria-label="${chave}">${icones[chave]}</a>`)
      .join("");

    document.getElementById("rodape-base").textContent =
      `${RESTAURANTE.nome} — cardápio sujeito a alterações sem aviso prévio`;
  }

  /* ---------- Inicialização ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    montarCabecalho();
    montarNav();
    montarSecoes();
    montarRodape();
    corrigirImagensQuebradas();
    ativarNavAoRolar();
  });
})();
