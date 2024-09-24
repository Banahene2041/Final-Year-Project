import React, { useEffect, useState } from "react"
import { useGlobalContext } from "../context"
import { IoSearch } from "react-icons/io5"
import axios from "axios"
import LoaderTwo from "../components/LoaderTwo"
import { FaCediSign } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Search = () => {
  const { drugUrl, imageUrl } = useGlobalContext()
  const [keyword, setKeyword] = useState("")
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState([])
  const [searchProduct, setSearchProduct] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword) {
      fetchSearchedDrugs()
    }
  }

  const fetchRecentSearches = async () => {
    setLoading(true)
    try {
      const { data } = await axios(`${drugUrl}/recent-searches`)
      setProduct(data.drugs)
      setSearchProduct([])
    } catch (error) {
      console.log(error.response?.data?.message || error.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchSearchedDrugs = async () => {
    setLoading(true)
    try {
      const { data } = await axios(`${drugUrl}/search?keyword=${keyword}`)
      setSearchProduct(data.drugs)
      setProduct([])
    } catch (error) {
      console.log(error.response?.data?.message || error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecentSearches()
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    setKeyword(value)

    if (value === "") {
      fetchRecentSearches()
    }
  }

  return (
    <article className='search-section'>
      <form onSubmit={handleSubmit}>
        <div className='search-input'>
          <input
            type='text'
            name='keyword'
            value={keyword}
            onChange={handleInputChange}
            id='keyword'
            placeholder='Search'
          />
          <button type='submit' className='search-container'>
            <IoSearch className='search-icon' />
          </button>
        </div>
      </form>
      <p className='search-title'>
        {keyword ? "Your Search" : "Recent Searches"}
      </p>
      {loading ? (
        <LoaderTwo />
      ) : (
        <div className='search-product-section'>
          {keyword && searchProduct.length === 0 ? (
            <p>No items match your search input</p>
          ) : (
            (keyword ? searchProduct : product).map((item) => (
              <div key={item._id} className='drug-container'>
                <div className='image-container'>
                  <Link to={`/singledrug/${item._id}`}>
                    <img src={`${imageUrl}/${item.image}`} alt={item.name} />
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
            ))
          )}
        </div>
      )}
    </article>
  )
}

export default Search
