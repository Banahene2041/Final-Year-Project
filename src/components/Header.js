import React from 'react'
import Logo from "./Logo"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "../context"
import { Navlinks } from "../data"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { IoMdArrowDropdown } from "react-icons/io"
import axios from "axios"
import { toast } from "react-toastify"
import avatarGreetingImg from "../assets/Avata_greeting.jpg"
import avatarProfileImg from '../assets/profile_avatar.png'
import { MdOutlineArrowDropDown } from "react-icons/md"

const Header = () => {
  const navigate = useNavigate()
  const {
    userData,
    isProfileOpen,
    closeProfile,
    isNavbarOpen,
    openNavbar,
    url,
    setUserData,
    setIsNavbarOpen,
  } = useGlobalContext()

  const logout = async () => {
    try {
      const response = await axios.post(`${url}/logout`)
      localStorage.removeItem("userData")
      setUserData(null)
      navigate("/home")
      setIsNavbarOpen(false)
      toast.success(response.data.message)
    } catch (err) {
      toast.error("something went wrong")
    }
  }

  return (
    <header>
      <div className='logo-section'>
        <Logo />
      </div>
      <div
        className={`${isNavbarOpen ? "nav-links open-nav-links" : "nav-links"}`}
      >
        {userData && (
          <div className='profile-avatar'>
            <div className='avarta-img-container'>
              <Link to={"/profile"} onClick={()=>setIsNavbarOpen(false)} >
                <img src={avatarProfileImg} alt='profile avatar' />
              </Link>
            </div>
            <p className='user-name'>
              {userData.surname} {userData.firstname}
            </p>
            <div className='email-profile'>
              <p>{userData.email}</p>
              <MdOutlineArrowDropDown className='email-accout-icon' />
            </div>
          </div>
        )}
        <div className='links-container'>
          {Navlinks.map((item, index) => {
            const { id, icon, path, name } = item
            return (
              <ul key={id}>
                <li>
                  <NavLink
                    to={`${path}`}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "inactive-link"
                    }
                    onClick={()=> {
                      setIsNavbarOpen(false)
                    }}
                  >
                    <span>{icon}</span>
                    {userData&& index === 4?<button className='logout-btn' onClick={logout}>logout</button>:`${name}`}
                  </NavLink>
                </li>
              </ul>
            )
          })}
        </div>
      </div>
      <div className='burger-section'>
        <div className='welcome-user'>
          {userData && (
            <div className='profile-drop-down' onClick={closeProfile}>
              <span>
                <img
                  src={avatarGreetingImg}
                  alt='avatar'
                  className='greeting-avatar'
                />
                Hello👋, {userData.surname} {userData.firstname}{" "}
                <IoMdArrowDropdown className='drop-down-icon' />
              </span>
              <div
                className={`${
                  isProfileOpen
                    ? "profile-container show-profile"
                    : "profile-container"
                }`}
              >
                <Link to='/profile' onClick={()=> setIsNavbarOpen(false)}>Profile</Link>
                <Link onClick={logout}>Logout</Link>
              </div>
            </div>
          )}
        </div>
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