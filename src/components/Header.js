import React from 'react'
import Logo from "./Logo"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
  return (
    <header>
        <div className="logo-section">
          <Logo />
        </div>
        <div className="burger-section">
          <GiHamburgerMenu className='burger' />
        </div>
    </header>
  )
}

export default Header