import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/marketing/fade-in"
import type { HeroContent } from "@/lib/content-schema"

export function Hero({ data }: { data: HeroContent }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-20 pb-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:pt-28 lg:pb-32">
        <div className="flex flex-col items-start gap-6">
          {data.kicker && (
            <FadeIn>
              <Badge variant="secondary">{data.kicker}</Badge>
            </FadeIn>
          )}
          <FadeIn delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
          </FadeIn>
          {data.subtitle && (
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground max-w-xl text-lg">
                {data.subtitle}
              </p>
            </FadeIn>
          )}
          {(data.primaryCta || data.secondaryCta) && (
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap items-center gap-3">
                {data.primaryCta && (
                  <Button
                    size="lg"
                    render={<Link href={data.primaryCta.href} />}
                  >
                    {data.primaryCta.label}
                  </Button>
                )}
                {data.secondaryCta && (
                  <Button
                    size="lg"
                    variant="outline"
                    render={<Link href={data.secondaryCta.href} />}
                  >
                    {data.secondaryCta.label}
                  </Button>
                )}
              </div>
            </FadeIn>
          )}
        </div>

        {data.image && (
          <FadeIn delay={0.2} className="relative">
            <div className="ring-foreground/10 relative aspect-[4/3] overflow-hidden rounded-2xl ring-1">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
