import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/marketing/fade-in"
import type { CTASectionContent } from "@/lib/content-schema"

export function CTASection({ data }: { data: CTASectionContent }) {
  return (
    <section id="cta" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="bg-primary relative overflow-hidden rounded-2xl px-6 py-16 text-center sm:px-16">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-primary-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="text-primary-foreground/80 mt-4 text-lg">
                  {data.subtitle}
                </p>
              )}
              {(data.primaryCta || data.secondaryCta) && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  {data.primaryCta && (
                    <Button
                      size="lg"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      render={<Link href={data.primaryCta.href} />}
                    >
                      {data.primaryCta.label}
                    </Button>
                  )}
                  {data.secondaryCta && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                      render={<Link href={data.secondaryCta.href} />}
                    >
                      {data.secondaryCta.label}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
