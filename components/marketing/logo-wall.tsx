import { FadeIn } from "@/components/marketing/fade-in"
import type { LogoWallContent } from "@/lib/content-schema"

export function LogoWall({ data }: { data: LogoWallContent }) {
  return (
    <section className="bg-muted/50 border-y py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {data.title && (
          <FadeIn>
            <p className="text-muted-foreground text-center text-sm font-medium tracking-wide">
              {data.title}
            </p>
          </FadeIn>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {data.logos.map((logo) => (
            <span
              key={logo.name}
              className="text-muted-foreground/60 hover:text-foreground text-lg font-semibold transition-colors"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
