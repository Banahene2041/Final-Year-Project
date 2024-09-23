import React from 'react'
import Header from "../components/Header"
import Title from "../components/Title"
import "../styles/About.css"
import { assets } from "../assets/assets"
import Backbone from '../components/Backbone'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Header />
      <section className='about-section'>
        <h2 className='about-name'>About Us</h2>
        <Title text={"About GIV Pharm"} />
        <div className='cartoon-img'>
          <img src={assets.cartoon} alt='' />
        </div>
        <div className='about-other-section'>
          <div className='about-question'>
            <h2>What is GIV Pharm?</h2>
            <div className='about-answer'>
              <p>
                GIV Pharm is an online platfomr designed to facilate the viewing
                of various drugs and their detailed descriptions. This website
                not only aids users in obtaining their medications with minimal
                stress but also provides information on local pharmacies that
                stock the required drugs, ensuring a convenient and effiecient
                experince for individuals seeking pharmaceutical assistance
              </p>
            </div>
          </div>
          <div className="our-mission">
              <h2>Our Mission</h2>
              <div className="our-mission-text">
                <p>GIV Pharm is dedicated to enhancing the accessibility and understanding of medications. Our mission is to empower individuals by providing a comprehensive omline platform where they can easily view drug description and locate nearby pharmacies that stock their required medications,ultimately reducing stress in the medication procurement process.</p>
              </div>
          </div>
          <div className="our-vision">
            <h2>Our Vision</h2>
            <div className="our-vision-text">
              <p>Our vision is to be the leading online resource for pharmaceutical information, recognized for transforming how individuals access and understand their medications, thereby improving health outcomes and fostering a more informed community</p>
            </div>
          </div>
          <div className="core-values">
            <h2>Core Values</h2>
            <ol>
              <li>Integrity</li>
              <li>Accessiblity</li>
              <li>Community Engagement</li>
              <li>Innovation</li>
            </ol>
          </div>
        </div>
        <Backbone/>
        <Footer/>
      </section>
    </>
  )
}

export default About