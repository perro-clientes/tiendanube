import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

// ============================================================
// T I P O G R A F Í A   T I E N D A N U B E
// ------------------------------------------------------------
// Principal: Plus Jakarta Sans (variable, vía Google Fonts).
// Editorial (headlines hero): IvyPresto Display Light Italic
//   — fuente comercial de Sharp Type, se carga con next/font/local.
//   Los archivos .woff2 licenciados NO están en el repo todavía.
// ============================================================
const pjs = Plus_Jakarta_Sans({
  variable: "--font-pjs",
  subsets: ["latin"],
})

// TODO: agregar los archivos .woff2 licenciados de
// IvyPresto Display Light Italic en /public/fonts/ivypresto/ y
// descomentar el bloque siguiente para activar --font-ivypresto.
// NO descargar ni inventar una fuente "parecida" sin aprobación.
//
// import localFont from "next/font/local"
// const ivyPresto = localFont({
//   src: [{ path: "./fonts/...", weight: "300", style: "italic" }],
//   variable: "--font-ivypresto",
//   display: "swap",
// })

export const metadata: Metadata = {
  title: {
    // Cada landing sobreescribe su propio `title` en su page.tsx;
    // el template agrega "| Tiendanube" para consistencia de marca
    // en la pestaña del navegador. Si una landing define title
    // absoluto, puede anular el template con `absolute` (no hace falta acá).
    default: "Tiendanube | Creá gratis tu tienda online",
    template: "%s | Tiendanube",
  },
  description:
    "El mejor diseño para tu marca, 100+ aplicaciones para potenciar tu tienda y soporte humano cuando necesites. Vendé con la plataforma de e-commerce más elegida de Argentina.",
  // TODO: actualizar a dominio de producción una vez definido
  metadataBase: new URL("https://www.tiendanube.com"),
  alternates: {
    canonical: "https://www.tiendanube.com",
  },
  openGraph: {
    title: "Tiendanube | Creá gratis tu tienda online",
    description:
      "El mejor diseño para tu marca, 100+ aplicaciones para potenciar tu tienda y soporte humano cuando necesites. Vendé con la plataforma de e-commerce más elegida de Argentina.",
    url: "https://www.tiendanube.com",
    siteName: "Tiendanube",
    locale: "es_ES",
    type: "website",
    images: [
      {
        // Dimensiones reales del asset 2400x1260 (ratio 1.91:1, estándar OG).
        url: "/meta/latam-default.jpg",
        width: 2400,
        height: 1260,
        alt: "Tiendanube - Plataforma de e-commerce",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/meta/favicon.ico", sizes: "any" },
      { url: "/meta/favicon.svg", type: "image/svg+xml" },
      { url: "/meta/favicon.png", type: "image/png", sizes: "74x74" },
    ],
    shortcut: "/meta/favicon.ico",
    apple: "/meta/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${pjs.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
