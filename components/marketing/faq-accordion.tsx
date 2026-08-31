"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn } from "@/components/marketing/fade-in"
import type { FAQContent } from "@/lib/content-schema"

export function FAQAccordion({ data }: { data: FAQContent }) {
  return (
    <section id="faq" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
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

        <FadeIn delay={0.1}>
          <Accordion
            defaultValue={data.items[0] ? [data.items[0].question] : []}
            className="mt-10 flex flex-col gap-3"
          >
            {data.items.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="rounded-lg border px-4"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
