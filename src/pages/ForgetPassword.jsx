import React, { useState } from "react"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import { useGlobalContext } from "../context"

const ForgetPassword = () => {
  const { url } = useGlobalContext()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const data = {
    email,
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.post(`${url}/forgot-password`, data)
      setIsLoading(false)
      toast.success("We have emailed your password reset link")
      setEmail("")
    } catch (err) {
      toast.error(err.response.data.message || err.error)
      setIsLoading(false)
    }
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
              {isLoading ? "Loading..." : "Reset Password"}
            </button>
          </div>
          <h5>
            Don't have an Account? <Link to={"/register"}>Sign Up</Link>
          </h5>
        </form>
      </div>
    </section>
  )
}

export default ForgetPassword
