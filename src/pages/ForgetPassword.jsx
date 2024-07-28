import React, { useState } from "react"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"
// import { toast } from "react-toastify"

const ForgetPassword = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='forgot-password-section'>
      <div className='login-section-logo'>
        <Logo />
      </div>
      <div className='forgot-password'>
        <h3>Forgot Password</h3>
        <p>
          Please provide the email used to create an account with us, a password
          reset instruction will be sent to the email provided
        </p>
        <form onSubmit={handleSubmit}>
          <div className='forgot-password-input'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your Email'
              required
            />
          </div>
          <div className='forgot-password-container'>
            <button type='submit' className='forgot-btn'>
              Reset Password
            </button>
          </div>
          <h5>
            Don't have an Account? <Link to={"/signup"}>Sign Up</Link>
          </h5>
        </form>
      </div>
    </section>
  )
}

export default ForgetPassword
