import React from 'react'
import logo from "../assets/logo.jpg"
import logoPharmImg from "../assets/logo_pharm.jpg"
import {Link} from "react-router-dom"
import { FaEnvelope } from "react-icons/fa6"
import { IoMdEyeOff } from "react-icons/io"
import { IoLockClosed } from "react-icons/io5"

const SignInPage = () => {
  return (
    <section className='signup-section'>
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
          <form>
            <div className='name'>
              <label htmlFor='name'>Enter your Name</label>
              <div>
                <input
                  type='text'
                  id='name'
                  required
                  name='surname'
                  placeholder='Surname'
                />
                <input
                  type='text'
                  id='name'
                  required
                  name='firstname'
                  placeholder='First Name'
                />
              </div>
            </div>
            <div className='birth-date'>
              <label htmlFor='birth-date'>Enter your Date of Birth</label>
              {/* <select name="month" id="month">
                <option value="" disabled selected>Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="August">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select> */}
              <input
                type='date'
                min='1960-01-01'
                max='2024-12-31'
                required
                name='date'
                placeholder='Date'
                id=' birth-date'
              />
            </div>
            <div className='gender'>
              <label htmlFor='gender'>Your Gender</label>
              <select name='gender' required id='gender'>
                <option value='' disabled selected>
                  Gender
                </option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <div className='email-address'>
              <label htmlFor='email'>Enter your Email Address</label>
              <input type='text' placeholder='Email' id='email' required />
              <FaEnvelope className='envelope' />
            </div>
            <div className='password'>
              <label htmlFor='password'>Enter your Password</label>
              <input
                type='password'
                placeholder='Password'
                id='password'
                required
              />
              <IoLockClosed className='lock' />
            </div>
            <div className='confirm-password'>
              <label htmlFor='confirm-password'>Confrim your Password</label>
              <input
                type='password'
                required
                id='confirm-password'
                placeholder='Confirm Password'
              />
              <IoMdEyeOff className='eye-close' />
            </div>
            <div className='checkbox'>
              <input type='checkbox' required />
              <p>
                By Signing Up you agree you are above 18 and accept the Term and
                Condition
              </p>
            </div>
            <button type='submit' className='btn-submit'>
              Sign Up
            </button>
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
          <p>
            Get your medication here,easy and <br /> convenient anywhere you
            are. <br />
            Try our service
          </p>
          <h4>Your Health is our Priority</h4>
        </div>
      </div>
    </section>
  )
}

export default SignInPage