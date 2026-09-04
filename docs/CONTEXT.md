# CONTEXT.md — Tiendanube Landing Pages

Memoria del proyecto. Última actualización: 2026-09-04

---

## 1. DESCRIPCIÓN DEL PRODUCTO

**Tiendanube** es la plataforma de e-commerce más elegida de Argentina. Este repositorio es mantenido por **Agencia Perro** para crear landing pages de Tiendanube de forma rápida, sin depender del equipo de desarrollo interno del cliente.

**No hay CMS**: el contenido de cada landing vive en archivos locales versionados junto al código. Cada landing es un `content/<slug>.ts` + un `app/(landings)/<slug>/page.tsx`.

**Propuesta de valor del repo**:
- Velocidad: copiar template → editar contenido → landing lista
- Consistencia: design system Tiendanube preconfigurado
- Sin dependencias: contenido local, deploy en Vercel

---

## 2. ESTADO ACTUAL DEL PROYECTO

```
[x] Setup del proyecto (Next.js 16, Tailwind v4, shadcn/ui, motion)
[x] Design system: paleta Tiendanube en globals.css
[x] Escala tipográfica completa (text-h1 a text-legal)
[x] Componentes UI: shadcn (accordion, badge, button, card, dialog, input, label, separator, sheet)
[x] Componentes marketing: Navbar, Hero, LogoWall, FeatureGrid, PricingTable, FAQAccordion, Testimonials, CTASection, Footer, FadeIn
[x] Template de contenido: content/_template.ts
[x] Content schema tipado: lib/content-schema.ts
[x] Página dev /design-system para revisar tokens
[ ] Configurar fuente IvyPresto Display (archivos .otf en public/fonts/ivypresto/, falta configurar en layout.tsx)
[ ] Crear primera landing de ejemplo
[ ] Configurar deployment en Vercel
```

---

## 3. STACK TECNOLÓGICO

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 16.3.3 | Framework (App Router, Turbopack) |
| React | 19.2.8 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first CSS |
| shadcn/ui | ^4.19.1 | UI primitives (base-ui) |
| class-variance-authority | ^0.7.1 | Variantes de componentes |
| clsx + tailwind-merge | ^2.1.1 / ^3.6.0 | Utilidad cn() para classnames |
| motion | ^13.1.1 | Animaciones (FadeIn) |
| lucide-react | ^1.38.0 | Iconografía |
| tw-animate-css | ^1.4.0 | Animaciones Tailwind |
| pnpm | 10.33.0 | Package manager |
| ESLint | ^9 | Linting |
| Prettier | ^3.9.6 | Code formatting |

---

## 4. ARQUITECTURA Y ESTRUCTURA DE ARCHIVOS

```
tiendanube/
├── app/
│   ├── (dev)/
│   │   └── design-system/
│   │       └── page.tsx         → Página interna para revisar design system
│   ├── (landings)/              → Route group para landings (una carpeta por slug)
│   ├── globals.css              → Design tokens + escala tipográfica + Tailwind theme
│   ├── layout.tsx               → Layout raíz: Plus Jakarta Sans + metadata template
│   └── page.tsx                 → Home con Navbar + Hero + CTA + Footer
├── components/
│   ├── layout/                  → Componentes de sitio (Navbar, Footer)
│   │   ├── index.ts             → Barrel exports
│   │   ├── navbar.tsx           → Navbar responsive con scroll effect
│   │   └── footer.tsx           → Footer con columnas de links
│   ├── marketing/               → Secciones reutilizables para landings
│   │   ├── index.ts             → Barrel exports
│   │   ├── logo-wall.tsx        → Fila de logos de confianza
│   │   └── fade-in.tsx          → Wrapper de animación (client component)
│   └── ui/                      → Componentes shadcn/ui (no modificar)
│       ├── accordion.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── separator.tsx
│       └── sheet.tsx
├── content/
│   └── _template.ts             → Template para copiar al crear una landing
├── lib/
│   ├── content-schema.ts        → Tipos TypeScript (LandingContent y subtipos)
│   └── utils.ts                 → cn() utility
├── public/
│   ├── brand/                   → Assets de marca (logos)
│   ├── fonts/ivypresto/         → Fuentes IvyPresto Display (.otf)
│   ├── meta/                    → Favicon + OG images
│   └── nimbus-icons/            → Iconos Nimbus
├── docs/
│   └── CONTEXT.md               → Este archivo
└── .opencode/
    └── agents/
        └── docswriter.md        → Agente de documentación
```

---

## 5. COMPONENTES DISPONIBLES

### Layout (`components/layout/`)
| Componente | Tipo de contenido | Descripción |
|------------|-------------------|-------------|
| `Navbar` | `NavbarContent` | Navbar responsive con scroll effect y hamburger animado |
| `Footer` | `FooterContent` | Footer con columnas de links, legal y copyright |

### Marketing (`components/marketing/`)
| Componente | Tipo de contenido | Descripción |
|------------|-------------------|-------------|
| `LogoWall` | `LogoWallContent` | Fila de logos de confianza sobre fondo muted |
| `FadeIn` | N/A (wrapper) | Animación fade + translateY para micro-interacciones |
| `Footer` | `FooterContent` | Sí | Footer con columnas de links, legal y copyright |
| `FadeIn` | N/A (wrapper) | No | Animación fade + translateY para micro-interacciones |

