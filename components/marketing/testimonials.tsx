import { Quote } from "lucide-react"

import { Card } from "@/components/ui/card"
import { FadeIn } from "@/components/marketing/fade-in"
import type { TestimonialsContent } from "@/lib/content-schema"

export function Testimonials({ data }: { data: TestimonialsContent }) {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {data.title}
            </h2>
          </FadeIn>
          {data.subtitle && (
            <FadeIn delay={0.05}>
              <p className="text-muted-foreground mt-4 text-lg">
                {data.subtitle}
              </p>
            </FadeIn>
          )}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => (
            <FadeIn key={item.author} delay={i * 0.07}>
              <Card className="flex h-full flex-col justify-between gap-6">
                <div>
                  <Quote className="text-primary/40 size-6" />
                  <p className="text-foreground mt-3 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t pt-4">
                  <div className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full text-sm font-semibold">
                    {item.author
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.author}</p>
                    {item.role && (
                      <p className="text-muted-foreground text-xs">
                        {item.role}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
