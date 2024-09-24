import React, { useEffect, useState } from "react"
import axios from "axios"
import { useGlobalContext } from "../context"
import { FaCediSign } from "react-icons/fa6"
import "../styles/Category.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoaderOne from "../components/LoaderOne"
import { Link, useParams } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"

const DrugsByCategory = () => {
  const { category } = useParams()
  const { drugUrl, imageUrl } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const [drugs, setDrugs] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState("priceAsc")

  const fetchDrugsByCategory = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`${drugUrl}/filter/category`, {
        params: {
          category,
          minPrice,
          maxPrice,
          sort,
        },
      })
      setDrugs(data.drugs)
    } catch (error) {
      console.log(error.response?.data?.message || error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDrugsByCategory()
  }, [category, minPrice, maxPrice, sort])

  const handlePriceChange = (e) => {
    const { name, value } = e.target
    if (name === "minPrice") {
      setMinPrice(value)
    } else {
      setMaxPrice(value)
    }
  }

  const handleSortChange = (e) => {
    setSort(e.target.value)
  }

  if (loading) {
    return (
      <>
        <LoaderOne />
      </>
    )
  }

  if (drugs.length === 0) {
    return <div>No drugs found for this category</div>
  }

  return (
    <>
      <Header />
      <section className='drugs-category-section'>
        <h2 className='category-navigation'>
          <Link to={"/home"}>Home</Link>
          <FaChevronRight className='icon-category-nav' />
          {category}
        </h2>

        <div className='filters-bar'>
          <div className='price-filter'>
            <label>
              Min Price: <span>{minPrice}</span>
              <input
                type='range'
                name='minPrice'
                min='0'
                max='1000'
                value={minPrice}
                onChange={handlePriceChange}
              />
            </label>
            <label>
              Max Price: <span>{maxPrice}</span>
              <input
                type='range'
                name='maxPrice'
                min='0'
                max='1000'
                value={maxPrice}
                onChange={handlePriceChange}
              />
            </label>
          </div>

          <div className='sort-filter'>
            <label>
              Sort By:
              <select value={sort} onChange={handleSortChange}>
                <option value='priceAsc'>Price: Low to High</option>
                <option value='priceDesc'>Price: High to Low</option>
                <option value='nameAsc'>Name: A-Z</option>
                <option value='nameDesc'>Name: Z-A</option>
              </select>
            </label>
          </div>
        </div>

        <div className='drugs-grid'>
          {drugs.map((drug) => (
            <div key={drug._id} className='drug-card'>
              <Link to={`/singledrug/${drug._id}`}>
                <img
                  src={`${imageUrl}/${drug.image}`}
                  alt={drug.name}
                  className='drug-image'
                />
              </Link>
              <div className='drug-details'>
                <p className='drug-category'>{drug.category}</p>
                <p className='drug-name'>{drug.name}</p>
                <p className='drug-price'>
                  <FaCediSign className='currency-icon' />
                  {drug.newPrice ? (
                    <>
                      <span className='price'>{drug.newPrice}0</span>
                      <span className='old-price'>{drug.price}0</span>
                    </>
                  ) : (
                    <span className='price'>{drug.price}0</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default DrugsByCategory
