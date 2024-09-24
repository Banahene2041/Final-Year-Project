import React, { useEffect, useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { useGlobalContext } from "../context"
import axios from "axios"
import { FaCediSign } from "react-icons/fa6"
import { Link } from "react-router-dom"

const RelatedDrug = ({ category }) => {
  const { drugUrl, imageUrl } = useGlobalContext()
  const [relatedDrug, setRelatedDrug] = useState([])

  const getRelatedDrug = async () => {
    try {
      const { data } = await axios.get(
        `${drugUrl}/filter/category?category=${category}`
      )
      setRelatedDrug(data.drugs)
    } catch (error) {
      console.log(error.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    getRelatedDrug()
  }, [])

  return (
    <div className='realted-drug'>
      <h2 className='title'>Related Drug</h2>
      <div className='splide-wrapper'>
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
            },
            pagination: true,
            arrows: true,
            gap: "1rem",
          }}
        >
          {relatedDrug.map((item) => {
            return (
              <SplideSlide key={item._id}>
                <div className='drug-card'>
                  <div className='drug-image'>
                    <Link to={`/singledrug/${item._id}`}>
                      <img src={`${imageUrl}/${item.image}`} alt={item.name} />
                    </Link>
                  </div>
                  <div className='drug-details'>
                    <p>{item.category}</p>
                    <p className='drug-name'>{item.name}</p>
                    <p className='drug-price'>
                      <FaCediSign className='price-icon' />
                      <span className='price'>{item.price}0</span>
                    </p>
                  </div>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </div>
  )
}

export default RelatedDrug
