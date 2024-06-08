import React from 'react'
import banner from '../assets/banner.webp'
function Banner() {
  return (
    <>
    <div className='flex flex-col md:flex-row md:gap-5 items-center justify-center bg-[#202124] text-white h-28 md:h-[70px]'>
        <b>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>
        <button className='bg-red-700 rounded-3xl text-xs p-3 pl-10 pr-10 '>Start Order</button>
    </div>
    <div id='Banner'>
      <img  className='h-[300px] md:h-auto w-full' src={banner} alt="" />
    </div>
    
    
    
    
    
    
    
    
    </>
  
  )
}

export default Banner