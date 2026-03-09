import { ActivityCard } from "@/components/ActivityCard"
import { ExternalLink } from "lucide-react"
import type { Activity } from "@/lib/types"

interface ActivitiesListProps {
  activities: Activity[]
}

export function ActivitiesList({ activities }: ActivitiesListProps) {
  const academicas = activities.filter(a => a.categoria === "academica");
  const docentes = activities.filter(a => a.categoria === "docente");
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGs7opCGw9T7_BorqwFI5OUraXgK0MG2LkHFbK5ARHS1fDSA/viewform";

  return (
    <div className="w-full space-y-12">
      {/* SECCIÓN ACADÉMICA */}
      {academicas.length > 0 && (
        <section>
          <h2 className="text-center font-bold uppercase tracking-widest border-y border-black py-2 mb-6 text-sm md:text-base">
            Actividades Académicas, de Extensión y/o de Investigación Extracurriculares
          </h2>
          <div className="space-y-1">
            {academicas.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </section>
      )}

      {/* SECCIÓN DOCENTE */}
      {docentes.length > 0 && (
        <section>
          <h2 className="text-center font-bold uppercase tracking-widest border-y border-black py-2 mb-6 text-sm md:text-base">
            Actividades Docentes
          </h2>
          <div className="space-y-1">
            {docentes.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </section>
      )}

      <footer className="mt-20 border-t-2 border-black pt-8">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-sm md:text-lg text-foreground font-medium leading-relaxed italic">
      <span className="font-black uppercase tracking-tighter text-lg md:text-xl not-italic block mb-2">
        Importante:
      </span>
      Ante cualquier omisión o discrepancia en las actividades académicas, 
      el/la estudiante deberá informar a la institución a través del siguiente enlace:
    </p>
    
    {/* Contenedor extra para asegurar el centrado del link */}
    <div className="mt-4 flex justify-center">
      <a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-black uppercase hover:underline decoration-2 underline-offset-4 transition-colors not-italic text-sm md:text-base"
      >
        Formulario de Rectificación de Actividades
        <ExternalLink className="h-5 w-5" />
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}