import { Search, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchFormProps {
  dni: string
  onDniChange: (value: string) => void
  onSearch: () => void
  isLoading: boolean
}

export function SearchForm({ dni, onDniChange, onSearch, isLoading }: SearchFormProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSearch()
  }


  return (
    <section className="mx-auto max-w-5xl px-4 pt-10 pb-6 md:px-6 md:pt-16 md:pb-8">
      <div className="mb-8 text-center md:mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
          Suplemento al Título
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Consulta tus actividades suplementarias de alumno ingresando tu DNI
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Ingrese el DNI del alumno"
            value={dni}
            onChange={(e) => onDniChange(e.target.value)}
            maxLength={8}
            className="h-11 pl-10 text-base"
            aria-label="DNI del alumno"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading || dni.length < 7}
          className="h-11 px-6"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Buscando...
            </>
          ) : (
            "Buscar"
          )}
        </Button>
      </form>
    </section>
  )
}
