"use client"

import React, { useState, useEffect } from "react"
import {} from "react/jsx-runtime"

// ============================================================
// ⚙️  CONFIGURAÇÕES — edite aqui antes de subir no Vercel
// ============================================================
const WHATSAPP  = "5551996910253"   // Número com DDA, sem espaços/traços
const EMAIL     = "silvaluzkaroline@gmail.com"   // Seu e-mail de contato
const IG_URL    = "https://www.instagram.com/eukaroluz/"

// ============================================================

const REELS = [
  { id: "DV5-7-jEWsG",  label: "Lifestyle"  },
  { id: "DV3fLLmkZTw",  label: "Vestuário"  },
  { id: "DVRmMeDEsVO",  label: "Alimentos"  },
  { id: "DVPGL8nktho",  label: "Serviços"   },
  { id: "DVQ-L52kfb4",  label: "Marketing"  },
  { id: "DU38O8KktS1",  label: "Criativo"   },
  { id: "DUa8UiVkdTj",  label: "Presentes"  },
  { id: "DTsolZWEcZc",  label: "Engajamento" },
  { id: "DScVVNFkufO",  label: "Mercado"    },
  { id: "DRAaSELEnfP",  label: "Moda"       },
]

const PARTNERS: { name: string; logo: string | null; category: string; ig: string | null }[] = [
  { name: "Pri Store",        logo: "/images/logos/pri-store-logo.png",      category: "Vestuário",           ig: "https://www.instagram.com/pristtore_/"       },
  { name: "Tropical",         logo: "/images/logos/tropical-logo.png",       category: "Lancheria & Sorvetes",ig: null                                          },
  { name: "LAVEI",            logo: "/images/logos/lavei-logo.jpg",          category: "Lavanderia",          ig: null                                          },
  { name: "Voke Agency",      logo: "/images/logos/voke-agency-logo.png",    category: "Agência de Marketing",ig: "https://www.instagram.com/agencyvoke/"        },
  { name: "Domingues Mimos",  logo: "/domingues-mimos-gift-store-logo.jpg",  category: "Loja de Presentes",   ig: null                                          },
  { name: "Teacher Hely",     logo: null,                                    category: "Educação",            ig: "https://www.instagram.com/teacherhely/"       },
  { name: "Point do Açaí",    logo: null,                                    category: "Alimentação",         ig: "https://www.instagram.com/point.doacai26/"    },
  { name: "Dienifer Kaspper", logo: null,                                    category: "Moda & Lifestyle",    ig: "https://www.instagram.com/dienifer_kaspper/"  },
]

const GALLERY = [
  { src: "/images/dominguesmimos.jpg",  alt: "Domingues Mimos — Presentes", label: "Presentes", tall: true  },
  { src: "/images/xis.jpg",             alt: "Tropical — Alimentos",         label: "Alimentos", tall: false },
  { src: "/images/karol-photo-new.jpg", alt: "Pri Store — Vestuário",        label: "Vestuário", tall: false },
  { src: "/images/karolhero.jpg",       alt: "Karol Luz — Lifestyle",        label: "Lifestyle", tall: true  },
]

const WHY = [
  {
    icon: "🎯",
    title: "Conteúdo que vende",
    text: "Cada entrega é pensada estrategicamente para gerar resultado real: mais alcance, mais engajamento e mais vendas para o seu negócio.",
  },
  {
    icon: "⚡",
    title: "Processo simples e ágil",
    text: "Briefing claro, produção rápida e entrega no prazo. Você foca no seu negócio, eu cuido de criar o conteúdo certo para o seu público.",
  },
  {
    icon: "💎",
    title: "Autenticidade que converte",
    text: "UGC que parece real porque é. Conteúdo feito com cuidado para construir confiança genuína entre sua marca e os consumidores.",
  },
]

// ── Helpers ──────────────────────────────────────────────────
function waLink(msg = "") {
  return `https://wa.me/${WHATSAPP}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`
}

// ── Sub-components ───────────────────────────────────────────
function Reel({ id }: { id: string }) {
  return (
    <div className="reel-snap">
      <div
        className="glass reel-container"
        style={{ width: 300, height: 590 }}
      >
        <iframe
          src={`https://www.instagram.com/reel/${id}/embed/`}
          width={300}
          height={590}
          scrolling="no"
          frameBorder={0}
          allowTransparency
          allowFullScreen
          style={{
            border: "none",
            overflow: "hidden",
            display: "block",
          }}
          loading="lazy"
          title={`Reel ${id}`}
        />
      </div>
    </div>
  )
}

function PartnerInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #C94B76, #D9855A)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "var(--font-display)",
        fontSize: "1.4rem",
        fontWeight: 600,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────
export default function Page() {
  const [copied, setCopied] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── Top contact bar ───────────────────────────────── */}
      <div className="topbar">
        <span>📍 Igrejinha — RS, Brasil</span>
        <span style={{ opacity: 0.5 }}>|</span>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
        <span style={{ opacity: 0.5 }}>|</span>
        <a
          href={`mailto:${EMAIL}`}
          style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          E-mail
        </a>
      </div>

      {/* ── Navigation ────────────────────────────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          padding: "0 1.5rem",
          ...(navScrolled
            ? {
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(255,255,255,0.85)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              }
            : { background: "transparent" }),
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo/name */}
          <a
            href="#"
            style={{ textDecoration: "none" }}
          >
            <span
              className="font-display gradient-text"
              style={{ fontSize: "1.5rem", fontWeight: 600, fontStyle: "italic" }}
            >
              Karol Luz
            </span>
          </a>

          {/* Nav links - hidden on mobile */}
          <div
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            className="hidden md:flex"
          >
            <a href="#sobre" className="nav-link">Sobre</a>
            <a href="#portfolio" className="nav-link">Portfólio</a>
            <a href="#galeria" className="nav-link">Galeria</a>
            <a href="#parceiros" className="nav-link">Parceiros</a>
          </div>

          {/* CTA */}
          <a
            href={waLink("Olá Karol! Gostaria de conversar sobre uma parceria.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rose"
            style={{ fontSize: "0.82rem", padding: "0.65rem 1.25rem" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar comigo
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="mesh-bg"
        style={{
          minHeight: "92vh",
          display: "grid",
          gridTemplateColumns: "1fr",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            padding: "4rem 1.5rem 5rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            alignItems: "center",
            gap: "3rem",
          }}
          className="md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px]"
        >
          {/* Left: content */}
          <div className="fade-up" style={{ maxWidth: 580 }}>
            <div className="tag" style={{ marginBottom: "1.5rem" }}>
              <span>✦</span> UGC Creator · Igrejinha, RS
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.4rem)",
                fontWeight: 500,
                fontStyle: "italic",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                color: "var(--color-dark)",
              }}
            >
              Seu produto merece ser visto{" "}
              <span className="gradient-text">do jeito certo.</span>
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: 480,
              }}
            >
              Crio vídeos e fotos UGC que humanizam sua marca, geram
              engajamento real e impulsionam suas vendas. Do briefing à
              entrega — com 4+ anos de experiência no mercado digital.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <a
                href={waLink("Olá Karol! Vi seu portfólio e gostaria de conversar sobre uma parceria para minha marca.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rose"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Quero uma parceria
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Enviar proposta
              </a>
            </div>

            {/* Trust indicators */}
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[
                { num: "4+", label: "Anos de experiência" },
                { num: "10+", label: "Reels entregues" },
                { num: "8+", label: "Marcas atendidas" },
              ].map((s) => (
                <div key={s.num}>
                  <div
                    className="font-display"
                    style={{ fontSize: "1.8rem", fontWeight: 600, lineHeight: 1 }}
                  >
                    <span className="gradient-text">{s.num}</span>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--color-muted)", marginTop: 2 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo + floating card */}
          <div
            className="fade-up fade-up-delay-2"
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            {/* Photo frame */}
            <div
              style={{
                width: "100%",
                maxWidth: 420,
                aspectRatio: "3/4",
                borderRadius: "2rem",
                overflow: "hidden",
                boxShadow: "0 24px 80px rgba(0,0,0,0.14)",
                position: "relative",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/karolhero.jpg"
                alt="Karol Luz — Criadora de Conteúdo UGC"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(28,25,23,0.35) 0%, transparent 55%)",
                }}
              />
            </div>

            {/* Floating glass stat card */}
            <div
              className="glass"
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "-1.5rem",
                borderRadius: "1.25rem",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #C94B76, #D9855A)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                }}
              >
                🎬
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 500 }}>
                  Disponível para projetos
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-dark)" }}>
                  Resposta em até 24h
                </div>
              </div>
            </div>

            {/* Floating badge top right */}
            <div
              className="glass"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "-1rem",
                borderRadius: "1rem",
                padding: "0.75rem 1rem",
                textAlign: "center",
              }}
            >
              <div className="gradient-text font-display" style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1 }}>20</div>
              <div style={{ fontSize: "0.7rem", color: "var(--color-muted)", fontWeight: 500 }}>anos</div>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,75,118,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -60,
            left: -40,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,133,90,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </section>

      {/* ── SOBRE ─────────────────────────────────────────── */}
      <section
        id="sobre"
        className="section-pad"
        style={{ background: "white", position: "relative" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3.5rem",
              alignItems: "center",
            }}
            className="md:grid-cols-2"
          >
            {/* Left text */}
            <div>
              <div className="rose-divider" style={{ margin: "0 0 1.5rem" }} />
              <div
                className="tag"
                style={{ marginBottom: "1rem", display: "inline-flex" }}
              >
                Sobre mim
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontStyle: "italic",
                  marginBottom: "1.25rem",
                  lineHeight: 1.15,
                }}
              >
                A parceria estratégica que{" "}
                <span className="gradient-text">sua marca precisa.</span>
              </h2>
              <p
                style={{
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                  fontSize: "1rem",
                }}
              >
                Com 4+ anos no mercado digital e 20 anos de vida, já colaborei
                com marcas dos segmentos de alimentação, vestuário, beleza,
                serviços, educação e muito mais. Cada projeto recebe atenção
                individualizada — porque seu negócio é único.
              </p>
              <p
                style={{
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                }}
              >
                Minha paixão por psicologia me ajuda a entender o comportamento
                do consumidor com profundidade, traduzindo isso em conteúdos
                autênticos que realmente tocam as pessoas — e as convencem a
                agir.
              </p>
            </div>

            {/* Right: features */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {WHY.map((item) => (
                <div
                  key={item.title}
                  className="glass"
                  style={{
                    borderRadius: "1.25rem",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="icon-wrap">{item.icon}</div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        marginBottom: "0.3rem",
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        color: "var(--color-muted)",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFÓLIO DE VÍDEOS ───────────────────────────── */}
      <section id="portfolio" className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="rose-divider" />
            <div className="tag" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              Portfólio
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontStyle: "italic",
                marginBottom: "0.75rem",
              }}
            >
              Conteúdos que{" "}
              <span className="gradient-text">geram resultado</span>
            </h2>
            <p
              style={{
                color: "var(--color-muted)",
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Reels criados para marcas reais — deslize para explorar o portfólio.
            </p>
          </div>

          {/* Reels horizontal scroll - sem scrollbar nos iframes */}
          <div className="reels-track" style={{ paddingTop: "0.5rem" }}>
            {REELS.map((reel) => (
              <Reel key={reel.id} id={reel.id} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ display: "inline-flex" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── GALERIA DE FOTOS ──────────────────────────────── */}
      <section id="galeria" className="section-pad" style={{ background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="rose-divider" />
            <div className="tag" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              Galeria
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontStyle: "italic",
                marginBottom: "0.75rem",
              }}
            >
              Cada foto conta{" "}
              <span className="gradient-text">uma história</span>
            </h2>
            <p
              style={{
                color: "var(--color-muted)",
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Imagens criadas com cuidado para comunicar o valor da sua marca ao público certo.
            </p>
          </div>

          <div className="gallery-grid">
            {GALLERY.map((photo, i) => (
              <div
                key={photo.src}
                className={photo.tall ? "gallery-tall" : ""}
                style={{
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: i === 0 ? "center" : "top",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                />
                {/* Label */}
                <div
                  className="glass"
                  style={{
                    position: "absolute",
                    bottom: "0.85rem",
                    left: "0.85rem",
                    borderRadius: "100px",
                    padding: "0.3rem 0.9rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-dark)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {photo.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARCEIROS ─────────────────────────────────────── */}
      <section
        id="parceiros"
        className="section-pad"
        style={{ background: "var(--color-cream-2)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="rose-divider" />
            <div className="tag" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              Empresas Parceiras
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontStyle: "italic",
                marginBottom: "0.75rem",
              }}
            >
              Marcas que{" "}
              <span className="gradient-text">confiam no meu trabalho</span>
            </h2>
            <p
              style={{
                color: "var(--color-muted)",
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Empresas de diferentes segmentos que escolheram conteúdo
              autêntico para conectar-se com seu público.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.ig ?? "#"}
                target={partner.ig ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="partner-card glass"
                style={{ textDecoration: "none" }}
              >
                {partner.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    style={{
                      height: 60,
                      width: "auto",
                      maxWidth: 120,
                      objectFit: "contain",
                      filter: "none",
                    }}
                  />
                ) : (
                  <PartnerInitials name={partner.name} />
                )}
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--color-dark)" }}>
                    {partner.name}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: 2 }}>
                    {partner.category}
                  </div>
                </div>
                {partner.ig && (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-rose)">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span style={{ fontSize: "0.72rem", color: "var(--color-rose)", fontWeight: 600 }}>
                      Ver perfil
                    </span>
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* CTA text */}
          <div
            style={{
              textAlign: "center",
              marginTop: "2.5rem",
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "rgba(201,75,118,0.06)",
              border: "1px dashed rgba(201,75,118,0.25)",
            }}
          >
            <p style={{ color: "var(--color-muted)", fontSize: "0.95rem" }}>
              ✨ Quer ser a próxima marca desta lista?{" "}
              <a
                href={waLink("Olá Karol! Gostaria de ser uma marca parceira.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-rose)", fontWeight: 700, textDecoration: "none" }}
              >
                Entre em contato →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTATO CTA ───────────────────────────────────── */}
      <section
        id="contato"
        className="section-pad"
        style={{
          background: "linear-gradient(135deg, #C94B76 0%, #D9855A 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            className="glass-strong"
            style={{ borderRadius: "2rem", padding: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🤝</div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontStyle: "italic",
                marginBottom: "1rem",
                lineHeight: 1.15,
              }}
            >
              Pronta para{" "}
              <span className="gradient-text">criar conteúdo</span>{" "}
              que faz a diferença para a sua marca?
            </h2>
            <p
              style={{
                color: "var(--color-muted)",
                marginBottom: "2rem",
                lineHeight: 1.7,
                maxWidth: 480,
                margin: "0 auto 2rem",
              }}
            >
              Me conta seu projeto e vamos conversar sobre como posso
              transformar a presença digital do seu negócio com conteúdo
              autêntico e estratégico.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href={waLink("Olá Karol! Gostaria de conversar sobre uma parceria de conteúdo para minha marca.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rose"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chamar no WhatsApp
              </a>

              <button
                onClick={copyEmail}
                className="btn-outline"
                style={{
                  fontFamily: "var(--font-sans)",
                  borderColor: copied ? "#22c55e" : "var(--color-rose)",
                  color: copied ? "#22c55e" : "var(--color-rose)",
                }}
              >
                {copied ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    E-mail copiado!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    Copiar e-mail
                  </>
                )}
              </button>
            </div>

            {/* Info row */}
            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(0,0,0,0.07)",
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: "📍", text: "Igrejinha — RS, Brasil" },
                { icon: "⚡", text: "Resposta em até 24h" },
                { icon: "🌐", text: "Projetos remotos" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.82rem",
                    color: "var(--color-muted)",
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--color-dark)",
          color: "rgba(255,255,255,0.6)",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          {/* Name */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span
              className="font-display gradient-text"
              style={{ fontSize: "1.8rem", fontWeight: 600, fontStyle: "italic" }}
            >
              Karol Luz
            </span>
          </a>

          <p style={{ fontSize: "0.85rem", maxWidth: 400, lineHeight: 1.7 }}>
            Criadora de conteúdo UGC especializada em vídeos e fotos que conectam
            marcas com pessoas de forma autêntica e estratégica.
          </p>

          {/* Social links */}
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "white")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "white")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "white")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
              aria-label="E-mail"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>

          <div
            style={{
              width: "100%",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              fontSize: "0.78rem",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <span>© {new Date().getFullYear()} Karol Luz da Silva. Todos os direitos reservados.</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Feito com 💛 para conectar marcas e pessoas.</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
