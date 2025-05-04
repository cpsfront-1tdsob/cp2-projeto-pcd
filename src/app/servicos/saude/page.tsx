import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Serviços de Saúde e Reabilitação | Portal PCD",
  description: "Informações sobre serviços de saúde e reabilitação para pessoas com deficiência",
}

export default function DetalhesSaude() {
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
              <span className="text-gray-700">Saúde e Reabilitação</span>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-80">
            <Image
              src="/images/Serviços-de-Saúde-Reabilitação.jpg"
              alt="Serviços de Saúde e Reabilitação"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3" aria-hidden="true">
                🏥
              </span>
              <h1 className="text-3xl font-bold text-blue-900">Serviços de Saúde e Reabilitação</h1>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Acesso a informações e recursos relacionados a cuidados de saúde, terapias e programas de reabilitação
                adaptados para pessoas com deficiência.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">Serviços Disponíveis</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Centros de reabilitação especializados</li>
                <li>Terapias físicas e ocupacionais</li>
                <li>Atendimento médico especializado</li>
                <li>Programas de reabilitação personalizada</li>
                <li>Orientação para familiares e cuidadores</li>
                <li>Acesso a equipamentos médicos e de reabilitação</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-3">Como Acessar</h2>
              <p>Para acessar os serviços de saúde e reabilitação, você pode:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>Consultar o Sistema Único de Saúde (SUS) em sua cidade</li>
                <li>Buscar encaminhamento médico para serviços especializados</li>
                <li>Contatar associações e ONGs que oferecem suporte</li>
                <li>Verificar programas municipais e estaduais de assistência</li>
              </ol>

              <div className="bg-blue-50 p-4 rounded-lg mt-6 border border-blue-200">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Dica Importante</h3>
                <p>
                  Mantenha seus documentos médicos e laudos organizados para facilitar o acesso aos serviços. O Cartão
                  Nacional de Saúde (CNS) é essencial para atendimento no SUS.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Link
                href="/listagem"
                className="inline-flex items-center px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                ← Voltar para Serviços
              </Link>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                aria-label="Compartilhar esta informação"
              >
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
