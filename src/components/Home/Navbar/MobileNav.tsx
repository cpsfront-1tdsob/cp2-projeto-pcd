"use client"

import { navLinks } from "@/constant/constant"
import Link from "next/link"
import { CgClose } from "react-icons/cg"
import { useEffect, useState } from "react"

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  return (
    <div>
      {/* { Overlay } */}
      <div
        className={`fixed ${navOpen} insert-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* { NavLinks } */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}
      >
        {navLinks
          .filter((link) => link.label !== "Listagem" || isLoggedIn)
          .map((link) => {
            return (
              <Link href={link.url} key={link.id} onClick={closeNav}>
                <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                  {link.label}
                </p>
              </Link>
            )
          })}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 h-6" />
      </div>
    </div>
  )
}

export default MobileNav
