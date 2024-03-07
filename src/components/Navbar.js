import React from 'react'
import logo from '../assets/logo.png'
import { IoMdMenu } from 'react-icons/io';


function Navbar() {
  

  return (

    <div style={{ zIndex: 5 }} className='w-full sm:pl-[2rem] sm:pr-[2rem] h-[4rem] bg-white border-b border-[#DEDFE2] shadow-md flex items-center justify-between pl-[4rem] pr-[4rem] fixed top-0'>
      <div  className='logo'>
          <img src={logo} alt="" />
      </div>
      <div className='flex justify-around items-center'>
        <div className='font-black flex justify-between items-center gap-[2rem] sm:hidden md:hidden'>
                <button className='hover:scale-110'>Crypto Taxes</button>
                <button className='hover:scale-110'>Free Tools</button>
                <button className='hover:scale-110'>Resource Center</button>
                
        </div>
      
        <button type="button" class=" text-white border border-blue-800 bg-blue-800   hover:scale-110 rounded-lg text-m font-black px-8 py-1.5 text-center m-auto ml-[4rem] sm:hidden md:hidden">
            Get Started
        </button>
        <IoMdMenu className='hidden text-4xl md:inline-flex sm:inline-flex'/>
      </div>
    </div>
  )
}

export default Navbar
