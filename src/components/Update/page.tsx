import UpdateForm from "@/components/Update/UpdateForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Atualizar Perfil | Portal PCD",
  description: "Atualize suas informações de perfil no Portal PCD",
}

export default function UpdatePage() {
  return (
    <div className="pt-[12vh] min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">Atualizar Perfil</h1>
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto text-gray-700">
          Atualize suas informações pessoais e preferências de conta.
        </p>
        <UpdateForm />
      </div>
    </div>
  )
}
