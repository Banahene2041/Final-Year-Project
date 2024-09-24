import React, { useEffect, useState } from "react"
import { useGlobalContext } from "../context"
import { useParams } from "react-router-dom"
import axios from "axios"
import LoaderOne from "../components/LoaderOne"
import Header from "../components/Header"
import SingleProduct from "../components/SingleProduct"
import "../styles/SingleDrug.css"
import RelatedDrug from "../components/RelatedDrug"

const SingleDrug = () => {
  const { id } = useParams()
  const { drugUrl } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const [drug, setDrug] = useState([])

  const fetchSingleDrug = async () => {
    setLoading(true)
    try {
      const { data } = await axios(`${drugUrl}/${id}`)
      setDrug(data)
    } catch (error) {
      console.log(error.response?.data?.message || error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSingleDrug()
  }, [id])

  if (loading) {
    return <LoaderOne />
  }

  return (
    <>
      <Header />
      <section className='single-drug-section'>
        <SingleProduct {...drug} />
        <RelatedDrug {...drug}/>
      </section>
    </>
  )
}

export default SingleDrug
