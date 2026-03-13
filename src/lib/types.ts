export interface Activity {
  id: string;
  titulo: string;
  tipo: "asistente" | "esi" | "centro_tecnologico" | string;
  periodo: string;
  resolucion?: string;
  materiaQueConcurso?: string; 
  nota?: string;
}

export interface Student {
  dni: string
  nombre: string
  actividades: Activity[]
}
