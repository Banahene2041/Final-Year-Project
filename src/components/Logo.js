import React from 'react'
import logoPharmImg from "../assets/logo_pharm.jpg"
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <div className='giv-logo'>
      <Link to={'/home'}>
        <img src={logoPharmImg} alt='' />
      </Link>
    </div>
  )
}

export default Logo