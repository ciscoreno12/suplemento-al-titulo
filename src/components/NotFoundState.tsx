import { FileSearch, ExternalLink } from "lucide-react"

interface NotFoundStateProps {
  dni: string
}

export function NotFoundState({ dni }: NotFoundStateProps) {
  // Reemplaza con tu link real de Google Forms
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGs7opCGw9T7_BorqwFI5OUraXgK0MG2LkHFbK5ARHS1fDSA/viewform";

  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center animate-in fade-in duration-500">
      {/* Icono más institucional: búsqueda de archivos */}
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <FileSearch className="h-10 w-10 text-muted-foreground" />
      </div>

      <h3 className="mb-2 text-lg font-bold text-foreground uppercase tracking-tight">
        Sin registros de actividades
      </h3>
      
      <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-8">
        No se han encontrado actividades académicas, docentes o de extensión vinculadas al DNI{" "}
        <span className="font-bold text-foreground underline decoration-primary/30 underline-offset-2">
          {dni}
        </span>.
      </p>

      {/* Sección de Reclamo Integrada */}
      <div className="w-full pt-8 border-t border-border">
        <p className="text-xs md:text-sm mb-4">
          Si considerás que existe una omisión en tu registro oficial, podés informar a la institución mediante el siguiente enlace:
        </p>
        
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-extrabold text-primary hover:underline uppercase text-xs md:text-sm tracking-tight transition-all"
        >
          Formulario de Rectificación de Actividades
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}