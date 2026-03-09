import { FileSearch, ExternalLink } from "lucide-react"

interface NotFoundStateProps {
  dni: string
}

export function NotFoundState({ dni }: NotFoundStateProps) {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGs7opCGw9T7_BorqwFI5OUraXgK0MG2LkHFbK5ARHS1fDSA/viewform";

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center py-10 px-4 text-center animate-in fade-in slide-in-from-top-2 duration-500">
      
      {/* 1. SECCIÓN DE ESTADO: El icono y el mensaje principal */}
      <div className="flex flex-col items-center mb-10">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted/50 border border-border">
          <FileSearch className="h-10 w-10 text-muted-foreground" />
        </div>

        <h3 className="mb-2 text-xl font-bold text-foreground uppercase tracking-tight">
          Sin registros de actividades
        </h3>
        
        <p className="text-base text-muted-foreground leading-relaxed max-w-md">
          No se han encontrado registros académicos o docentes vinculados al DNI{" "}
          <span className="font-bold text-foreground underline decoration-primary/30 underline-offset-4">
            {dni}
          </span>.
        </p>
      </div>

      {/* 2. SECCIÓN DE ACCIÓN: La nota importante y el enlace */}
      <div className="w-full pt-10 border-t border-border">
        <div className="max-w-xl mx-auto">
          <p className="text-sm md:text-base text-foreground font-medium leading-relaxed italic mb-6">
            <span className="font-black uppercase tracking-tighter text-lg block mb-2 not-italic">
              Importante:
            </span>
            Si considerás que existe una omisión en el registro oficial del Suplemento al Título, por favor informá la situación mediante el siguiente enlace:
          </p>
          
          <div className="flex justify-center">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-black uppercase hover:underline decoration-2 underline-offset-4 transition-all text-sm md:text-base group"
            >
              Formulario de Rectificación de Actividades
              <ExternalLink className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}