import {
  Store,
  ChartNoAxesCombined,
  ShieldCheck,
  Zap,
  Globe,
  CreditCard,
  type LucideIcon,
} from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/marketing/fade-in"
import type { FeatureGridContent } from "@/lib/content-schema"

const icons: Record<string, LucideIcon> = {
  store: Store,
  chart: ChartNoAxesCombined,
  shield: ShieldCheck,
  zap: Zap,
  globe: Globe,
  "credit-card": CreditCard,
}

export function FeatureGrid({ data }: { data: FeatureGridContent }) {
  return (
    <section id="features" className="scroll-mt-20 py-20 lg:py-28">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature, i) => {
            const Icon = feature.icon ? icons[feature.icon] : undefined
            return (
              <FadeIn key={feature.title} delay={i * 0.07}>
                <Card className="h-full">
                  <CardHeader>
                    {Icon && (
                      <div className="bg-primary/10 text-primary mb-2 flex size-10 items-center justify-center rounded-lg">
                        <Icon className="size-5" />
                      </div>
                    )}
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
