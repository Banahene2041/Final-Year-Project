import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import logoPharmImg from "../assets/logo_pharm.jpg"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify'

const SignInPage = () => {
  const [surname,setSurname] = useState("")
  const [firstname,setFirstName] = useState("")
  const [birthDate,setBirthDate] = useState("")
  const [gender,setGender] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault()
    if (!surname || !firstname || !birthDate || !gender || !email || !password || !confirmPassword){
      return toast("Provide Valid Credential")
    }
    if (password !== confirmPassword){
      return toast.error("Password does not much")
    }
  }

  return (
    <section className='signup-section'>
      <div className='hidden-container'>
        <div className='signup-logo-section'>
          <div className='signup-logo'>
            <img src={logoPharmImg} alt='' />
          </div>
          <h3>
            welcome to giv
            <img src={logo} alt='' />
            pharm
          </h3>
          <p>Let's help you get your prescription drugs with ease</p>
        </div>
      </div>
      <div className='signledoctor-img-container'>
        <div className='logo logo-pharm'>
          <img src={logoPharmImg} alt='logo' />
        </div>
        <div className='signup'>
          <div className='signup-title'>
            <h3>Create an Account</h3>
            <p>
              Already have an account?{" "}
              <Link className='login-here' to={"/login"}>
                LOGIN HERE
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='name'>
              <label htmlFor='name'>Enter your Name</label>
              <div>
                <input
                  type='text'
                  id='name'
                  required
                  name='surname'
                  value={surname}
                  onChange={(e)=>setSurname(e.target.value)}
                  placeholder='Surname'
                />
                <input
                  type='text'
                  id='name'
                  required
                  name='firstname'
                  value={firstname}
                  onChange={(e)=>setFirstName(e.target.value)}
                  placeholder='FirstName'
                />
              </div>
            </div>
            <div className='birth-date'>
              <label htmlFor='birth-date'>Enter your Date of Birth</label>
              <input
                type='date'
                min='1960-01-01'
                max='2024-12-31'
                required
                name='date'
                value={birthDate}
                onChange={(e)=>setBirthDate(e.target.value)}
                placeholder='Date'
                id=' birth-date'
              />
            </div>
            <div className='gender'>
              <label htmlFor='gender'>Your Gender</label>
              <select name='gender' value={gender} onChange={(e)=>setGender(e.target.value)} required id='gender'>
                <option value='' disabled selected>
                  Gender
                </option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <div className='email-address'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                placeholder='Enter your Email'
                id='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              {/* <FaEnvelope className='envelope' /> */}
            </div>
            <div className='password'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Enter your password'
                id='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
              {/* <IoLockClosed className='lock' /> */}
            </div>
            <div className='confirm-password'>
              <label htmlFor='confirm-password'>Confrim your Password</label>
              <input
                type='password'
                required
                id='confirm-password'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                placeholder='Confirm Password'
              />
              {/* <IoMdEyeOff className='eye-close' /> */}
            </div>
            <div className='checkbox'>
              <input type='checkbox' id='checkbox' required />
              <p>By Signing Up you agree to the Terms and Conditions</p>
            </div>
            <div className='sigup-btn-container'>
              <button type='submit' className='btn-submit btn-signup'>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='signup-container'>
        <div className='welcome-container'>
          <h3 className='welcome'>
            welcome to giv
            <img src={logo} alt='' />
            pharm
          </h3>
          <p>Let's help you get your prescription drugs with ease</p>
          <h4>Your Health is our Priority</h4>
        </div>
      </div>
    </section>
  )
}

export default SignInPage