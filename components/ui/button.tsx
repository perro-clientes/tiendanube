import type { ReactNode } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { ArrowRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// ============================================================
// Button — variantes del design system Tiendanube.
// Forma: siempre pill (rounded-full). La landing usa secciones
// claras y oscuras, por eso cada variante tiene par dark.
// Compatible con las variantes base de shadcn (default/outline/
// secondary/ghost/destructive/link) usadas por componentes
// existentes: default→primary, outline→secondary.
// ============================================================
const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // primary (light) — azul de marca sobre fondo claro
        default:
          "bg-primary text-primary-foreground hover:bg-secondary-dark-100 disabled:bg-neutral-400 disabled:text-neutral-300 dark:bg-primary-light-100 dark:hover:bg-primary-light-200",
        // secondary (light) — outline azul transparente
        outline:
          "border-primary bg-transparent text-primary hover:bg-primary-light-200 disabled:border-neutral-300 disabled:text-neutral-300 dark:border-primary-light-100 dark:text-primary-light-100 dark:hover:bg-primary-light-100/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline disabled:text-neutral-300 disabled:no-underline",
        // ---- Dark (para secciones con fondo azul oscuro/gradiente) ----
        "primary-dark":
          "bg-primary-light-400 text-primary-dark-200 hover:bg-primary-light-100 disabled:bg-white/25 disabled:text-white/50 dark:bg-white dark:hover:bg-primary-light-100",
        "secondary-dark":
          "border-primary-light-400 bg-transparent text-primary-light-400 hover:bg-white/10 disabled:border-white/25 disabled:text-white/50 dark:border-white dark:text-white dark:hover:bg-white/10",
        "link-dark":
          "text-primary-light-400 underline-offset-4 hover:underline disabled:text-white/50 disabled:no-underline dark:text-white",
      },
      size: {
        default: "h-12 gap-2 px-6 text-cta",
        sm: "h-10 gap-2 px-5 text-cta-sm",
        lg: "h-14 gap-2 px-8 text-cta",
        icon: "size-11",
        "icon-sm": "size-10",
        "icon-lg": "size-13",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"]
export type ButtonSize = VariantProps<typeof buttonVariants>["size"]

interface ButtonProps
  extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  iconPosition?: "start" | "end"
}

function Button({
  className,
  variant = "default",
  size = "default",
  icon,
  iconPosition = "end",
  children,
  ...props
}: ButtonProps) {
  const isLink = variant === "link" || variant === "link-dark"

  const iconEl =
    icon !== undefined ? (
      <span
        data-slot="button-icon"
        className="inline-flex shrink-0 items-center [&_svg]:size-4"
      >
        {icon}
      </span>
    ) : null

  const linkArrow = isLink ? (
    <ArrowRight
      data-slot="button-link-arrow"
      className="size-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover/button:translate-x-0 group-hover/button:opacity-100 group-focus-visible/button:translate-x-0 group-focus-visible/button:opacity-100"
    />
  ) : null

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {iconPosition === "start" && iconEl}
      {children}
      {isLink ? linkArrow : iconPosition === "end" ? iconEl : null}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
