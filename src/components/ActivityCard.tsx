import { Building2, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Activity } from "@/lib/types"
import { ClipboardCheck } from "lucide-react"

export function ActivityCard({ activity }: { activity: Activity }) {
  const { titulo, descripcion, fecha, categoria } = activity;

  const inicio = categoria === "docente" 
    ? `Se desempeñó como ${titulo}`
    : `Se desempeñó como "${titulo}"`;

  const textoFormal = `${inicio} durante el período del ${fecha}. Según lo establecido en ${descripcion}.`;

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <p className="text-slate-900 leading-normal text-sm md:text-base font-serif italic text-justify">
        {textoFormal}
      </p>
    </div>
  );
}