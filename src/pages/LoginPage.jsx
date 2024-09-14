import React, { useState } from "react"
import doctorImg from "../assets/doctors.jpg"
import logoPharmImg from "../assets/logo_pharm.jpg"
import logo from "../assets/logo.jpg"
import { FaEnvelope } from "react-icons/fa6"
import { IoMdEyeOff } from "react-icons/io"
import { IoEyeSharp } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../components/Logo"
import { toast } from "react-toastify"
import axios from "axios"
import { useGlobalContext } from "../context"


const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { setUserData, url, userData } = useGlobalContext()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = React.useState(false)

  const data = {
    email,
    password,
  }

  React.useEffect(() => {
    if (userData) {
      navigate("/home")
    }
  }, [navigate, userData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (password.length < 8) {
      toast.error("Password must be more than 8 characters")
      setIsLoading(false)
    }
    else{
      try {
        const response = await axios.post(`${url}/login`, data)
        localStorage.setItem("userData", JSON.stringify(response.data.userData))
        setUserData(response.data.userData)
        navigate("/home")
        toast.success("login successful")
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        toast.error(err.response.data.message || err.error)
      }
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
              <Link className='create-account' to={"/register"}>
                Create an Account
              </Link>
              <Link className='btn-forget' to={"/forgot-password"}>
                Forgot Password?
              </Link>
            </div>
            <button className='btn-submit' type='submit'>
              {isLoading ? 'Loading...' : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
