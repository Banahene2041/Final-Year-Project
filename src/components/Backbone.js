import React from 'react'
import Developer from './Developer'
import '../styles/Backbone.css'
import { assets } from '../assets/assets'

const Backbone = () => {
  return (
    <section className='backbone-section'>
      <p className='title'>Backbone of this platform</p>
      <Developer
        image={assets.developerOne}
        name='Adu-Larbi Victor Offei'
        role='Project Manager, UI/UX Designer'
        character='Resourceful, Hardworking and Humble'
      />
      <div className='web-developer'>
        <div className='developer-img-container'>
          <img src={assets.developerOne} alt='' />
        </div>
        <div className='dev-info'>
          <h2>Banahene Owusu Gideon</h2>
          <h4>Frontend Developer and Backend Developer</h4>
          <p>Hardworking and Patience</p>
        </div>
      </div>
      <Developer
        image={assets.developerOne}
        name='Mensah Epaha Ishmael'
        role='Assistant Project Manager, User requirement Analyst'
        character='Hardworking, Calm and Humble'
      />
    </section>
  )
}

export default Backbone