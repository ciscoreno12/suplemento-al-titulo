import { GraduationCap } from "lucide-react"
import { useEffect } from "react";
import "tailwindcss"

export function Header() {

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-4 md:px-6">
        
        <div className="flex items-center justify-center rounded-lg bg-primary p-2">
          <GraduationCap className="h-8 w-8 text-primary-foreground" />
        </div>
        
        <div className="flex flex-col leading-tight border-l pl-4 border-gray-300">
          <span className="text-[14px] font-light uppercase tracking-tight text-gray-600">
            Universidad
          </span>
          <span className="text-[14px] font-light uppercase tracking-tight text-gray-600">
            Nacional de
          </span>
          <span className="text-[14px] font-black uppercase tracking-tighter">
            Hurlingham
          </span>
        </div>
      </div>
    </header>
  )
}