import { ActivityCard } from "@/components/ActivityCard"
import { Badge } from "@/components/ui/badge"
import { ClipboardList } from "lucide-react"
import type { Activity } from "@/lib/types"
import { useState } from 'react';

interface ActivitiesListProps {
  activities: Activity[]
}

export default function ActivitiesList({ activities }: ActivitiesListProps) {
  // Obtenemos categorías únicas
  const categories = Array.from(new Set(activities.map((a) => a.categoria)))
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filtered = activeFilter
    ? activities.filter((a) => a.categoria === activeFilter)
    : activities

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-primary" />
          <h3 className="text-base font-semibold text-foreground md:text-lg">
            Actividades Suplementarias
          </h3>
          <Badge variant="secondary" className="ml-1 text-xs">
            {filtered.length}
          </Badge>
        </div>
      </div>

      {/* Filtros por categoría */}
      <div className="mb-5 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveFilter(null)}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
            activeFilter === null
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:bg-secondary"
          }`}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              activeFilter === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-secondary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de resultados */}
      <div className="grid gap-3">
        {filtered.length > 0 ? (
          filtered.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))
        ) : (
          <p className="text-muted-foreground text-center py-10">No hay actividades registradas.</p>
        )}
      </div>
    </div>
  )
}