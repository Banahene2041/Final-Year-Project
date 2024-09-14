import React from 'react'
import "../styles/ContactPage.css"
import avatarGirlImg from "../assets/Avatar_girl.jpg"
import Header from "../components/Header"

const ContactPage = () => {
  return (
    <section className='contact-section'>
      <Header />
      <main>
        <div className='contact-form-section'>
          <h3>Contact Customer Support</h3>
          <p>Please how may i assist you</p>
          <form>
            <div className='contact-name'>
              <label htmlFor='name'>Name</label>
              <input type='text' placeholder='Enter your Full Name' required />
            </div>
            <div className='contact-email'>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='Enter you Email' required />
            </div>
            <div className='contact-subject'>
              <label htmlFor='subject'>Subject</label>
              <textarea name='subject' id='subject'></textarea>
            </div>
            <div className='contact-problem'>
              <label htmlFor='problem'>Description/Problem</label>
              <textarea name='problem' id='problem'></textarea>
            </div>
            <div className='btn-container'>
              <button type='submit'>Submit</button>
            </div>
            <div className='call'>
              <h4>Or</h4>
              <h5>
                <span>☎</span> Call us on +233 542342728
              </h5>
              <h5>
                <span>✍</span> Whatsapp us on +233 542342728
              </h5>
              <h6>Thank you for contacting us and we hope your problems is solved</h6>
              <h3>Your Health is Our Priority</h3>
            </div>
          </form>
        </div>
        <div className='img-section'>
          <div className='img-container'>
            <img src={avatarGirlImg} alt='avatar girl' className='avatar-img' />
          </div>
        </div>
      </main>
    </section>
  )
}

export default ContactPage