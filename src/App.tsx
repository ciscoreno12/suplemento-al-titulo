import { useState, useCallback } from "react"
import { Header } from "./components/Header"
import { SearchForm } from "./components/SearchForm"
import { StudentInfo } from "./components/StudentInfo"
import { EmptyState } from "./components/EmptyState"
import { NotFoundState } from "./components/NotFoundState"
import type { Student } from "./lib/types"
import { ActivitiesList } from "./components/ActivitiesList"

type SearchState = "idle" | "loading" | "found" | "not-found"

function App() {
  const [dni, setDni] = useState("")
  const [searchState, setSearchState] = useState<SearchState>("idle")
  const [student, setStudent] = useState<Student | null>(null)
  const [searchedDni, setSearchedDni] = useState("")

  const handleSearch = useCallback(async () => {
  const dniLimpio = dni.trim();
  if (dniLimpio.length < 7) return;

  setSearchState("loading");
  setSearchedDni(dniLimpio);

  const scriptUrl = `https://script.google.com/macros/s/AKfycbzgD7GCrBBXOIqFSKhdyo076oxAUzXNky-PK7uH7Etj2Usiz19qbiJkGLFC4kIFd4CEuw/exec`;

  try {
    const response = await fetch(`${scriptUrl}?dni=${dniLimpio}`, {
      method: "GET",
      // No agregar 'headers' ni 'mode: no-cors'
    });

    if (!response.ok) throw new Error("Error en la respuesta de Google");

    const data = await response.json();
    if (data && data.nombre) {
      setStudent(data);
      setSearchState("found");
    } else {
      setStudent(null);
      setSearchState("not-found");
    }
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    setSearchState("not-found");
  }
}, [dni]);

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <SearchForm 
          dni={dni} 
          onDniChange={setDni} 
          onSearch={handleSearch} 
          isLoading={searchState === "loading"} 
        />

        <div className="mt-8">
          {/* 1. Estado Inicial */}
          {searchState === "idle" && <EmptyState />}

          {/* 2. Cargando */}
          {searchState === "loading" && (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
            </div>
          )}

          {/* 3. No encontrado */}
          {searchState === "not-found" && <NotFoundState dni={searchedDni} />}

          {searchState === "found" && student && (
            <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto px-4 pb-20">
              <StudentInfo student={student} />
              
              <div className="space-y-2">
                
                <ActivitiesList activities={student.actividades} />
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="py-8 border-t text-center flex flex-col items-center gap-3">
        {/* LOGO PNG */}
        <img 
          src="/logo-unahur.png" 
          alt="Logo UNAHUR" 
          className="h-10 w-auto" 
        />
        
        {/* TU TEXTO ORIGINAL */}
        <p className="text-sm text-muted-foreground uppercase tracking-wide">
          UNAHUR | Suplemento al Título
        </p>
      </footer>
    </div>
  )
}

export default App;