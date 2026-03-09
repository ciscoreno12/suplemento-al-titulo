import { GraduationCap } from "lucide-react"
import "tailwindcss"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-4 md:px-6">
        <div className="flex items-center justify-center rounded-lg bg-primary p-2">
          <GraduationCap className="h-6 w-6 text-primary-foreground" />
        </div>
        
        <div className="flex flex-col">
          <h1 style={{ color: 'var(--primary)' }} className="text-lg font-bold md:text-xl">
            UNAHUR
          </h1>
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:text-xs">
            Universidad Nacional de Hurlingham
          </p>
        </div>
      </div>
    </header>
  )
}