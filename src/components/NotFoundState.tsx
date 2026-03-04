import { UserX } from "lucide-react"

interface NotFoundStateProps {
  dni: string
}

export function NotFoundState({ dni }: NotFoundStateProps) {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <UserX className="h-7 w-7 text-destructive" />
      </div>
      <h3 className="mb-1 text-base font-semibold text-foreground">
        Alumno no encontrado
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        No se encontraron registros para el DNI{" "}
        <span className="font-medium text-foreground">{dni}</span>. Verifica
        que el numero sea correcto.
      </p>
    </div>
  )
}
