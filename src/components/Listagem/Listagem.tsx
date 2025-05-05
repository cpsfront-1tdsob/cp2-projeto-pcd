import ServicosLista from "@/components/Servicos/ServicosLista"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Serviços para PCD | Portal PCD",
  description: "Lista de serviços e recursos para pessoas com deficiência",
}

export default function Listagem() {
  return (
    <div className="pt-[12vh] min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
          Serviços para Pessoas com Deficiência
        </h1>
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto text-gray-700">
          Encontre informações, recursos e apoio para diversas necessidades. Clique em um serviço para obter mais
          detalhes.
        </p>
        <ServicosLista />
      </div>
    </div>
  )
}
