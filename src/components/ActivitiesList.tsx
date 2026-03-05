import { ActivityCard } from "@/components/ActivityCard"
import { Badge } from "@/components/ui/badge"
import { ClipboardList } from "lucide-react"
import type { Activity } from "@/lib/types"
import { useState } from 'react';

interface ActivitiesListProps {
  activities: Activity[]
}

export function ActivitiesList({ activities }: { activities: Activity[] }) {
  const academicas = activities.filter(a => a.categoria === "academica");
  const docentes = activities.filter(a => a.categoria === "docente");

  return (
    <div className="w-full space-y-8">
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
    </div>
  );
}