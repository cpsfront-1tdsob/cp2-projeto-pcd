import Link from "next/link"

export default function NotFound() {
  return (
    <div className="pt-[12vh] min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Serviço não encontrado</h2>
        <p className="text-gray-600 mb-6">
          O serviço que você está procurando não existe ou foi movido para outro endereço.
        </p>
        <Link
          href="/listagem"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Voltar para Listagem de Serviços
        </Link>
      </div>
    </div>
  )
}
