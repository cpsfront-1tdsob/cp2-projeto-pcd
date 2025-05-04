"use client"

import type { TipoUsuario } from "@/types/TipoUsuario"
import type React from "react"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Extended user type with additional fields
interface UsuarioExtendido extends TipoUsuario {
  telefone?: string
  endereco?: string
  cidade?: string
  estado?: string
  cep?: string
  tipoDeficiencia?: string
  necessidadesEspeciais?: string
}

export default function UpdateForm() {
  const router = useRouter()
  const [usuario, setUsuario] = useState<UsuarioExtendido>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    tipoDeficiencia: "",
    necessidadesEspeciais: "",
  })

  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState({ text: "", type: "" })
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(false)

  // Estados brasileiros para o select
  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ]

  // Tipos de deficiência para o select
  const tiposDeficiencia = [
    "Física",
    "Visual",
    "Auditiva",
    "Intelectual",
    "Múltipla",
    "Transtorno do Espectro Autista",
    "Outra",
  ]

  useEffect(() => {
    // Simulação de verificação de login
    const checkLogin = () => {
      const token = localStorage.getItem("token")
      if (!token) {
        setMessage({
          text: "Você precisa estar logado para acessar esta página.",
          type: "error",
        })
        setTimeout(() => {
          router.push("/login")
        }, 2000)
        return false
      }
      return true
    }

    const isLoggedIn = checkLogin()
    if (!isLoggedIn) return

    // Buscar usuários do localStorage
    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios") || "[]")

    // Simulação: pegar o primeiro usuário da lista (em um app real, usaríamos o ID do usuário logado)
    if (listaUsuarios.length > 0) {
      // Extender o usuário com campos adicionais se não existirem
      const usuarioAtual = {
        ...listaUsuarios[0],
        telefone: listaUsuarios[0].telefone || "",
        endereco: listaUsuarios[0].endereco || "",
        cidade: listaUsuarios[0].cidade || "",
        estado: listaUsuarios[0].estado || "",
        cep: listaUsuarios[0].cep || "",
        tipoDeficiencia: listaUsuarios[0].tipoDeficiencia || "",
        necessidadesEspeciais: listaUsuarios[0].necessidadesEspeciais || "",
      }

      setUsuario(usuarioAtual)
      setUsuarioEncontrado(true)
    } else {
      setMessage({
        text: "Nenhum usuário encontrado. Por favor, cadastre-se primeiro.",
        type: "error",
      })
    }

    setLoading(false)
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setUsuario({ ...usuario, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validação básica
    if (!usuario.nome || !usuario.email || !usuario.senha) {
      setMessage({
        text: "Por favor, preencha todos os campos obrigatórios.",
        type: "error",
      })
      return
    }

    // Buscar lista de usuários
    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios") || "[]")

    // Encontrar e atualizar o usuário
    const index = listaUsuarios.findIndex((u: TipoUsuario) => u.id === usuario.id)

    if (index !== -1) {
      listaUsuarios[index] = usuario
      localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))

      setMessage({
        text: "Perfil atualizado com sucesso!",
        type: "success",
      })
    } else {
      setMessage({
        text: "Erro ao atualizar perfil. Usuário não encontrado.",
        type: "error",
      })
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {message.text && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
          role="alert"
        >
          {message.text}
        </div>
      )}

      {usuarioEncontrado ? (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-blue-900 border-b pb-2">Informações Pessoais</h2>
            </div>

            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={usuario.nome}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={usuario.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                Senha <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={usuario.senha}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={usuario.telefone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-blue-900 border-b pb-2 mt-4">Endereço</h2>
            </div>

            {/* Endereço */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-1">
                Endereço
              </label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={usuario.endereco}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Cidade */}
            <div>
              <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
                Cidade
              </label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={usuario.cidade}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Estado */}
            <div>
              <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-1">
                Estado
              </label>
              <select
                id="estado"
                name="estado"
                value={usuario.estado}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione um estado</option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>

            {/* CEP */}
            <div>
              <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">
                CEP
              </label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={usuario.cep}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-blue-900 border-b pb-2 mt-4">
                Informações de Acessibilidade
              </h2>
            </div>

            {/* Tipo de Deficiência */}
            <div>
              <label htmlFor="tipoDeficiencia" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Deficiência
              </label>
              <select
                id="tipoDeficiencia"
                name="tipoDeficiencia"
                value={usuario.tipoDeficiencia}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione uma opção</option>
                {tiposDeficiencia.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            {/* Necessidades Especiais */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="necessidadesEspeciais" className="block text-sm font-medium text-gray-700 mb-1">
                Necessidades Especiais ou Preferências de Acessibilidade
              </label>
              <textarea
                id="necessidadesEspeciais"
                name="necessidadesEspeciais"
                value={usuario.necessidadesEspeciais}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Descreva quaisquer necessidades especiais ou preferências de acessibilidade que você gostaria que soubéssemos."
              ></textarea>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="mr-4 px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Nenhum usuário encontrado. Por favor, faça login ou cadastre-se primeiro.
              </p>
              <div className="mt-4">
                <div className="flex space-x-4">
                  <button
                    onClick={() => router.push("/login")}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Ir para Login
                  </button>
                  <button
                    onClick={() => router.push("/cadastro")}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Cadastrar-se
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
