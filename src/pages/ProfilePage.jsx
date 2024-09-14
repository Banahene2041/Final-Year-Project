import React, { useEffect, useState } from "react"
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import "../styles/ProfilePage.css"
import profileAvatar from "../assets/profile_avatar.png"
import { IoCameraReverseOutline } from "react-icons/io5"
import axios from "axios"
import { toast } from "react-toastify"

axios.defaults.withCredentials = true

const ProfilePage = () => {
  const navigate = useNavigate()
  const { userData, url } = useGlobalContext()
  const [image, setImage] = useState(null)
  const [surname, setSurname] = useState("")
  const [firstname, setFirstName] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [location, setLocation] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!userData) {
      navigate("/login")
    } else {
      fetchUserData()
    }
  }, [userData, navigate])

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${url}/profile`, { withCredentials: true })
      const user = res.data
      setSurname(user.surname || "")
      setFirstName(user.firstname || "")
      setBirthDate(
        user.birthDate
          ? new Date(user.birthDate).toISOString().split("T")[0]
          : ""
      )
      setGender(user.gender || "")
      setEmail(user.email || "")
      setContact(user.contact || "")
      setLocation(user.location || "")
    } catch (err) {
      toast.error(err.response?.data?.message || err.message)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (contact.length !== 10) {
      toast.error("contact should be 10 digit")
      setLoading(false)
    } else {
      try {
        const response = await axios.put(
          `${url}/profile`,
          {
            surname,
            firstname,
            birthDate,
            gender,
            email,
            contact,
            location,
          },
          { withCredentials: true }
        )
        localStorage.setItem("userData", JSON.stringify(response.data))
        toast.success("Profile updated successfully")
      } catch (err) {
        toast.error(err.response?.data?.message || err.message)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <section className='profile-section'>
      <Header />
      <main className='profile-main-container'>
        <div className='profile-cover-container'>
          <div className='image-container'>
            <label htmlFor='image'>
              <div className='image-icon-container'>
                <img
                  src={image ? URL.createObjectURL(image) : profileAvatar}
                  alt='Profile Avatar'
                />
                <IoCameraReverseOutline className='camera-roll' />
              </div>
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type='file'
              id='image'
              hidden
            />
          </div>
          <p className='user-name'>
            {userData.surname} {userData.firstname}
          </p>
          <p className='user-email'>{userData.email}</p>
        </div>
        <div className='edit-section'>
          <h4>Edit Profile</h4>
          <form onSubmit={handleSubmit}>
            <div className='name-container'>
              <label htmlFor='name'>Enter your Name</label>
              <div>
                <input
                  type='text'
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  id='surname'
                  name='surname'
                  placeholder='Surname'
                />
                <input
                  type='text'
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  id='firstname'
                  placeholder='First Name'
                />
              </div>
            </div>
            <div className='birth-day-container'>
              <label htmlFor='birth-date'>Enter your Date of Birth</label>
              <input
                type='date'
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                min='1960-01-01'
                max='2024-12-31'
                name='birthDate'
                id='birth-date'
              />
            </div>
            <div className='gender-container'>
              <label htmlFor='gender'>Your Gender</label>
              <select
                name='gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                id='gender'
              >
                <option value='' disabled>
                  Gender
                </option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <div className='phone-number-container'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='number'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder='Phone number'
              />
            </div>
            <div className='location-container'>
              <label htmlFor='location'>Location/Address</label>
              <input
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder='Enter your location/Address'
              />
            </div>
            <div className='email-container'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email account'
              />
            </div>
            <div className='save-profile-container'>
              <button type='submit' disabled={loading}>
                {loading ? "Saving..." : "Save Profile"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  )
}

export default ProfilePage
