import { Card, CardContent } from "@/components/ui/card"
import { User, BookOpen, Hash } from "lucide-react"
import type { Student } from "@/lib/types"

interface StudentInfoProps {
  student: Student
}

export function StudentInfo({ student }: StudentInfoProps) {
  return (
    <Card className="border-border">
      <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <User className="h-7 w-7 text-primary" />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-lg font-semibold text-card-foreground">
            {student.nombre}
          </h3>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
            <span className="flex items-center gap-1.5">
              <Hash className="h-3.5 w-3.5" />
              DNI: {student.dni}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5" />
              {student.carrera}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
