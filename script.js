/* ══════════════════════════════════════════════════════
   ⚙️  CONFIGURAÇÕES — edite antes de subir no Vercel
   ══════════════════════════════════════════════════════ */
const WHATSAPP = "5551999999999";   // ← número com DDI+DDD sem espaços
const EMAIL    = "seu@email.com";  // ← seu e-mail

/* ══════════════════════════════════════════════════════ */

const IG_URL = "https://www.instagram.com/eukaroluz/";

/* ── Data ─────────────────────────────────────────────── */
const REELS = [
  { id: "DV5-7-jEWsG",  label: "Lifestyle"   },
  { id: "DV3fLLmkZTw",  label: "Vestuário"   },
  { id: "DVRmMeDEsVO",  label: "Alimentos"   },
  { id: "DVPGL8nktho",  label: "Serviços"    },
  { id: "DVQ-L52kfb4",  label: "Marketing"   },
  { id: "DU38O8KktS1",  label: "Criativo"    },
  { id: "DUa8UiVkdTj",  label: "Presentes"   },
  { id: "DTsolZWEcZc",  label: "Engajamento" },
  { id: "DScVVNFkufO",  label: "Mercado"     },
  { id: "DRAaSELEnfP",  label: "Moda"        },
];

const PARTNERS = [
  { name: "Pri Store",       logo: "images/logos/pri-store-logo.png",      cat: "Vestuário",            ig: "https://www.instagram.com/pristtore_/"       },
  { name: "Tropical",        logo: "images/logos/tropical-logo.png",       cat: "Lancheria & Sorvetes", ig: null                                          },
  { name: "LAVEI",           logo: "images/logos/lavei-logo.jpg",          cat: "Lavanderia",           ig: null                                          },
  { name: "Voke Agency",     logo: "images/logos/voke-agency-logo.png",    cat: "Agência de Marketing", ig: "https://www.instagram.com/agencyvoke/"        },
  { name: "Domingues Mimos", logo: "domingues-mimos-gift-store-logo.jpg",  cat: "Loja de Presentes",    ig: null                                          },
  { name: "Teacher Hely",    logo: null,                                   cat: "Educação",             ig: "https://www.instagram.com/teacherhely/"       },
  { name: "Point do Açaí",   logo: null,                                   cat: "Alimentação",          ig: "https://www.instagram.com/point.doacai26/"    },
  { name: "D. Kaspper",      logo: null,                                   cat: "Moda & Lifestyle",     ig: "https://www.instagram.com/dienifer_kaspper/"  },
];

const GALLERY = [
  { src: "images/dominguesmimos.jpg",  alt: "Domingues Mimos",  label: "Presentes", tall: true  },
  { src: "images/xis.jpg",             alt: "Tropical",          label: "Alimentos", tall: false },
  { src: "images/karol-photo-new.jpg", alt: "Pri Store",         label: "Vestuário", tall: false },
  { src: "images/karolhero.jpg",       alt: "Lifestyle",         label: "Lifestyle", tall: true  },
];

/* ── Helpers ──────────────────────────────────────────── */
function waLink(msg = "") {
  return `https://wa.me/${WHATSAPP}${msg ? "?text=" + encodeURIComponent(msg) : ""}`;
}

function initials(name) {
  return name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

/* ── Init ─────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {

  /* ── Fill links ─────────────────────────────────────── */
  const WA_PARCERIA   = waLink("Olá Karol! Vi seu portfólio e gostaria de conversar sobre uma parceria para minha marca.");
  const WA_GERAL      = waLink("Olá Karol! Gostaria de conversar sobre uma parceria.");
  const WA_CONTEUDO   = waLink("Olá Karol! Gostaria de conversar sobre uma parceria de conteúdo para minha marca.");
  const WA_PARCEIRO   = waLink("Olá Karol! Gostaria de ser uma marca parceira.");

  document.getElementById("tb-wa").href            = waLink();
  document.getElementById("tb-email").href          = `mailto:${EMAIL}`;
  document.getElementById("nav-cta").href           = WA_GERAL;
  document.getElementById("hero-wa").href           = WA_PARCERIA;
  document.getElementById("hero-email").href        = `mailto:${EMAIL}`;
  document.getElementById("mob-wa").href            = WA_GERAL;
  document.getElementById("mob-email").href         = `mailto:${EMAIL}`;
  document.getElementById("ig-link").href           = IG_URL;
  document.getElementById("partners-cta-link").href = WA_PARCEIRO;
  document.getElementById("contato-wa").href        = WA_CONTEUDO;
  document.getElementById("footer-ig").href         = IG_URL;
  document.getElementById("footer-wa").href         = waLink();
  document.getElementById("footer-email").href      = `mailto:${EMAIL}`;
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  /* ── Build reels ────────────────────────────────────── */
  const reelsTrack = document.getElementById("reels-track");
  REELS.forEach(reel => {
    reelsTrack.insertAdjacentHTML("beforeend", `
      <div class="reel-item">
        <div class="reel-box glass">
          <iframe
            src="https://www.instagram.com/reel/${reel.id}/embed/"
            width="300" height="590"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    `);
  });

  /* ── Build gallery ──────────────────────────────────── */
  const galleryGrid = document.getElementById("gallery-grid");
  GALLERY.forEach(photo => {
    galleryGrid.insertAdjacentHTML("beforeend", `
      <div class="gallery-item${photo.tall ? " tall" : ""}">
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
        <div class="gallery-label glass">${photo.label}</div>
      </div>
    `);
  });

  /* ── Build partners ─────────────────────────────────── */
  const partnersGrid = document.getElementById("partners-grid");
  PARTNERS.forEach(p => {
    const logoHTML = p.logo
      ? `<img class="partner-logo" src="${p.logo}" alt="Logo ${p.name}" loading="lazy">`
      : `<div class="partner-initials">${initials(p.name)}</div>`;

    const igHTML = p.ig
      ? `<div class="partner-ig">
           <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
           </svg>
           <span>Ver perfil</span>
         </div>`
      : "";

    const tag  = p.ig ? "a" : "div";
    const attr = p.ig ? `href="${p.ig}" target="_blank" rel="noopener noreferrer"` : "";

    partnersGrid.insertAdjacentHTML("beforeend", `
      <${tag} class="partner-card glass" ${attr}>
        ${logoHTML}
        <div>
          <div class="partner-name">${p.name}</div>
          <div class="partner-cat">${p.cat}</div>
        </div>
        ${igHTML}
      </${tag}>
    `);
  });

  /* ── Nav sticky glass ───────────────────────────────── */
  const nav = document.getElementById("main-nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });

  /* ── Hamburger menu ─────────────────────────────────── */
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  function openMenu() {
    hamburger.classList.add("open");
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
    hamburger.setAttribute("aria-label", "Fechar menu");
  }

  function closeMenu() {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
    hamburger.setAttribute("aria-label", "Abrir menu");
  }

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
  });

  /* Close menu when any mobile nav link is clicked */
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  /* Close menu when CTA buttons in mobile menu are clicked */
  document.getElementById("mob-wa").addEventListener("click", closeMenu);
  document.getElementById("mob-email").addEventListener("click", closeMenu);

  /* Close menu on ESC */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) closeMenu();
  });

  /* ── Copy email ─────────────────────────────────────── */
  const btnEmail = document.getElementById("btn-email");
  btnEmail.addEventListener("click", () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      btnEmail.classList.add("copied");
      btnEmail.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        E-mail copiado!
      `;
      setTimeout(() => {
        btnEmail.classList.remove("copied");
        btnEmail.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copiar e-mail
        `;
      }, 2200);
    });
  });

});
