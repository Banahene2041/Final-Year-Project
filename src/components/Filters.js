import React from 'react'
import { FaBuromobelexperte } from "react-icons/fa6"
import { filters } from '../data'
import { Link } from 'react-router-dom'

const Filters = () => {
  return (
    <article className='filter-section'>
      <div className="filter-title">
        <p><span><FaBuromobelexperte/></span><span className='title-text'>Category</span></p>
      </div>
      <div className="filter">
        {
          filters.map((item,index)=> {
            return <ul key={index}>
              <li>
                <Link>{item.name}</Link>
              </li>
            </ul>
          })
        }
      </div>
    </article>
  )
}

export default Filters