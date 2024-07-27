import React from 'react'
import {Routes,Route} from "react-router-dom"
import SignInPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'

// pages


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signup' element={<SignInPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </>
  )
}

export default App