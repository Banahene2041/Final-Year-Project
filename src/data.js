import { HiOutlineHome } from "react-icons/hi"
import { BiCategoryAlt } from "react-icons/bi"
import { BsInfoCircle } from "react-icons/bs"
import { MdLocalPhone } from "react-icons/md"
import { FaHandPointRight } from "react-icons/fa6"

const Navlinks = [
  { id: 1, icon: <HiOutlineHome />, path: "/home", name: "Home" },
  { id: 2, icon: <BiCategoryAlt />, path: "/category", name: "Category" },
  { id: 3, icon: <BsInfoCircle />, path: "/about", name: "About Us" },
  { id: 4, icon: <MdLocalPhone />, path: "/contact", name: "Contact" },
  { id: 5, icon: <FaHandPointRight />, path: "/signup", name: "Sign Up" },
]

export { Navlinks }
