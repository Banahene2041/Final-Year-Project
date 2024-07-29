import React, { useContext, useState } from "react"

const appContext = React.createContext()
const Context = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const openNavbar = ()=> {
    setIsNavbarOpen(!isNavbarOpen)
  }
  return (
    <appContext.Provider
      value={{
        isNavbarOpen,
        openNavbar,
        setIsNavbarOpen,
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
