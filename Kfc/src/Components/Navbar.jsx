import React, { useContext, useState } from 'react'
import { CiLocationOn } from "react-icons/ci"
import kfc from '../assets/kfc.png'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import cart from '../assets/cart.png'
import { LuUserCircle } from "react-icons/lu";
import { AuthContext } from './AuthContextProvider';
import { Button } from '@chakra-ui/react';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {Em,isAuth,setisAuth,setEm}=useContext(AuthContext)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  function handleLogout(){
    setEm(null)
    setisAuth(false)
    navigate("/login")
  }
  return (
    <>
      <div className='w-full  flex  justify-center gap-2 mt-3 items-center  m-auto'>
        <CiLocationOn size={18} className='text-red-500 font-normal' />
        <p className='font-medium text-sm text-center sm:text-left'>
          Allow location access for local store menu and promos
        </p>
        <button className='bg-black text-cyan-50  rounded-xl text-sm p-1.5 mt-2  sm:mt-0'>
          Set Location
        </button>
      </div>
      <hr className='mt-2 mb-2 font-semibold' />

      <div id='navbar2' className='flex justify-between items-center w-full pl-3 pr-3  '>

        <button className='md:hidden' onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className='md:flex items-center gap-4 md:pl-28'>
          <Link to={"/"}><img src={kfc} className='h-24' alt="" /></Link>
          <Link to={"/product"} className='hidden md:block'>Menu</Link>
          <Link className='hidden md:block'>Deals</Link>
        </div>
       
        <div className='md:flex items-center gap-3 md:pr-28'>
        <LuUserCircle className='hidden md:block' size={20} />
        {isAuth?<span>{Em}</span>:<Link to={"/signup"} className='hidden md:block'>SignIn</Link>}
        <br />
        {isAuth&&<Button onClick={handleLogout}>Logout</Button>}
        <Link to={"/cart/:id"}><img src={cart} alt="" className='h-14' /></Link>
        </div>
      </div>








        {menuOpen && (
        <div className="flex flex-col items-center bg-gray-100 sm:hidden">
         <Link className='p-2'>Menu</Link>
         <Link className='p-2'>Deals</Link>
        </div>
      )}
      
    </>
  )
}

export default Navbar
