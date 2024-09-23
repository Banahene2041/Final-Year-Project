import React, { useEffect, useState } from "react"
import { useGlobalContext } from "../context"
import { IoSearch } from "react-icons/io5"
import axios from "axios"
import LoaderTwo from "../components/LoaderTwo"
import { FaCediSign } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Search = () => {
  const { drugUrl } = useGlobalContext()
  const [keyword, setKeyword] = useState("")
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("item searched")
  }

  const fetchSeachItem = async () => {
    setLoading(true)
    try {
      const data = await axios(`${drugUrl}/recent-searches`)
      setProduct(data.data.drugs)
      setLoading(false)
    } catch (error) {
      console.log(error.response?.data?.message || error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSeachItem()
  }, [keyword])

  return (
    <article className='search-section'>
      <form onSubmit={handleSubmit}>
        <div className='search-input'>
          <input
            type='text'
            name='keyword'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            id='keyword'
            placeholder='Search'
          />
          <button type='submit' className='search-container'>
            <IoSearch className='search-icon' />
          </button>
        </div>
      </form>
      <p className='search-title'>Recent Search</p>
      {loading ? (
        <LoaderTwo />
      ) : (
        <div className='search-product-section'>
          {product.map((item) => {
            return (
              <div key={item._id} className='drug-container'>
                <div className='image-container'>
                  <Link to={`/singledrug/${item._id}`}>
                    <img
                      src={`http://localhost:5000/images/${item.image}`}
                      alt={item.name}
                    />
                  </Link>
                </div>
                <div className='drug-content'>
                  <p>{item.category}</p>
                  <p className='drug-name'>{item.name}</p>
                  <p className='drug-price'>
                    <span>
                      <FaCediSign className='currency-sign' />
                    </span>
                    <span className='price'>{item.price}0</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </article>
  )
}

export default Search
