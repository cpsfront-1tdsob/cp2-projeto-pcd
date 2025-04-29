import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { GrAccessibility } from 'react-icons/gr'
import { HiBars3BottomRight } from 'react-icons/hi2'


const Nav = () => {
  return (
    <div className='bg-blue-950 transition-all duration-200 h-[12vh] z-[1000] fixed w-full'>
        <div className="flex items-center h-full justify-between w-[90%] x1:w-[80%] mx-auto">
            {/* {LOGO} */}
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
                    <GrAccessibility className='w-6 h-6 text-white'/>
                </div>
                <h1 className="text-x1 md:text 2x1 text-white uppercase font-bold">
                    Portal PCD      
                </h1>
            </div>
            {/* {Navlinks} */}
            <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
                return (
                    <Link href={link.url} key={link.id}>
                        <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] 
                        after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 
                        after:hover:scale-x-100 after transition duration-300 after:origin-right">{link.label}</p>
                    </Link>
                )
            })}
            </div>
            {/* {Buttons} */}
            <div className="flex items-center space-x-4">
                <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transiction-all duration-200 rounded-lg'>Entrar</button>
                {/* { burger menu } */}
                <HiBars3BottomRight className='w-8 h-8 text-white cursor-pointer lg:hidden' />
            </div>
        </div>
    </div>
  )
}

export default Nav