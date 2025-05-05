"use client";
import { listaDeUsuarios } from "@/data/listaDeUsuarios";
import { loginUser } from "@/lib/auth";
import { TipoUsuario } from "@/types/TipoUsuario";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";



export default function Form() {


  const navigate = useRouter();

  const [listaUsuarios, setlistaUsuarios] = useState<TipoUsuario[]>()


  
  useEffect(() => {

    if(!localStorage.getItem("listaUsuarios")){
      localStorage.setItem("listaUsuarios", JSON.stringify(listaDeUsuarios));
    }
  
    setlistaUsuarios(JSON.parse(localStorage.getItem("listaUsuarios") || "[]"))
  }, []);

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id: 0,
    nome: "",
    email: "",
    senha: ""
  });


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    
      const {name,value} = e.target;
      setUsuario({...usuario, [name]: value});
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if (listaUsuarios != undefined) {

      for (let x = 0; x < listaUsuarios.length; x++) {
        if (listaUsuarios[x].email === usuario.email && listaUsuarios[x].senha === usuario.senha) {
          // alert("Usuário validado com sucesso!");
          loginUser("abc-123");
          navigate.push("/");
          return;
        }
      }
    }

    alert("Usuário ou senha inválidos!");
    navigate.push("/erro")
  }

  return (
    <div>

      <form onSubmit={handleSubmit} className="form-login min-h-screen flex flex-col justify-center items-center p-4">
        <fieldset className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <legend className="text-2xl font-semibold text-center mb-4">LOGIN</legend>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="name"
              required
              placeholder="Digite seu email"
              value={usuario.email}
              onChange={(e) => handleChange(e)}
              className="w-full p-3 border border-gray-300 rounded-md"
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
              onChange={(e) => handleChange(e) }
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button type="submit" id="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors">
              Login
            </button>
          </div>
          <p className="text-center" >Não possui registro. <a className="text-blue-500" href="/cadastro">Clique aqui...</a></p>
        </fieldset>
      </form>

    </div>
  );
}
