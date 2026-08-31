import Link from "next/link"
import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FadeIn } from "@/components/marketing/fade-in"
import type { PricingTableContent } from "@/lib/content-schema"

export function PricingTable({ data }: { data: PricingTableContent }) {
  return (
    <section id="pricing" className="bg-muted/50 scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          {data.kicker && (
            <FadeIn>
              <Badge variant="secondary" className="mb-4">
                {data.kicker}
              </Badge>
            </FadeIn>
          )}
          <FadeIn delay={0.05}>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {data.title}
            </h2>
          </FadeIn>
          {data.subtitle && (
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground mt-4 text-lg">
                {data.subtitle}
              </p>
            </FadeIn>
          )}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {data.plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.07}>
              <Card
                className={`h-full ${plan.highlighted ? "ring-primary ring-2" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.highlighted && <Badge>Popular</Badge>}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.description && (
                    <CardDescription>{plan.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="text-primary mt-0.5 size-4 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    render={<Link href={plan.cta.href} />}
                  >
                    {plan.cta.label}
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
