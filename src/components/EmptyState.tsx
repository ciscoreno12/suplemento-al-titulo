import { Search } from "lucide-react"

export function EmptyState() {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Search className="h-7 w-7 text-muted-foreground" />
      </div>
      <h3 className="mb-1 text-base font-semibold text-foreground">
        Buscar alumno
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Ingresa un DNI en el buscador para consultar las actividades
        suplementarias del alumno.
      </p>
    </div>
  )
}
