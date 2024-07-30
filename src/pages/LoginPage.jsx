import React, { useState } from 'react'
import doctorImg from "../assets/doctors.jpg"
import logoPharmImg from "../assets/logo_pharm.jpg"
import logo from "../assets/logo.jpg"
import { FaEnvelope } from "react-icons/fa6"
import { IoMdEyeOff } from "react-icons/io"
import { IoEyeSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import Logo from '../components/Logo'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [showPassword,setShowPassword] = React.useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (password.length < 8){
      return toast.error("Password must be more than 8 characters")
    }
  }

  return (
    <section className='login-section'>
      <div className='login-section-logo'>
        <Logo />
      </div>
      <div className='doctor-img-container'>
        <img src={doctorImg} alt='doctors' />
      </div>
      <div className='login-container'>
        <div className='logo'>
          <img src={logoPharmImg} alt='logo' />
        </div>
        <div className='main-form'>
          <div className='title'>
            <p>
              Login to GIV <img src={logo} alt='' /> PHARM
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <div className='email-input-container'>
                <input
                  type='text'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your Email'
                  required
                />
                <FaEnvelope className='mail' />
              </div>
            </div>
            <div className='password'>
              <label htmlFor='password'>Password</label>
              <div className='password-input-container'>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  name='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your Password'
                  required
                />
                <p
                  className='eye-btn'
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeSharp /> : <IoMdEyeOff />}
                </p>
              </div>
            </div>
            <div className='text'>
              <Link className='create-account' to={"/signup"}>
                Create an Account
              </Link>
              <Link className='btn-forget' to={"/forgot-password"}>
                Forgot Password?
              </Link>
            </div>
            <button className='btn-submit' type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage