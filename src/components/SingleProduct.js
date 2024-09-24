import React from "react"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"
import { useGlobalContext } from "../context"
import { FaCediSign } from "react-icons/fa6"

const SingleProduct = ({
  image,
  available,
  activeIngredients,
  category,
  caution,
  description,
  location,
  name,
  price,
  quantity,
  storageInstructions,
  usage,
}) => {
  const { imageUrl } = useGlobalContext()
  return (
    <article className='main-single-drug'>
      <h3>Drugs</h3>
      <p>
        <Link to='/home'>Home</Link>
        <span>
          <FaChevronRight />
        </span>
        <Link>{category}</Link>
      </p>
      <div className='single-drug-image'>
        <div className='single-img-container'>
          <img src={`${imageUrl}/${image}`} alt={name} />
        </div>
      </div>
      <p className='single-drug-price'>
        <FaCediSign className='single-cedi-sign' />
        {price}
      </p>
      <div className='single-drug-detail'>
        <p className='single-drug-name'>Drug Name:</p>
        <p className='single-drug-info'>{name}</p>
      </div>
      <div className='single-drug-detail'>
        <p className='single-drug-name'>{name}:</p>
        <p className='single-drug-info'>{description}</p>
      </div>
      <div className='single-drug-detail'>
        <p className='single-drug-name'>Package size:</p>
        <p className='single-drug-info'>{quantity}</p>
      </div>
      <div className='single-drug-detail'>
        <p className='single-drug-name'>Ingredient:</p>
        <p className='single-drug-info'>{activeIngredients}</p>
      </div>
      <div className='single-drug-detail'>
        <p className='single-drug-name'>Storage:</p>
        <p className='single-drug-info'>{storageInstructions}</p>
      </div>
      <div className='single-drug-detail'>
        <p className='single-drug-name'>Usage:</p>
        <p className='single-drug-info'>{usage}</p>
      </div>
      <div className='single-drug-detail'>
        <p className='single-drug-name'>Caution:</p>
        <p className='single-drug-info'>{caution}</p>
      </div>
      <div className='single-drug-detail'>
        <p className='single-drug-name'>Location:</p>
        <p className='single-drug-info'>{location}</p>
      </div>
      <div className='single-drug-available'>
        <p className='single-drug-name'>Available:</p>
        <p className='single-drug-info'>{available}</p>
      </div>
    </article>
  )
}

export default SingleProduct
