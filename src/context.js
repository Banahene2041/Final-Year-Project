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
  const url = "http://localhost:5000/api/users"
  const drugUrl = "http://localhost:5000/api/drug"
  const imageUrl = "http://localhost:5000/images"
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
        imageUrl,
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
