import { RefreshCw } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// ============================================================
// Página dev (interna, NO productiva) para revisar el design
// system contra el Figma antes de usarlo en una landing real.
// Ruta: /design-system
// ============================================================

const typeScale = [
  { name: "text-h1", cls: "text-h1", sample: "El ecosistema de los líderes" },
  { name: "text-h1-tight", cls: "text-h1-tight", sample: "Título hero tight" },
  { name: "text-h2", cls: "text-h2", sample: "Vendé online y cobrá" },
  { name: "text-h3", cls: "text-h3", sample: "Todo lo que necesitás" },
  { name: "text-h3-light", cls: "text-h3-light", sample: "Peso light" },
  { name: "text-h4", cls: "text-h4", sample: "Regular 24/32" },
  {
    name: "text-h4-semibold",
    cls: "text-h4-semibold",
    sample: "Semibold 24/32",
  },
  { name: "text-h5", cls: "text-h5", sample: "Regular 20/26" },
  {
    name: "text-h5-semibold",
    cls: "text-h5-semibold",
    sample: "Semibold 20/26",
  },
  { name: "text-body-lg", cls: "text-body-lg", sample: "Cuerpo grande 18/24" },
  {
    name: "text-body-lg-semibold",
    cls: "text-body-lg-semibold",
    sample: "Cuerpo grande semibold",
  },
  { name: "text-body", cls: "text-body", sample: "Cuerpo 16/24" },
  {
    name: "text-body-semibold",
    cls: "text-body-semibold",
    sample: "Cuerpo semibold",
  },
  { name: "text-cta", cls: "text-cta", sample: "CTA botón" },
  { name: "text-cta-sm", cls: "text-cta-sm", sample: "CTA pequeño" },
  { name: "text-link", cls: "text-link", sample: "Link con subrayado" },
  { name: "text-label", cls: "text-label", sample: "Label" },
  {
    name: "text-small-medium",
    cls: "text-small-medium",
    sample: "Small medium",
  },
  { name: "text-legal", cls: "text-legal", sample: "Texto legal" },
  { name: "text-facts", cls: "text-facts", sample: "+1450 agencias" },
]

const typeScaleAlt = [
  { name: "text-h1-alt", cls: "text-h1-alt", sample: "IvyPresto h1" },
  { name: "text-h2-alt", cls: "text-h2-alt", sample: "IvyPresto h2" },
  { name: "text-h3-alt", cls: "text-h3-alt", sample: "IvyPresto h3" },
]

function Preview({ label }: { label: string }) {
  return (
    <p className="text-text-dark-200 w-48 shrink-0 text-sm font-semibold">
      {label}
    </p>
  )
}

