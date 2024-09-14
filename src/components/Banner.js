import React from "react"
import { slide } from "../data"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

const Banner = () => {
  return (
    <div className='banner-container'>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          autoplay: true,
          pagination: true,
          arrows: true,
          drag: "free",
        }}
      >
        {slide.map((item, index) => {
          const { image } = item
          return (
            <SplideSlide key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}

export default Banner
