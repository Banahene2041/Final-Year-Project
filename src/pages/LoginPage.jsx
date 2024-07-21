import React from 'react'
import doctorImg from "../assets/doctors.jpg"
import logoPharmImg from "../assets/logo_pharm.jpg"
import { FaEnvelope } from "react-icons/fa6"
import { IoMdEyeOff } from "react-icons/io"
import { IoEyeSharp } from "react-icons/io5"
import { Link } from "react-router-dom"

const LoginPage = () => {
  const [showPassword,setShowPassword] = React.useState(false)
  return (
    <section className='login-section'>
      <div className='doctor-img-container'>
        <img src={doctorImg} alt='doctors' />
      </div>
      <div className='login-container'>
        <div className='logo'>
          <img src={logoPharmImg} alt='logo' />
        </div>
        <div className='main-form'>
          <div className='title'>
            <p>Login</p>
          </div>
          <form>
            <div className='email'>
              <label htmlFor='email'>Enter your Email Address</label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Email'
                required
              />
            </div>
            <FaEnvelope className='mail' />
            <div className='password'>
              <label htmlFor='password'>Enter your Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                required
              />
            </div>
            <p
              className='eye-btn'
              type='button'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeSharp /> : <IoMdEyeOff />}
            </p>
            <div className='text'>
              <Link className='create-account' to={'/signup'}>create an Account</Link>
              <p>Forgot Password?</p>
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