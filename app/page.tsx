"use client"

import React, { useState, useEffect } from "react"

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
  { name: "Domingues Mimos",  logo: null,                                    category: "Loja de Presentes",   ig: null                                          },
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

const SOCIAL_GALLERY = [
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1541773367336-d14a1bf7dd57?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
]

const HERO_SLIDES = [
  {
    eyebrow: "Conteúdo UGC",
    title: "Autêntico & Estratégico",
    subtitle: "Transforme a presença digital da sua marca com conteúdo que conecta verdadeiramente ao público certo."
  },
  {
    eyebrow: "Resultados Reais",
    title: "4+ Anos de Experiência",
    subtitle: "Mais de 10 reels entregues, conectando marcas aos seus consumidores ideais."
  }
]

const HORIZONTAL_STORIES = [
  { image: "/images/karolhero.jpg", label: "Lifestyle", title: "Momentos Autênticos" },
  { image: "/images/karol-photo-new.jpg", label: "Vestuário", title: "Tendências Urbanas" },
  { image: "/images/xis.jpg", label: "Alimentos", title: "Sabores Locais" },
  { image: "/images/dominguesmimos.jpg", label: "Presentes", title: "Presentes Especiais" },
]

const HELMETS = [
  { name: "Miami 2023", year: "2023", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80" },
  { name: "Silverstone 2022", year: "2022", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80" },
  { name: "Monaco 2021", year: "2021", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80" },
  { name: "Abu Dhabi 2020", year: "2020", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80" },
]

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--color-cream)",
        color: "var(--color-dark)",
        fontFamily: "var(--font-sans)",
        padding: "2.5px", // Added 2.5px padding to entire site
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          ...(isScrolled ? {
            background: "rgba(254, 250, 246, 0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(201, 75, 118, 0.1)",
          } : {
            background: "transparent",
          })
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              fontFamily: "var(--font-display)",
              color: "var(--color-rose)",
              flexShrink: 0,
            }}
            className="sm:text-xl"
          >
            <span className="hidden sm:inline">Karol Luz</span>
            <span className="sm:hidden">KL</span>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav
            className="hidden md:flex"
            style={{
              gap: "2rem",
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            {["Home", "Sobre", "Portfólio", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "var(--color-dark)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => e.target.style.color = "var(--color-rose)"}
                onMouseLeave={(e) => e.target.style.color = "var(--color-dark)"}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA - Hidden on mobile */}
          <div
            className="hidden md:flex"
            style={{
              gap: "1rem",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "var(--color-dark)",
                background: "linear-gradient(135deg, var(--color-rose) 0%, var(--color-gold) 100%)",
                borderRadius: 999,
                padding: "0.75rem 1.5rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              Fale Comigo
            </a>
          </div>

          {/* Mobile Menu Button - Shown only on mobile */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            className="md:hidden"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              flexShrink: 0,
              zIndex: 60,
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "var(--color-dark)",
                transition: "all 0.3s ease",
                transform: isMenuOpen ? "rotate(45deg) translate(6px, 6px)" : "none",
              }}
            />
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "var(--color-dark)",
                transition: "all 0.3s ease",
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "var(--color-dark)",
                transition: "all 0.3s ease",
                transform: isMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(254, 250, 246, 0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(201, 75, 118, 0.1)",
              padding: "1rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              zIndex: 50,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            {["Home", "Sobre", "Portfólio", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "var(--color-dark)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  padding: "0.5rem 0",
                  transition: "color 0.3s ease",
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => e.target.style.color = "var(--color-rose)"}
                onMouseLeave={(e) => e.target.style.color = "var(--color-dark)"}
              >
                {item}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "var(--color-dark)",
                background: "linear-gradient(135deg, var(--color-rose) 0%, var(--color-gold) 100%)",
                borderRadius: 999,
                padding: "0.875rem 1.5rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textAlign: "center",
                marginTop: "0.5rem",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              Fale Comigo
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "2.5rem 1.5rem 4rem",
          paddingTop: "120px", // Account for fixed header
        }}
      >
        <div
          className="lg:grid-cols-2 lg:items-center"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(201, 75, 118, 0.1)",
                border: "1px solid rgba(201, 75, 118, 0.2)",
                padding: "0.5rem 1rem",
                borderRadius: 999,
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--color-rose)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "2rem",
              }}
            >
              Criadora de Conteúdo UGC
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                color: "var(--color-dark)",
              }}
            >
              Seu produto merece ser visto da maneira certa
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "var(--color-muted)",
                marginBottom: "2rem",
                maxWidth: "500px",
              }}
            >
              Conteúdo autêntico que conecta sua marca ao público certo e gera resultados reais.
              4+ anos de experiência, 10+ reels entregues.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  background: "linear-gradient(135deg, var(--color-rose) 0%, var(--color-gold) 100%)",
                  borderRadius: 999,
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
              >
                Vamos Conversar
              </a>

              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "var(--color-dark)",
                  background: "transparent",
                  border: "2px solid var(--color-rose)",
                  borderRadius: 999,
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "var(--color-rose)"
                  e.target.style.color = "white"
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent"
                  e.target.style.color = "var(--color-dark)"
                }}
              >
                Ver Portfólio
              </a>
            </div>
          </div>

          {/* Hero Image with Transition Effect */}
          <div
            className="lg:h-[600px]"
            style={{
              position: "relative",
              height: "500px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `linear-gradient(180deg, rgba(254, 250, 246, 0.1) 0%, rgba(254, 250, 246, 0.8) 50%, rgba(254, 250, 246, 1) 100%), url(/images/karolhero.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "2rem",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            />
            {/* Overlay text positioned over the image */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                right: "2rem",
                color: "var(--color-dark)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-display)",
                  marginBottom: "0.5rem",
                }}
              >
                Karol Luz
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-muted)",
                }}
              >
                Criadora de Conteúdo UGC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        style={{
          padding: "5rem 1.5rem",
          background: "var(--color-cream-2)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "var(--color-rose)",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            Sobre Mim
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              fontFamily: "var(--font-display)",
              lineHeight: 1.2,
              marginBottom: "2rem",
              color: "var(--color-dark)",
            }}
          >
            Conteúdo que gera conexão real
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "var(--color-muted)",
              maxWidth: "700px",
              margin: "0 auto 3rem",
            }}
          >
            Com mais de 4 anos de experiência criando conteúdo autêntico para marcas,
            ajudo empresas a se conectarem com seu público de forma genuína e estratégica.
            Cada reel, cada post, é pensado para gerar engajamento real e resultados mensuráveis.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {[
              { number: "4+", label: "Anos de Experiência" },
              { number: "10+", label: "Reels Entregues" },
              { number: "8+", label: "Marcas Parceiras" },
              { number: "95%", label: "Satisfação dos Clientes" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "white",
                  borderRadius: "1rem",
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(201, 75, 118, 0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--color-rose)",
                    fontFamily: "var(--font-display)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-muted)",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        style={{
          padding: "5rem 1.5rem",
          background: "white",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                color: "var(--color-rose)",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              Portfólio
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                lineHeight: 1.2,
                marginBottom: "1rem",
                color: "var(--color-dark)",
              }}
            >
              Trabalhos Recentes
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "var(--color-muted)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Conheça alguns dos projetos que desenvolvi para marcas parceiras
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {GALLERY.map((item) => (
              <div
                key={item.src}
                style={{
                  borderRadius: "1rem",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: item.tall ? "3/4" : "4/3",
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    padding: "2rem 1.5rem 1.5rem",
                    color: "white",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      opacity: 0.8,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {item.alt.split(" — ")[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        style={{
          padding: "5rem 1.5rem",
          background: "var(--color-cream)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "var(--color-rose)",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            Vamos Conversar
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              fontFamily: "var(--font-display)",
              lineHeight: 1.2,
              marginBottom: "2rem",
              color: "var(--color-dark)",
            }}
          >
            Pronto para transformar sua marca?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "var(--color-muted)",
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            Entre em contato e vamos discutir como seu produto pode brilhar da maneira certa
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
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                background: "linear-gradient(135deg, var(--color-rose) 0%, var(--color-gold) 100%)",
                borderRadius: 999,
                padding: "1rem 2rem",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              WhatsApp
            </a>

            <a
              href={`mailto:${EMAIL}`}
              style={{
                textDecoration: "none",
                color: "var(--color-dark)",
                background: "white",
                border: "2px solid var(--color-rose)",
                borderRadius: 999,
                padding: "1rem 2rem",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "var(--color-rose)"
                e.target.style.color = "white"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "white"
                e.target.style.color = "var(--color-dark)"
              }}
            >
              E-mail
            </a>

            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "var(--color-dark)",
                background: "transparent",
                border: "2px solid var(--color-gold)",
                borderRadius: 999,
                padding: "1rem 2rem",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "var(--color-gold)"
                e.target.style.color = "white"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent"
                e.target.style.color = "var(--color-dark)"
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "2rem 1.5rem",
          background: "var(--color-dark)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1rem",
            }}
          >
            © 2024 Karol Luz — Criadora de Conteúdo UGC
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
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.color = "var(--color-rose)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.7)"}
            >
              WhatsApp
            </a>

            <a
              href={`mailto:${EMAIL}`}
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.color = "var(--color-rose)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.7)"}
            >
              E-mail
            </a>

            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.color = "var(--color-rose)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.7)"}
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
