import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { NavbarContent } from "@/lib/content-schema"

export function Navbar({ data }: { data: NavbarContent }) {
  return (
    <header className="bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={data.logo.href}
          className="text-lg font-semibold tracking-tight"
        >
          {data.logo.text}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {data.links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {data.cta && (
            <Button size="lg" render={<Link href={data.cta.href} />}>
              {data.cta.label}
            </Button>
          )}
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="md:hidden"
                aria-label="Abrir menú"
              >
                <MenuIcon />
              </Button>
            }
          />
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{data.logo.text}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 px-4">
              {data.links.map((link) => (
                <Link
                  key={`${link.href}-${link.label}-mobile`}
                  href={link.href}
                  className="text-foreground hover:bg-muted rounded-lg px-3 py-2.5 text-base font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {data.cta && (
                <Button render={<Link href={data.cta.href} />} className="mt-2">
                  {data.cta.label}
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
