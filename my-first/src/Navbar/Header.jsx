import React from 'react'
import "./Header.css"
import { GiCommercialAirplane } from "react-icons/gi";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className='navbar'>
        <div className="navbarone">

         <div className="logo">
         <GiCommercialAirplane  size={32}/>
         <h2>WILSO</h2>
         </div>

        <div className="companytel">
        <FaSquarePhone   size={20}/>
        <h6>Call Us : +01 1234567890</h6>
        </div>

        <div className="companyemail">
        <MdEmail size={20}  />
        <h6>demo@gmail.com</h6>
        </div>
        <div className="searchbox">
            <input type="text"placeholder='search'  autoComplete='off'/>
            <input type='button'><FaSearch /></input>
        </div>
        </div>
    </div>
  )
}

export default Header