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
    default: "Tiendanube - Landings",
    template: "%s | Tiendanube",
  },
  description: "Landings de producción para Tiendanube - Agencia Perro.",
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
