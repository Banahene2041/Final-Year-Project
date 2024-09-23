import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import axios from 'axios'
import LoaderOne from '../components/LoaderTwo'
import { FaCediSign } from "react-icons/fa6"
import { Link } from 'react-router-dom'

const RecentDrugs = () => {
    const { drugUrl } = useGlobalContext()
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([])

    const fetchRecentDrugs = async () => {
      setLoading(true)
      try {
        const data = await axios(`${drugUrl}/recently-added`)
        setProduct(data.data.drugs)
        setLoading(false)
      } catch (error) {
        console.log(error.response?.data?.message || error.message)
      } finally {
        setLoading(false)
      }
    }

    useEffect(() => {
      fetchRecentDrugs()
    },[])

    if (loading){
        return (
            <LoaderOne/>
        )
    }

    // if(product.length < 1){
    //     return <div>
    //         <h5>Hmmm... Something went wrong</h5>
    //     </div>
    // }

  return (
    <article>
      <div className='recent-drugs-section'>
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
                <div className='drug-price recent-drug-p'>
                  <div>
                    <span>
                      <FaCediSign className='currency-sign' />
                    </span>
                    <span className='price'>{item.newPrice}0</span>
                  </div>
                  <div>
                    <span>
                      <FaCediSign className='old-currency-sign' />
                    </span>
                    <span className='old-price'>{item.price}0</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default RecentDrugs