export default function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-5xl flex-1 px-4 py-16 sm:px-6">
      <div className="mb-12">
        <Badge variant="secondary">DEV</Badge>
        <h1 className="text-h2 mt-4">Design system Tiendanube</h1>
        <p className="text-body text-muted-foreground mt-2">
          Página interna para validar colores, tipografía y botones contra el
          Figma.
        </p>
      </div>

      {/* ============ COLORES ============ */}
      <section className="mb-16">
        <h2 className="text-h3 mb-6">Colores</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <SwatchGroup
            title="Primary"
            tokens={[
              { name: "primary-dark-200", cls: "bg-primary-dark-200" },
              { name: "primary-pure-100", cls: "bg-primary-pure-100" },
              { name: "primary-light-100", cls: "bg-primary-light-100" },
              { name: "primary-light-200", cls: "bg-primary-light-200" },
              { name: "primary-light-300", cls: "bg-primary-light-300" },
              { name: "primary-light-400", cls: "bg-primary-light-400 border" },
            ]}
          />
          <SwatchGroup
            title="Secondary / Neutral"
            tokens={[
              { name: "secondary-dark-100", cls: "bg-secondary-dark-100" },
              { name: "secondary-light-100", cls: "bg-secondary-light-100" },
              { name: "neutral-200", cls: "bg-neutral-200" },
              { name: "neutral-300", cls: "bg-neutral-300" },
              { name: "neutral-400", cls: "bg-neutral-400 border" },
              { name: "neutral-500 (=400)", cls: "bg-neutral-500 border" },
            ]}
          />
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <SwatchGroup
            title="Support: Red / Orange"
            tokens={[
              { name: "red-dark-100", cls: "bg-red-dark-100" },
              { name: "red-dark-200", cls: "bg-red-dark-200" },
              { name: "red-light-100", cls: "bg-red-light-100 border" },
              { name: "red-light-200", cls: "bg-red-light-200 border" },
              { name: "orange-dark-100", cls: "bg-orange-dark-100" },
              { name: "orange-dark-200", cls: "bg-orange-dark-200" },
              { name: "orange-light-100", cls: "bg-orange-light-100 border" },
              { name: "orange-light-200", cls: "bg-orange-light-200 border" },
            ]}
          />
          <SwatchGroup
            title="Support: Yellow / Green"
            tokens={[
              { name: "yellow-dark-100", cls: "bg-yellow-dark-100" },
              { name: "yellow-dark-200", cls: "bg-yellow-dark-200 border" },
              { name: "yellow-light-100", cls: "bg-yellow-light-100 border" },
              { name: "yellow-light-200", cls: "bg-yellow-light-200 border" },
              { name: "green-dark-100", cls: "bg-green-dark-100" },
              { name: "green-dark-200", cls: "bg-green-dark-200" },
              { name: "green-light-100", cls: "bg-green-light-100 border" },
              { name: "green-light-200", cls: "bg-green-light-200 border" },
            ]}
          />
        </div>
      </section>

      {/* ============ TIPOGRAFÍA ============ */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-h3">Tipografía — Plus Jakarta Sans</h2>
        </div>
        <Card>
          <CardContent className="divide-border flex flex-col divide-y">
            {typeScale.map((t) => (
              <div key={t.name} className="flex items-start gap-6 py-3">
                <Preview label={t.name} />
                <span className={t.cls}>{t.sample}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <h2 className="text-h3 mt-10 mb-2">
          Escala alternativa — IvyPresto Display Light Italic
        </h2>
        <p className="text-body text-muted-foreground mb-6">
          Fuente comercial pendiente de licencia (ver TODO en layout). Hoy cae a
          la sans.
        </p>
        <Card>
          <CardContent className="divide-border flex flex-col divide-y">
            {typeScaleAlt.map((t) => (
              <div key={t.name} className="flex items-start gap-6 py-3">
                <Preview label={t.name} />
                <span className={t.cls}>{t.sample}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <h2 className="text-h3 mt-10 mb-2">Gradientes de marca</h2>
        <div className="max-w-md">
          <GradientPreview
            label="bg-gradient-tiendanube"
            cls="bg-gradient-tiendanube"
          />
        </div>
      </section>

      {/* ============ BOTONES ============ */}
      <section className="mb-16">
        <h2 className="text-h3 mb-6">Botones</h2>

        {/* Light */}
        <h3 className="text-h5-semibold text-text-dark-200 mb-4">
          Sobre fondo claro
        </h3>
        <Card>
          <CardContent className="flex flex-wrap items-center gap-6 py-6">
            <Button variant="default" size="lg">
              Comenzar gratis
            </Button>
            <Button variant="default">Comenzar gratis</Button>
            <Button variant="default" size="sm">
              Comenzar
            </Button>
            <Button variant="outline" size="lg">
              Ver demo
            </Button>
            <Button variant="outline">Ver demo</Button>
            <Button variant="outline" size="sm">
              Ver demo
            </Button>
            <Button variant="link">Leer más</Button>
            <Button variant="default" disabled>
              Deshabilitado
            </Button>
            <Button variant="outline" disabled>
              Deshabilitado
            </Button>
            <Button variant="link" disabled>
              Leer más
            </Button>
          </CardContent>
        </Card>

        {/* Dark */}
        <h3 className="text-h5-semibold text-text-dark-200 mt-8 mb-4">
          Sobre fondo oscuro
        </h3>
        <div className="bg-gradient-tiendanube rounded-2xl p-8">
          <div className="flex flex-wrap items-center gap-6">
            <Button variant="primary-dark" size="lg">
              Comenzar gratis
            </Button>
            <Button variant="primary-dark">Comenzar gratis</Button>
            <Button variant="primary-dark" size="sm">
              Comenzar
            </Button>
            <Button variant="secondary-dark" size="lg">
              Ver demo
            </Button>
            <Button variant="secondary-dark">Ver demo</Button>
            <Button variant="secondary-dark" size="sm">
              Ver demo
            </Button>
            <Button variant="link-dark">Leer más</Button>
            <Button variant="primary-dark" disabled>
              Deshabilitado
            </Button>
            <Button variant="secondary-dark" disabled>
              Deshabilitado
            </Button>
            <Button variant="link-dark" disabled>
              Leer más
            </Button>
          </div>
        </div>

        {/* Icono opcional + variantes base shadcn */}
        <h3 className="text-h5-semibold text-text-dark-200 mt-8 mb-4">
          Con icono y variantes base
        </h3>
        <Card>
          <CardContent className="flex flex-wrap items-center gap-6 py-6">
            <Button variant="default" icon={<RefreshCw />}>
              Actualizar
            </Button>
            <Button variant="secondary">Secundario</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Eliminar</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

function Swatch({ name, cls }: { name: string; cls: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-12 w-12 shrink-0 rounded-lg ${cls}`} />
      <div>
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  )
}

function SwatchGroup({
  title,
  tokens,
}: {
  title: string
  tokens: Array<{ name: string; cls: string }>
}) {
  return (
    <div>
      <h3 className="text-h5-semibold text-text-dark-200 mb-3">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {tokens.map((t) => (
          <Swatch key={t.name} {...t} />
        ))}
      </div>
    </div>
  )
}

function GradientPreview({ label, cls }: { label: string; cls: string }) {
  return (
    <div className={cls}>
      <div className="flex h-28 items-end rounded-lg p-3">
        <span className="text-xs font-medium text-white/90">{label}</span>
      </div>
    </div>
  )
}