---

## 6. FLUJO PARA CREAR UNA LANDING NUEVA

1. **Copiar template**: `cp content/_template.ts content/mi-landing.ts`
2. **Editar contenido**: Modificar `content/mi-landing.ts` con textos, CTAs, links, SEO. Todo tipado contra `LandingContent`.
3. **Crear page.tsx**:
   ```tsx
   // app/(landings)/mi-landing/page.tsx
   import type { Metadata } from "next"
   import content from "@/content/mi-landing"
   import { Navbar, Footer } from "@/components/layout"
   import { LogoWall } from "@/components/marketing"
   
   export const metadata: Metadata = {
     title: content.seo.title,
     description: content.seo.description,
   }
   
   export default function MiLandingPage() {
     return (
       <>
         <Navbar data={content.navbar} />
         <main className="flex-1">
           <LogoWall data={content.logoWall} />
         </main>
         <Footer data={content.footer} />
       </>
     )
   }
   ```
4. **Verificar**: `pnpm typecheck` para validar tipos

---

## 7. DESIGN SYSTEM

### Tokens de color (globals.css)

**Primary**: Azul Tiendanube
- `primary-dark-200`: #010B23 (oscuro)
- `primary-pure-100`: #0050C3 (azul principal)
- `primary-light-100`: #84CAFF
- `primary-light-200`: #DCEEFF
- `primary-light-300`: #F5FAFF
- `primary-light-400`: #FFFFFF

**Secondary**: Cyan
- `secondary-dark-100`: #1732BB
- `secondary-light-100`: #00B4E6

**Neutral**:
- `neutral-100`: #010B23
- `neutral-200`: #242F45
- `neutral-300`: #768192
- `neutral-400`: #F7F7F7
- `neutral-500`: #F7F7F7

**Gradiente de marca**: `bg-gradient-tiendanube` (radial gradient azul a oscuro)

### Escala tipográfica

Utilidades disponibles:
- `text-h1`, `text-h1-tight` (64px)
- `text-h2` (42px)
- `text-h3`, `text-h3-light` (32px)
- `text-h4`, `text-h4-semibold` (24px)
- `text-h5`, `text-h5-semibold` (20px)
- `text-body-lg`, `text-body-lg-semibold` (18px)
- `text-body`, `text-body-semibold` (16px)
- `text-cta`, `text-cta-sm` (14px/12px)
- `text-link`, `text-label`, `text-legal`, `text-facts`

**Fuentes**:
- Principal: Plus Jakarta Sans (variable, Google Fonts)
- Editorial: IvyPresto Display Light Italic (pendiente configurar)

### Botones

Variantes light: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`
Variantes dark: `primary-dark`, `secondary-dark`, `link-dark`
Sizes: `default` (h-12), `sm` (h-10), `lg` (h-14), `icon`, `icon-sm`, `icon-lg`
Forma: siempre pill (`rounded-full`)

---

## 8. VARIABLES DE ENTORNO

No hay variables de entorno requeridas actualmente. El proyecto compila sin `.env.local`.

Si se agregan hooks de analytics o forms en el futuro, crear `.env.local` desde `.env.example`.

---

## 9. DECISIONES TÉCNICAS Y DE PRODUCTO

```
[2026-09] DECISIÓN: Usar Next.js 16 en vez de 15
           RAZÓN: v16 es la versión actual de create-next-app. Stack conceptual idéntico (App Router + TS + Tailwind v4). Turbopack es default.

[2026-09] DECISIÓN: Patrón content-driven para landings
           RAZÓN: Separa contenido de presentación. Permite crear landings sin tocar componentes. Textos versionados en git.

[2026-09] DECISIÓN: shadcn/ui con base-ui (no radix)
           RAZÓN: shadcn v4 usa base-ui como primitive layer. Más ligero y moderno.

[2026-09] DECISIÓN: Design system Tiendanube custom en globals.css
           RAZÓN: Tokens extraídos del Figma oficial. Permite branded components sin CSS-in-JS.

[2026-09] DECISIÓN: Route group (landings) vacío al inicio
           RAZÓN: Repo nuevo, landings se crean bajo demanda. Home placeholder hasta que haya al menos una landing.
```

---

## 10. CONVENCIONES DE CÓDIGO

- **TypeScript strict mode**: sin `any`, sin `@ts-ignore` sin justificación
- **Server Components por defecto**: `"use client"` solo en FadeIn y FAQAccordion
- **Componentes marketing puros**: reciben datos por props, nunca hardcodean texto
- **Un archivo por componente**: máximo 150 líneas, si supera dividir
- **Estilos**: solo variables de Tailwind definidas en `globals.css`, sin valores hardcodeados
- **shadcn/ui**: extender con `cn()` y CVA, nunca modificar archivos base en `components/ui/`
- **Contenido**: cada landing tiene `content/<slug>.ts` tipado contra `LandingContent`
- **Carpetas de landing**: kebab-case en `app/(landings)/`
- **Anclas**: secciones usan `id` para navegar (#features, #pricing, #faq, #cta)
- ** barrel exports**: `components/marketing/index.ts` exporta todos los componentes marketing
