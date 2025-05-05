import Link from "next/link"

export default function Acesso() {
  return (
    <div className="pt-[12vh] min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6 max-w-md">
        <div className="mb-6 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-4V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h6a3 3 0 003-3v-1"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-red-600 mb-4">Acesso Restrito</h1>
        <p className="text-gray-600 mb-6">
          Esta página é restrita a usuários cadastrados. Por favor, faça login ou cadastre-se para acessar o conteúdo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Fazer Login
          </Link>
          <Link
            href="/cadastro"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cadastrar-se
          </Link>
        </div>
      </div>
    </div>
  )
}
