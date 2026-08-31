// content-schema.ts
// Tipos que definen la forma del content.ts de cada landing.
// Los componentes en /components/marketing reciben sus datos desde acá.
// Al crear una landing nueva, se edita SOLO el archivo de contenido + page.tsx,
// nunca el componente.

export type CTAButtonVariant =
  "default" | "outline" | "secondary" | "ghost" | "link"

export interface CTAButton {
  label: string
  href: string
  variant?: CTAButtonVariant
  external?: boolean
}

export interface Link {
  label: string
  href: string
  external?: boolean
}

export interface SeoMetadata {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    images?: string[]
  }
  twitterCard?: "summary" | "summary_large_image"
}

/** Navbar — logo + links + CTA. */
export interface NavbarContent {
  logo: {
    text: string
    href: string
  }
  links: Link[]
  cta?: CTAButton
}

/** Hero — bloque principal arriba del fold. */
export interface HeroContent {
  kicker?: string
  title: string
  subtitle?: string
  primaryCta?: CTAButton
  secondaryCta?: CTAButton
  image?: {
    src: string
    alt: string
    aspect?: "video" | "photo"
  }
}

/** LogoWall — fila de logos de confianza. */
export interface LogoWallContent {
  title?: string
  logos: Array<{ name: string }>
}

/** FeatureGrid — grilla de features en cards. */
export interface FeatureGridContent {
  kicker?: string
  title: string
  subtitle?: string
  features: Array<{
    title: string
    description: string
    icon?:
      "store" | "chart" | "shield" | "zap" | "globe" | "credit-card" | string
  }>
}

/** PricingTable — planes de precio. */
export interface PricingTableContent {
  kicker?: string
  title: string
  subtitle?: string
  plans: Array<{
    name: string
    price: string
    period?: string
    description?: string
    features: string[]
    cta: CTAButton
    highlighted?: boolean
  }>
}

/** FAQAccordion — preguntas frecuentes. */
export interface FAQContent {
  title: string
  subtitle?: string
  items: Array<{
    question: string
    answer: string
  }>
}

/** Testimonials — citas de clientes. */
export interface TestimonialsContent {
  title: string
  subtitle?: string
  items: Array<{
    quote: string
    author: string
    role?: string
  }>
}

/** CTASection — bloque final de conversión. */
export interface CTASectionContent {
  title: string
  subtitle?: string
  primaryCta?: CTAButton
  secondaryCta?: CTAButton
}

/** Footer — enlaces y documentos legales. */
export interface FooterContent {
  description?: string
  columns: Array<{
    title: string
    links: Link[]
  }>
  legal?: Link[]
  copyright?: string
}

/**
 * Contrato base que toda landing debe cumplir.
 * Las secciones opcionales se completan según qué componentes marketing
 * se elijan en page.tsx. `seo`, `navbar` y `footer` son obligatorios.
 */
export interface LandingContent {
  seo: SeoMetadata
  navbar: NavbarContent
  hero: HeroContent
  logoWall?: LogoWallContent
  featureGrid?: FeatureGridContent
  pricingTable?: PricingTableContent
  faq?: FAQContent
  testimonials?: TestimonialsContent
  ctaSection: CTASectionContent
  footer: FooterContent
}
