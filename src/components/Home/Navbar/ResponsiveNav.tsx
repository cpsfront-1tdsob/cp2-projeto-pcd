'use client'
import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const ResponsiveNav = () => {
  // para usar hooks é necessario converter os componentes para client components
  // o que é feito com o 'use client' no topo do arquivo
  const [showNav, setshowNav] = React.useState(false);
  const handNavShow = () => setshowNav(true);
  const handleCloseNav = () => setshowNav(false);
  return (
    <div>
        <Nav openNav={handNavShow}/>
        <MobileNav showNav={showNav} closeNav={handleCloseNav}/>
    </div>
  )
}

export default ResponsiveNav
