import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { serivcesData } from "@/data/data"

export async function generateMetadata({ params }: { params: { tipo: string } }): Promise<Metadata> {
  const servicoTipo = getServiceType(params.tipo)

  if (!servicoTipo) {
    return {
      title: "Serviço não encontrado | Portal PCD",
      description: "O serviço solicitado não foi encontrado",
    }
  }

  return {
    title: `${servicoTipo} | Portal PCD`,
    description: `Informações sobre ${servicoTipo.toLowerCase()} para pessoas com deficiência`,
  }
}

function getServiceType(slug: string): string | undefined {
  const serviceMap: Record<string, string> = {
    beneficios: "Benefícios e Direitos",
    emprego: "Emprego e profissionalização",
    educacao: "Educação Inclusiva",
    acessibilidade: "Acessibilidade urbana",
    apoio: "Apoio psicológico",
    tecnologia: "Produtos Tecnologia Assistiva",
    denuncias: "Denúncias e Reclamações",
  }

  return serviceMap[slug]
}

function getServiceData(tipo: string) {
  return serivcesData.find((servico) => servico.tipo === tipo)
}

export default function DetalhesServico({ params }: { params: { tipo: string } }) {
  const servicoTipo = getServiceType(params.tipo)

  if (!servicoTipo) {
    notFound()
  }

  const servicoData = getServiceData(servicoTipo)

  if (!servicoData) {
    notFound()
  }

  // Fix image path
  const imagePath = `/images/${servicoData.image.split("/").pop()}`

  return (
    <div className="pt-[12vh] min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Início
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/listagem" className="text-blue-600 hover:underline">
                Serviços
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-700">{servicoTipo}</span>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-80">
            <Image src={imagePath || "/placeholder.svg"} alt={servicoTipo} fill className="object-cover" />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">{servicoTipo}</h1>

            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Esta página contém informações detalhadas sobre {servicoTipo.toLowerCase()} para pessoas com
                deficiência.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg mt-6 border border-yellow-200">
                <h3 className="text-lg font-medium text-yellow-800 mb-2">Página em Desenvolvimento</h3>
                <p>
                  Estamos trabalhando para trazer informações completas sobre este serviço em breve. Por favor, volte
                  mais tarde para conteúdo atualizado.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/listagem"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                ← Voltar para Serviços
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
