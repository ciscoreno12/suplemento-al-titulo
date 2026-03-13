import { Activity } from "../lib/types";

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const { 
    titulo, 
    resolucion = "", 
    periodo, 
    materiaQueConcurso = "", 
    nota = "", 
    tipo 
  } = activity;

  const generarTexto = () => {
    switch (tipo) {
      case "asistente": {
        const m = materiaQueConcurso.toLowerCase().trim();

        const palabrasClaveFormacion = ["formacion", "formación"];
        const esCampoEspecial = palabrasClaveFormacion.some(p => m.includes(p));

        const conector = esCampoEspecial ? "en" : "en el área de";

        return `Se desempeñó como Estudiante Asistente durante el período del ${periodo}. Según lo establecido en ${resolucion}, ${conector} ${materiaQueConcurso}.`;
      }

      case "esi":
        return `Cursó y aprobó con calificación ${nota} el Seminario de Educación Sexual Integral en el período ${periodo}.`;

      case "centro_tecnologico": {
        const periodoTexto = periodo.charAt(0).toUpperCase() + periodo.slice(1).toLowerCase();
        return `Cursó ${materiaQueConcurso} en el Centro Tecnológico de Formación para el Trabajo y la Producción, correspondiente al ${periodoTexto}.`;
      }

      default: {
        const ref = resolucion ? `. Según lo establecido en ${resolucion}` : "";
        return `Se desempeñó como "${titulo}" durante el período del ${periodo}${ref}.`;
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-4 border-b border-slate-100 last:border-0">
      <p className="text-slate-900 leading-relaxed text-sm md:text-base font-serif italic text-justify">
        {generarTexto()}
      </p>
    </div>
  );
}