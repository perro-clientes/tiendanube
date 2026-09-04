import type { Metadata } from "next"
import { Navbar, Footer } from "@/components/layout"
import type { LandingContent } from "@/lib/content-schema"

const content: LandingContent = {
  seo: {
    title: "Tiendanube | Creá gratis tu tienda online",
    description:
      "El mejor diseño para tu marca, 100+ aplicaciones para potenciar tu tienda y soporte humano cuando necesites.",
  },
  navbar: {
    logo: { text: "Tiendanube", href: "/" },
    links: [
      { label: "Features", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Crear tienda gratis", href: "#cta" },
  },
  hero: {
    title: "Creá gratis tu tienda online",
    subtitle:
      "El mejor diseño para tu marca, 100+ aplicaciones para potenciar tu tienda y soporte humano cuando necesites.",
    primaryCta: { label: "Comenzar gratis", href: "#cta" },
  },
  ctaSection: {
    title: "¿Listo para empezar?",
    primaryCta: { label: "Comenzar gratis", href: "#cta" },
  },
  footer: {
    description: "La plataforma de e-commerce más elegida de Argentina.",
    columns: [
      {
        title: "Producto",
        links: [
          { label: "Features", href: "#features" },
          { label: "Precios", href: "#pricing" },
        ],
      },
      {
        title: "Compañía",
        links: [
          { label: "Contacto", href: "/contacto" },
          { label: "Blog", href: "/blog" },
        ],
      },
    ],
    legal: [
      { label: "Términos", href: "/terminos" },
      { label: "Privacidad", href: "/privacidad" },
    ],
    copyright: "© 2026 Tiendanube",
  },
}

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
}

export default function Home() {
  return (
    <>
      <Navbar data={content.navbar} />
      <main className="h-[1000px]" />
      <Footer data={content.footer} />
    </>
  )
}
