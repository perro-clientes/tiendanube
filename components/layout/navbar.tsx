"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { NavbarContent } from "@/lib/content-schema"

// ============================================================
// HamburgerButton — animación de 3 líneas a X
// ============================================================
function HamburgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="relative h-5 w-6 text-foreground transition-colors duration-200 hover:text-primary md:hidden"
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    >
      <span
        className={cn(
          "absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-all duration-300",
          isOpen && "top-1/2 -translate-y-1/2 rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300",
          isOpen && "opacity-0"
        )}
      />
      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300",
          isOpen && "bottom-1/2 translate-y-1/2 -rotate-45"
        )}
      />
    </button>
  )
}

// ============================================================
// Navbar — header sticky con scroll effect y mobile menu animado
// ============================================================
export function Navbar({ data }: { data: NavbarContent }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Scroll listener — activa estilo "pill" al scrollear
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Bloquear scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Cerrar menú con Escape
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Cerrar menú al cambiar de ruta
  const prevPathname = useRef(pathname)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setIsOpen(false)
      prevPathname.current = pathname
    }
  }, [pathname])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const showScrolled = scrolled && !isOpen

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-2">
        <div
          className={cn(
            "transition-all duration-300 ease-in-out",
            showScrolled
              ? "mx-auto mt-4 max-w-[90vw] md:max-w-[800px] lg:max-w-[1000px] bg-background/40 backdrop-blur-xl border border-border shadow-xl rounded-full px-6 md:pr-4"
              : "border border-transparent"
          )}
        >
          <div
            className={cn(
              "flex h-16 items-center justify-between md:h-16",
              !showScrolled && "container mx-auto px-4 sm:px-6"
            )}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <Link
                href={data.logo.href}
                aria-label="Ir al inicio"
                className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-primary"
              >
                {data.logo.text}
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {data.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary",
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA desktop + hamburger */}
            <div className="flex items-center gap-4">
              {data.cta && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + data.links.length * 0.08,
                  }}
                  className="hidden md:block"
                >
                  <Button size="sm" render={<Link href={data.cta.href} />}>
                    {data.cta.label}
                  </Button>
                </motion.div>
              )}
              <HamburgerButton
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="navigation"
            aria-label="Menú mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/70 backdrop-blur-xl md:hidden"
          >
            {data.links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "text-2xl font-medium tracking-wide transition-colors duration-200 hover:text-primary",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            {data.cta && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Button
                  size="lg"
                  render={<Link href={data.cta.href} onClick={closeMenu} />}
                  className="mt-4"
                >
                  {data.cta.label}
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
