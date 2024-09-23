import React from 'react'
import {Routes,Route} from "react-router-dom"
import SignInPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ForgetPassword from './pages/ForgetPassword'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import ResetPassword from './pages/ResetPassword'
import ContactPage from "./pages/ContactPage"
import About from "./pages/About"
import Category from './pages/Category'
import SingleDrug from "./pages/SingleDrug"

const App = () => {
  return (
    <div className='app-side'>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<SignInPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/category' element={<Category />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
        <Route path='/singledrug/:id' element={<SingleDrug />} />
      </Routes>
    </div>
  )
}

export default App