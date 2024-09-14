import React, { useEffect, useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { useGlobalContext } from "../context"
import axios from "axios"
import { FaCediSign } from "react-icons/fa6"

const TopPicksDrugs = () => {
  const { drugUrl } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState([])

  const fetchRecentDrugs = async () => {
    setLoading(true)
    try {
      const { data } = await axios(`${drugUrl}/popular`)
      setProduct(data.drugs)
    } catch (error) {
      console.log(error.response?.data?.message || error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecentDrugs()
  }, [])

  return (
    <article>
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
          {product.map((item) => {
            return (
              <SplideSlide key={item._id}>
                <div className='drug-card'>
                  <div className='drug-image'>
                    <img
                      src={`http://localhost:5000/images/${item.image}`}
                      alt={item.name}
                    />
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
    </article>
  )
}

export default TopPicksDrugs
