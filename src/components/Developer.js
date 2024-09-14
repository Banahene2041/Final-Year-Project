import React from 'react'

const Developer = ({image,role,name,character}) => {
  return (
    <div className='dev-section'>
        <div className="developer-img-container">
            <img src={image} alt="" />
        </div>
        <div className="dev-info">
            <h2>{name}</h2>
            <h4>{role}</h4>
            <p>{character}</p>
        </div>
    </div>
  )
}

export default Developer