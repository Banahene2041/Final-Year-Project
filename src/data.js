import { HiOutlineHome } from "react-icons/hi"
import { BiCategoryAlt } from "react-icons/bi"
import { BsInfoCircle } from "react-icons/bs"
import { MdLocalPhone } from "react-icons/md"
import { FaSignOutAlt } from "react-icons/fa"

// importing assets
import { assets } from "./assets/assets"

const Navlinks = [
  { id: 1, icon: <HiOutlineHome />, path: "/home", name: "Home" },
  { id: 2, icon: <BiCategoryAlt />, path: "/category", name: "Category" },
  { id: 3, icon: <BsInfoCircle />, path: "/about", name: "About Us" },
  { id: 4, icon: <MdLocalPhone />, path: "/contact", name: "Contact" },
  { id: 5, icon: <FaSignOutAlt />, path: "/register", name: "Sign Up" },
]

const slide = [
  {image: assets.nurse_attending},
  {image: assets.nurse_arranging},
  {image: assets.pharmacist_talking},
  {image: assets.single_anime_nurse},
  {image: assets.just_image},
]

const filters = [
  {name: "Baby & Child Health",path: ""},
  { name: "Men's Health", path: "" },
  { name: "Women's", path: "" },
  { name: "Cough,Cold & Flu", path: "" },
  { name: "Vitamins & Supplements", path: "" },
  { name: "Diet & Fitness", path: "" },
  { name: "Pain Relief", path: "" },
  { name: "Sexual Wellness", path: "" },
]

export { Navlinks, slide, filters }
