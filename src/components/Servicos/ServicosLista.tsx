"use client"

import type React from "react"

import { serivcesData } from "@/data/data"
import { useRouter } from "next/navigation"
import { useState } from "react"
import ServicoCard from "./ServicoCard"

export default function ServicosLista() {
  const router = useRouter()
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  

  // Map service types to their respective routes
  const serviceRoutes: Record<string, string> = {
    "Saúde e Reabilitação": "/servicos/saude",
    "Benefícios e Direitos": "/servicos/beneficios",
    "Emprego e profissionalização": "/servicos/emprego",
    "Educação Inclusiva": "/servicos/educacao",
    "Acessibilidade urbana": "/servicos/acessibilidade",
    "Apoio psicológico": "/servicos/apoio",
    "Produtos Tecnologia Assistiva": "/servicos/tecnologia",
    "Denúncias e Reclamações": "/servicos/denuncias",
  }

  const handleServiceClick = (tipo: string) => {
    const route = serviceRoutes[tipo] || "/servicos"
    router.push(route)
  }

  const handleKeyDown = (e: React.KeyboardEvent, tipo: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleServiceClick(tipo)
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {serivcesData.map((servico, index) => (
        <ServicoCard
          key={servico.id}
          servico={servico}
          onClick={() => handleServiceClick(servico.tipo)}
          onKeyDown={(e) => handleKeyDown(e, servico.tipo)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
          isFocused={focusedIndex === index}
        />
      ))}
    </div>
  )
}
