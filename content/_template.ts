// content/_template.ts
// ============================================================
// TEMPLATE PARA CREAR UNA LANDING NUEVA
// ============================================================
// Copiá este archivo a tu carpeta de landing (content/<slug>.ts),
// completá los campos y usalo en app/(landings)/<slug>/page.tsx.
//
// Todos los textos de la landing viven acá. Los componentes en
// /components/marketing NO tienen texto hardcodeado: reciben props.
// ============================================================

import type { LandingContent } from "@/lib/content-schema"

const content: LandingContent = {
  seo: {
    // El sufijo "| Marca" se agrega solo desde app/layout.tsx (title.template).
    // Poné acá solo el título base de la landing.
    title: "Título de la landing",
    description: "Descripción breve para SEO y redes sociales.",
  },

  navbar: {
    logo: { text: "Marca", href: "/tu-slug" },
    links: [{ label: "Features", href: "#features" }],
    cta: { label: "Comenzar", href: "#cta" },
  },

  hero: {
    kicker: "Kicker opcional",
    title: "Título principal de la landing",
    subtitle: "Texto de soporte que explica el valor de la propuesta.",
    primaryCta: { label: "Comenzar gratis", href: "#cta" },
    secondaryCta: { label: "Ver demo", href: "#features" },
  },

  logoWall: {
    title: "Confiaron en nosotros",
    logos: [{ name: "Logo 1" }, { name: "Logo 2" }, { name: "Logo 3" }],
  },

  featureGrid: {
    kicker: "Features",
    title: "Lo que ofrecemos",
    subtitle: "Descripción de la propuesta de valor.",
    features: [
      {
        title: "Feature 1",
        description: "Descripción breve del feature.",
        icon: "zap",
      },
      {
        title: "Feature 2",
        description: "Descripción breve del feature.",
        icon: "globe",
      },
      {
        title: "Feature 3",
        description: "Descripción breve del feature.",
        icon: "shield",
      },
    ],
  },

  pricingTable: {
    kicker: "Precios",
    title: "Planes simples y transparentes",
    plans: [
      {
        name: "Plan Básico",
        price: "$0",
        period: "/mes",
        description: "Para empezar.",
        features: ["Feature 1", "Feature 2"],
        cta: { label: "Elegir plan", href: "#cta" },
      },
    ],
  },

  faq: {
    title: "Preguntas frecuentes",
    items: [
      { question: "¿Pregunta 1?", answer: "Respuesta 1." },
      { question: "¿Pregunta 2?", answer: "Respuesta 2." },
    ],
  },

  testimonials: {
    title: "Lo que dicen nuestros clientes",
    items: [
      {
        quote: "Cita de un cliente satisfecho.",
        author: "Nombre Apellido",
        role: "Cargo, Empresa",
      },
    ],
  },

  ctaSection: {
    title: "¿Listo para empezar?",
    subtitle: "Comenzá hoy mismo, sin compromiso.",
    primaryCta: { label: "Comenzar gratis", href: "#cta" },
  },

  footer: {
    description: "Descripción corta de la marca.",
    columns: [
      {
        title: "Producto",
        links: [{ label: "Features", href: "#features" }],
      },
      {
        title: "Compañía",
        links: [{ label: "Contacto", href: "/contacto" }],
      },
    ],
    legal: [
      { label: "Términos", href: "/terminos" },
      { label: "Privacidad", href: "/privacidad" },
    ],
    copyright: "© 2026 Nombre de la marca",
  },
}

export default content
