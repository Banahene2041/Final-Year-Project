import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const NurseContact = () => {
  return (
    <article className='nurse-cartoon-section'>
        <div className='nurse-contact-text'>
            <h3>Your health is very important to us visit us anytime for your medication</h3>
            <h4>If you want any help contact us</h4>
            <p className='nurse-contact-btn'>
                <Link to={'/contact'} className='contact-btn'>Contact Us</Link>
            </p>
        </div>
        <div className='nurse-image-section'>
            <div className="nurse-image-container">
                <img src={assets.nurse_cartoon} alt="" />
            </div>
        </div>
    </article>
  )
}

export default NurseContact