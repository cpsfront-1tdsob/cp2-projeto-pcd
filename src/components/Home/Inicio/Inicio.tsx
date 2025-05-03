"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const People = () => {
    


  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        {/* {overLay} */}
        <div className="absolute top-0 w-full h-full bg-gray-800 opacity-70"></div>
        {/* Imagem de fundo */}
      <Image
        src="/images/people-background.jpg" 
        alt="People background"
        fill
        className="object-cover z-0"
        priority 
      />
      {/* {texto} */}
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex itens-center justify-center flex-col w-full h-full">
            <div>
                <h1 className="text-[25px] mb-1 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.2rem] text-white font-bold uppercase">
                    Portal PCD – Acessibilidade e Informação</h1>
                <p className="md:text-base md:text-[20px] text-center text-lg text-white font-normal [word-spacing:5px]">
                    Portal de informações úteis para o público PCD</p>
            </div>
            <div className="flex justify-center items-center mt-6">
            <Link href="/listagem" className="rounded px-14 md:px-28 mt-4 py-2.5 overflow-hidden group bg-rose-600 relative 
            hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2hover:ring-red-400 transition-all ease-out durantion-300">
                <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-12 group-hover:-translate-x-40 ease-linear'></span>
                <span className='relative font-bold'>Saiba mais</span>
            </Link>
            {/* <Link href="/listagem">
                <Botao tituloBotao="Saiba mais" corFundo="#2563eb" />
            </Link> */}
            
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default People