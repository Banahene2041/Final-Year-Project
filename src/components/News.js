import React from 'react'
import { news } from '../data'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa"

const News = () => {
  return (
    <article className='news-info-section'>
      {news.map((item,index)=>{
        return (
          <div key={index} className='news-main'>
            <div className='new-img-container'>
              <img src={item.image} alt='' />
            </div>
            <div className='news-content'>
              <Link to={""} className='news-link'>
                {item.link}
              </Link>
              <h3>{item.text}</h3>
              <button className='read-more-btn'>
                <Link to={""} className='read-more'>
                  <span>Read More</span>
                </Link>
                <FaChevronRight className='read-more-arrow'/>
              </button>
            </div>
          </div>
        )
      })}
    </article>
  )
}

export default News 