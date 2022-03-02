import React from 'react'
import CartWidget from './CartWidget'

export const NavBar = () => {
  return (
      <>    
      <header id="layout-header">
        <h1>Mi e-commerce</h1>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Shampoo</a>
        <a href="#">Acondicionadores</a>
        <a href=""><CartWidget/></a>
      </nav>
      </header>
      </>
  )
}

export default NavBar