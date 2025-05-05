"use client"
import type { TipoUsuario } from "@/types/TipoUsuario"
import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Cadastro() {
  const router = useRouter()
  const [usuario, setUsuario] = useState<TipoUsuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUsuario({ ...usuario, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios") || "[]")
    const novoUsuario = {
      id: listaUsuarios.length + 1,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
    }

    listaUsuarios.push(novoUsuario)

    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
    alert("Usuário cadastrado com sucesso! Faça login para acessar todas as funcionalidades.")

    //Limpando os campos do form.
    setUsuario({
      id: 0,
      nome: "",
      email: "",
      senha: "",
    })

    // Redirect to login page
    router.push("/login")
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form-cadastro min-h-screen flex flex-col justify-center items-center p-4"
      >
        <fieldset className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <legend className="text-2xl font-semibold text-center mb-4">CADASTRO</legend>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-lg font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              placeholder="Digite seu nome"
              value={usuario.nome}
              onChange={(e) => handleChange(e)}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="name"
              required
              placeholder="Digite seu email"
              value={usuario.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              required
              placeholder="Digite sua senha"
              value={usuario.senha}
              onChange={(e) => handleChange(e)}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              id="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Cadastrar
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
