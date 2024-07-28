import React from 'react'
import {Routes,Route} from "react-router-dom"
import SignInPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ForgetPassword from './pages/ForgetPassword'
// pages


const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignInPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
      </Routes>
    </>
  )
}

export default App