import React from 'react'
import nurseImg from "../assets/nurse.jpg"
import Header from "../components/Header"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <section className='landing-section'>
      <Header />
      <div className='main-landing-section'>
        <div className='nurse-section'>
          <div className='nurse-img-container'>
            <img src={nurseImg} alt='' />
          </div>
        </div>
        <div className='get-started-section'>
          <div className='get-started-title'>
            <h3>Your Health is our Priority</h3>
            <p>Get your Medications here, easy and convenient</p>
            <p className='try'>Try our Service</p>
          </div>
          <div className='get-started-btn-container'>
            <Link to={"/signup"} className='btn-get-started'>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage