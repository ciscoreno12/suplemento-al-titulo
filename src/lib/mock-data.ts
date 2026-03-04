import type { Student } from "@/lib/types"

export const students: Student[] = [
  {
    dni: "40123456",
    nombre: "Maria Gonzalez",
    carrera: "Licenciatura en Informatica",
    actividades: [
      {
        id: "1",
        titulo: "Congreso Nacional de Tecnologia e Innovacion",
        descripcion:
          "Participacion como asistente en el Congreso Nacional de Tecnologia, con exposiciones sobre inteligencia artificial y desarrollo sustentable.",
        categoria: "Congreso",
        fecha: "15/03/2025",
        horas: 20,
        lugar: "Centro Cultural Kirchner, CABA",
      },
      {
        id: "2",
        titulo: "Taller de Programacion en Python",
        descripcion:
          "Taller introductorio de programacion en Python orientado a ciencia de datos, organizado por el Departamento de Informatica.",
        categoria: "Taller",
        fecha: "10/05/2025",
        horas: 16,
        lugar: "Campus UNAHUR",
      },
      {
        id: "3",
        titulo: "Voluntariado Comunitario - Alfabetizacion Digital",
        descripcion:
          "Programa de voluntariado para ensenar herramientas digitales basicas a adultos mayores en centros comunitarios de Hurlingham.",
        categoria: "Voluntariado",
        fecha: "01/06/2025",
        horas: 40,
        lugar: "Centro Comunitario Villa Tesei",
      },
      {
        id: "4",
        titulo: "Proyecto de Investigacion: IA aplicada a la Salud",
        descripcion:
          "Integrante del equipo de investigacion sobre aplicaciones de machine learning para la deteccion temprana de enfermedades.",
        categoria: "Investigacion",
        fecha: "20/08/2025",
        horas: 60,
      },
      {
        id: "5",
        titulo: "Curso de Extension: Ciberseguridad",
        descripcion:
          "Curso sobre fundamentos de ciberseguridad, hacking etico y proteccion de datos personales, dictado por profesionales del sector.",
        categoria: "Curso",
        fecha: "05/09/2025",
        horas: 24,
        lugar: "Campus UNAHUR",
      },
      {
        id: "6",
        titulo: "Jornadas de Extension Universitaria",
        descripcion:
          "Participacion en las jornadas de extension con presentacion de proyecto sobre accesibilidad web para personas con discapacidad.",
        categoria: "Extension",
        fecha: "12/11/2025",
        horas: 12,
        lugar: "Auditorio UNAHUR",
      },
    ],
  },
  {
    dni: "41234567",
    nombre: "Juan Perez",
    carrera: "Ingenieria en Alimentos",
    actividades: [
      {
        id: "7",
        titulo: "Congreso Latinoamericano de Ciencia y Tecnologia de Alimentos",
        descripcion:
          "Asistencia y presentacion de poster sobre conservacion de alimentos mediante tecnicas de alta presion.",
        categoria: "Congreso",
        fecha: "22/04/2025",
        horas: 16,
        lugar: "Universidad de Buenos Aires",
      },
      {
        id: "8",
        titulo: "Taller de Buenas Practicas de Manufactura",
        descripcion:
          "Taller teorico-practico sobre BPM en la industria alimentaria, con enfoque en normativas vigentes.",
        categoria: "Taller",
        fecha: "18/07/2025",
        horas: 12,
        lugar: "Campus UNAHUR",
      },
      {
        id: "9",
        titulo: "Voluntariado en Banco de Alimentos",
        descripcion:
          "Colaboracion en la clasificacion y distribucion de alimentos para comedores comunitarios del partido de Hurlingham.",
        categoria: "Voluntariado",
        fecha: "10/08/2025",
        horas: 30,
        lugar: "Banco de Alimentos Zona Oeste",
      },
    ],
  },
]
