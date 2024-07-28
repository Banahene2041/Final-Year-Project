import React from 'react'
import Logo from "./Logo"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "../context"
import { Navlinks } from "../data"
import { Link } from "react-router-dom"

const Header = () => {
  const { isNavbarOpen, openNavbar } = useGlobalContext()
  return (
    <header>
      <div className='logo-section'>
        <Logo />
      </div>
      <div
        className={`${
          isNavbarOpen ? "nav-links open-nav-links" : "nav-links"
        }`}
      >
        {Navlinks.map((item) => {
          const { id, icon, path, name } = item
          return (
            <ul key={id}>
              <li>
                <Link to={`${path}`}>
                  <span>{icon}</span>
                  {name}
                </Link>
              </li>
            </ul>
          )
        })}
      </div>
      <div className='burger-section'>
        <button className='burger-btn' onClick={openNavbar}>
          {isNavbarOpen ? (
            <FaTimes className='burger' />
          ) : (
            <GiHamburgerMenu className='burger' />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header