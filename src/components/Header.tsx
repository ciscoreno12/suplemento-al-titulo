import { GraduationCap } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-4 md:px-6">
        <div className="flex items-center justify-center rounded-lg bg-primary p-2">
          <GraduationCap className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-card-foreground md:text-xl">
            UNAHUR
          </h1>
          <p className="text-xs text-muted-foreground md:text-sm">
            Universidad Nacional de Hurlingham
          </p>
        </div>
      </div>
    </header>
  )
}
