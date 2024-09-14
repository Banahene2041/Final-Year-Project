import React from "react"
import "../styles/ResetPassword.css"
import { Link, useParams, useNavigate } from "react-router-dom"
import { IoMdEyeOff } from "react-icons/io"
import { IoEyeSharp } from "react-icons/io5"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { useGlobalContext } from "../context"

const ResetPassword = () => {
  const navigate = useNavigate()
  const { id, token } = useParams()
  const { url } = useGlobalContext()
  const [showPassword, setShowPassword] = React.useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const data = {
    password,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (password.length < 8) {
      setIsLoading(false)
      return toast.error("Password must be more than 8 characters")
    }
    if (password !== confirmPassword) {
      setIsLoading(false)
      return toast.error("Passwords do not much")
    }
    try {
      const response = await axios.post(
        `${url}/reset-password/${id}/${token}`,
        data
      )
      setIsLoading(false)
      toast.success("password updated successfully")
      navigate("/login")
    } catch (err) {
      setIsLoading(false)
      console.log(err)
      toast.error(err.response.data.message || err.error)
    }
  }

  return (
    <section className='reset-password-section'>
      <h3>Set New Password</h3>
      <form onSubmit={handleSubmit}>
        <div className='reset-password-container'>
          <label htmlFor='password'>New Password</label>
          <div className='reset-password'>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter new password'
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
        <div className='reset-confirm-password-container'>
          <label htmlFor='confirmPassword'>Confirm your password</label>
          <div className='reset-confirm-password'>
            <input
              type='password'
              id='confirm-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
              required
            />
            <IoMdEyeOff className='reset-btn-icon' />
          </div>
        </div>
        <div className='btn-container'>
          <button type='submit'>{isLoading ? "Loading..." : "Reset"}</button>
          <h4>
            Go back to, <Link to='/login'>Login</Link>
          </h4>
        </div>
      </form>
    </section>
  )
}

export default ResetPassword
