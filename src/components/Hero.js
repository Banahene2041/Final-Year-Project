import React from 'react'
import Filters from './Filters'
import Search from './Search'

const Hero = () => {
  return (
    <section className='hero-section'>
            <Filters/>
            <Search/>
    </section>
  )
}

export default Hero