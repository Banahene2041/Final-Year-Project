import React from "react"
import '../styles/LoaderOne.css'

const SkeletonLoader = () => {
  return (
    <div className='skeleton-wrapper'>
      <div className='skeleton header'>
        <div className='skeleton logo'></div>
        <div className='skeleton navlinks'>
          <div className='skeleton navlink'></div>
          <div className='skeleton navlink'></div>
          <div className='skeleton navlink'></div>
        </div>
      </div>
      <div className='skeleton hero'></div>
      <div className='skeleton content'></div>
      <div className='skeleton content'></div>
      <div className='skeleton content'></div>
    </div>
  )
}

export default SkeletonLoader
