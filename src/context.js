import React, { useContext, useState } from "react"

const appContext = React.createContext()
const Context = ({ children }) => {
  // open and close modal
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const openNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }
  // profile
  const [isProfileOpen,setIsProfileOpen] = useState(false)

  // closeProfile
  const closeProfile = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  // url to the backend server
  const url =
    "https://final-year-project-defense-backend.onrender.com/api/users"
  const drugUrl =
    "https://final-year-project-defense-backend.onrender.com/api/drug"

  // userData
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem("userData")
    return storedData ? JSON.parse(storedData) : null
  })

  return (
    <appContext.Provider
      value={{
        isNavbarOpen,
        openNavbar,
        setIsNavbarOpen,
        userData,
        setUserData,
        isProfileOpen,
        closeProfile,
        url,
        drugUrl,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(appContext)
}

export { Context, useGlobalContext }
