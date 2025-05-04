"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

interface Servico {
  id: number
  image: string
  tipo: string
}

interface ServicoCardProps {
  servico: Servico
  onClick: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
  onFocus: () => void
  onBlur: () => void
  isFocused: boolean
}

export default function ServicoCard({ servico, onClick, onKeyDown, onFocus, onBlur, isFocused }: ServicoCardProps) {
  const [imageError, setImageError] = useState(false)

  // Use the image name directly since we've updated the data file
  const imagePath = `/images/${servico.image}`

  // Map service types to their respective icons and colors
  const serviceIcons: Record<string, { icon: string; color: string }> = {
    "Saúde e Reabilitação": { icon: "🏥", color: "bg-red-100 border-red-300 hover:bg-red-200" },
    "Benefícios e Direitos": { icon: "⚖️", color: "bg-blue-100 border-blue-300 hover:bg-blue-200" },
    "Emprego e profissionalização": { icon: "💼", color: "bg-green-100 border-green-300 hover:bg-green-200" },
    "Educação Inclusiva": { icon: "🎓", color: "bg-yellow-100 border-yellow-300 hover:bg-yellow-200" },
    "Acessibilidade urbana": { icon: "🏙️", color: "bg-purple-100 border-purple-300 hover:bg-purple-200" },
    "Apoio psicológico": { icon: "🧠", color: "bg-pink-100 border-pink-300 hover:bg-pink-200" },
    "Produtos Tecnologia Assistiva": { icon: "🔧", color: "bg-indigo-100 border-indigo-300 hover:bg-indigo-200" },
    "Denúncias e Reclamações": { icon: "📢", color: "bg-orange-100 border-orange-300 hover:bg-orange-200" },
  }

  const { icon, color } = serviceIcons[servico.tipo] || {
    icon: "ℹ️",
    color: "bg-gray-100 border-gray-300 hover:bg-gray-200",
  }

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 transform ${
        isFocused ? "scale-105 ring-2 ring-blue-500" : "hover:scale-105"
      } ${color} border cursor-pointer`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes sobre ${servico.tipo}`}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className="relative h-48 w-full">
        {!imageError ? (
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={`Ilustração de ${servico.tipo}`}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-6xl" aria-hidden="true">
              {icon}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <span className="mr-2" aria-hidden="true">
            {icon}
          </span>
          {servico.tipo}
        </h2>
        <p className="text-gray-700">Clique para acessar informações e recursos sobre {servico.tipo.toLowerCase()}.</p>
      </div>
    </div>
  )
}
