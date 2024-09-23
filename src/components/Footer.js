import React from 'react'
import '../styles/Footer.css'
import { LuCopyright } from "react-icons/lu"
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <section className='footer-section'>
      <div className='footer-content'>
        <div className='footer-first-section'>
          <div className='footer-img-container'>
            <img src={assets.logo_pharm} alt='' />
          </div>
          <h2>Your Health Is Our Priority</h2>
        </div>
        <div className='footer-second-section'>
          <p>
            We bring you the experience of treating and having good health{" "}
            <br /> without <br /> Stress. we hope you would like our service
          </p>
          <h4>For any problem or question</h4>
          <h4>Contact Us</h4>
          <h4 className='footer-contact'>Call us on +233 542 34 2728</h4>
          <h4 className='footer-contact'>Whatsapp us on +233 542 34 2728</h4>
        </div>
      </div>
      <h3>
        Copyright <LuCopyright className='copyright' /> 2024 GIV PHARM. All
        Rights Reserved
      </h3>
    </section>
  )
}

export default Footer