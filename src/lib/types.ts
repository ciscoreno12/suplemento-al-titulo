export interface Activity {
  id: string
  titulo: string
  descripcion: string
  categoria: string
  fecha: string
}

export interface Student {
  dni: string
  nombre: string
  actividades: Activity[]
}
