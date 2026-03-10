import { Card, CardContent } from "@/components/ui/card"
import { User, BookOpen, Hash } from "lucide-react"
import type { Student } from "@/lib/types"

interface StudentInfoProps {
  student: Student
}

export function StudentInfo({ student }: StudentInfoProps) {
  return (
    <Card className="border-none shadow-none bg-muted/30">
      <CardContent className="p-6 flex items-center gap-5">
        <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-primary-foreground">
          <User className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-foreground uppercase tracking-tight">
            {student.nombre}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="h-1 w-1 rounded-full bg-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              DNI: {student.dni}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}