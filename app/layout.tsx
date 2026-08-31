import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

// ============================================================
// F U E N T E   D E   M A R C A   (placeholder configurable)
// ------------------------------------------------------------
// Reemplazá Geist por la tipografía variable de tu marca/campaña
// cuando tengas las brand guidelines. Ej:
//   import { Inter } from "next/font/google";
//   const fontSans = Inter({ variable: "--font-sans", subsets: ["latin"] });
// luego aplicá fontSans.variable en <html> y actualizá @theme en globals.css.
// ============================================================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

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
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
