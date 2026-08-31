import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import type { FooterContent } from "@/lib/content-schema"

export function Footer({ data }: { data: FooterContent }) {
  return (
    <footer className="bg-background border-t py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          {data.description && (
            <div>
              <p className="text-muted-foreground max-w-sm text-sm">
                {data.description}
              </p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {data.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold">{column.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {data.copyright && (
            <p className="text-muted-foreground text-sm">{data.copyright}</p>
          )}
          {data.legal && data.legal.length > 0 && (
            <div className="flex flex-wrap gap-6">
              {data.legal.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
