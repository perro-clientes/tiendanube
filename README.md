# Tiendanube — Landing Pages (Agencia Perro)

Repositorio interno de la agencia para producir **landing pages para Tiendanube** de forma rápida, sin depender del equipo de desarrollo interno del cliente. **No hay CMS**: el contenido de cada landing vive en archivos locales versionados junto al código.

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | [Next.js](https://nextjs.org) (App Router, TypeScript, Turbopack — default en v16) |
| Estilos | Tailwind CSS v4 |
| UI primitives | shadcn/ui (base-ui) |
| Animaciones | [motion](https://motion.dev) |
| Tipografía | `/next/font` (placeholder configurable por marca) |
| Deploy | Vercel |
| Paquete | pnpm |

> **Nota de versión:** aunque el plan original apuntaba a Next.js 15, el repo está en **Next.js 16** (la versión actual de `create-next-app`). El stack conceptual es idéntico (App Router + TS + Tailwind v4). Turbopack ya es el default de build y dev en v16.

## Estructura

```
app/
  (landings)/
    <slug>/              # una carpeta por landing
      page.tsx           # arma la página importando secciones marketing
  layout.tsx             # layout raíz: fonts + metadata template
  globals.css            # design tokens (paleta Tiendanube)
components/
  ui/                    # componentes generados por shadcn (NO editar a mano)
  marketing/             # librería de secciones reusables
lib/
  content-schema.ts      # tipos del content.ts de cada landing
  utils.ts
content/
  _template.ts           # template para copiar al crear una landing
public/
  brand/                 # assets de marca reutilizables
```

## Cómo levantar el proyecto

```bash
pnpm install       # instalar dependencias
pnpm dev           # dev server en http://localhost:3000
```

Otros comandos:

```bash
pnpm build         # build de producción (Turbopack)
pnpm start         # servir el build de producción
pnpm lint          # eslint
pnpm typecheck     # tsc --noEmit
pnpm format        # prettier --write
```

Variables de entorno: copiá `.env.example` a `.env.local` si necesitás hooks de analytics/forms. No son requeridas para compilar.

## Crear una landing nueva (3 pasos)

1. **Duplicar el template de contenido**

   ```bash
   cp content/_template.ts content/mi-landing.ts
   ```

2. **Completar el contenido**

   Editá `content/mi-landing.ts`: textos, CTAs, links, SEO. Todo está tipado contra `lib/content-schema.ts`; si yerro un campo, TypeScript te avisa.

3. **Armar el `page.tsx`**

   Creá la carpeta de la landing y un `page.tsx` que importe las secciones marketing y les pase los datos de tu `content.ts`:

   ```tsx
   // app/(landings)/mi-landing/page.tsx
   import type { Metadata } from "next"
   import content from "@/content/mi-landing"
   import { Navbar, Hero, FeatureGrid, CTASection, Footer } from "@/components/marketing"

   export const metadata: Metadata = {
     title: content.seo.title,
     description: content.seo.description,
   }

   export default function MiLandingPage() {
     return (
       <>
         <Navbar data={content.navbar} />
         <main className="flex-1">
           <Hero data={content.hero} />
           <FeatureGrid data={content.featureGrid} />
           <CTASection data={content.ctaSection} />
         </main>
         <Footer data={content.footer} />
       </>
     )
   }
   ```

**La regla de oro:** los componentes en `components/marketing` son **puros** — reciben sus datos por props desde `content.ts`. Nunca hardcodees texto dentro de un componente marketing. Así una landing nueva = copiar template + editar contenido + elegir secciones.

## Secciones marketing disponibles

| Componente | Contenido en `content.ts` |
|-----------|---------------------------|
| `Navbar` | `navbar` |
| `Hero` | `hero` |
| `LogoWall` | `logoWall` (opcional) |
| `FeatureGrid` | `featureGrid` (opcional) |
| `PricingTable` | `pricingTable` (opcional) |
| `FAQAccordion` | `faq` (opcional) |
| `Testimonials` | `testimonials` (opcional) |
| `CTASection` | `ctaSection` |
| `Footer` | `footer` |

## Convenciones de nombres

- **Carpetas de landing**: kebab-case (`mi-landing`), dentro de `app/(landings)/`. El route group `(landings)` no agrega segmento a la URL → `app/(landings)/mi-landing/page.tsx` sirve en `/mi-landing`.
- **Archivos de contenido**: mismo nombre que la landing, en `content/` (`content/mi-landing.ts`).
- **Anclas**: las secciones usan `id` (ej. `#features`, `#pricing`, `#faq`, `#cta`) para navegar dentro de la página.

## Deploy en Vercel

1. **Conectar el repo**: en [vercel.com](https://vercel.com) → *Add New Project* → importar el repo de GitHub. Vercel detecta Next.js y pnpm automáticamente.
2. **Preview por PR**: con el repo conectado, cada **pull request** genera un deploy de preview automático (URL aislada). Se enlaza como *check* del PR.
3. **Producción**: un push a `main` (o merge de PR) hace deploy a producción.
4. **Dominios**: agregá los dominios/campañas en *Project → Settings → Domains*. Para landings distintas, podés apuntar subdominios distintos al mismo proyecto o usar rutas.

Los env vars se configuran en *Project → Settings → Environment Variables* (matchear `.env.example`).

## GitHub Actions

`.github/workflows/ci.yml` corre **lint + typecheck + build** en cada PR y push a `main`. Los checks deben pasar para mergear.

## Design system

Los tokens de marca viven en `app/globals.css` como **variables CSS**:

- `--brand-primary` (púrpura Tiendanube), `--brand-accent` (naranja), `--brand-ink`, `--brand-bg`.
- Se exponen como utilidades Tailwind: `bg-brand-primary`, `text-brand-ink`, etc.
- Los tokens base de shadcn (`--primary`, `--ring`, `--radius`, ...) se derivan de la identidad de marca.

**Placeholders a ajustar según brand guidelines reales:** los valores de `--brand-*`, la fuente variable en `app/layout.tsx`, y el logo de `public/brand/`.
