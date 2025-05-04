"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="pt-[12vh] min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Algo deu errado!</h1>
        <p className="text-gray-600 mb-6">
          Ocorreu um erro ao carregar a página de serviços. Por favor, tente novamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Tentar novamente
          </button>
          <Link href="/" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  )
}
