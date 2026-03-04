import { Building2, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Activity } from "@/lib/types"
import { ClipboardCheck } from "lucide-react"

export function ActivityCard({ activity }: { activity: Activity }) {

  const generarTextoFormal = (act: Activity) => {
    const { titulo, descripcion, fecha } = act;
    
    // "descripcion" contiene la Resolución según nuestro script
    return `El egresado se desempeñó en la actividad "${titulo}" durante el período ${fecha}. Según lo establecido en: ${descripcion}.`;
  };

  return (
    <div className="py-4 border-b border-gray-200 last:border-0 hover:bg-slate-50 transition-colors px-2">
      <div className="flex gap-4 items-start">
        <div className="mt-1 bg-primary/10 p-2 rounded-full">
          <ClipboardCheck className="h-4 w-4 text-primary" />
        </div>
        <p className="text-gray-800 leading-relaxed text-sm md:text-base font-serif">
          {generarTextoFormal(activity)}
        </p>
      </div>
    </div>
  
  )
}