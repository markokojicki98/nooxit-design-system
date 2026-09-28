import { cn } from "nooxit-design-system/lib/utils"

export function PageHeader({
  title,
  children,
  actions,
  className,
}: {
  title: React.ReactNode
  children?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 @2xl/main:flex-row @2xl/main:items-start @2xl/main:justify-between",
        className
      )}
    >
      <div className="flex min-w-0 flex-col gap-2">
        <h1 className="text-3xl leading-9 font-medium tracking-tight text-balance @4xl/main:text-4xl @4xl/main:leading-10">
          {title}
        </h1>
        {children ? (
          <p className="max-w-[65ch] text-base leading-6 text-pretty text-muted-foreground">
            {children}
          </p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      ) : null}
    </div>
  )
}
