import React from 'react'
import icon from '../assets/man.png'
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const Sidebar = () => {
  return (
    <>
    <div className=' md:mx-0  '>
     <div className=' w-full text-[15px]   rounded-3xl m-6 flex  flex-row md:flex-col items-center gap-5 pt-10 bg-[#1E1E1E] h-auto pb-4 z-0  md:w-[300px]   '> 
         
      <div className='mx-11 text-center    md:mx-0 flex flex-col items-center '>


        <div className='rounded-lg w-[100px] mb-4   h-[100px] md:w-[200px] md:h-[200px]  grid items-center justify-center   bg-[#333333]  '>
          <img src={icon} className='w-[50px] md:w-[100px]' alt="p photo" />
        </div>

      
        <h1 className='text-white font-medium text-xl md:text-3xl mb-4'>Shankar kumar</h1>
        
        
        <p className='px-3 py-1 text-xl  rounded-lg bg-[#2C2C2C] text-white mb-4'>Mern Developer</p>
        <hr className='w-[210px] mt-0  bg-[#1E1E1E]'/>
        
        </div>
      

      <div className='gap-8   flex sm:flex-row md:flex-col  flex-wrap'>

      <div className='text-white  flex '>
        <div className='bg-[#1E1E1E] p-4'>
        <MdEmail className='text-2xl' />
        </div>
       
        <div className='w-full  sm:justify-center md:justify-start   '>
        <h2>Email</h2>
        <p className=''>Shankarkumar.sk557@gmail.com</p>
        </div>
        
      </div>

      <div className='text-white flex sm:justify-center md:justify-start w-full '>
       <div className='p-2'>
        <IoIosPhonePortrait  className='text-2xl' />
        </div>

        <div className='w-full  sm:justify-center md:justify-start   ' >
        <h2>Phone</h2>
        <p>+91 8340257235</p>
        </div>
        
      </div>

      <div className='text-white  flex sm:justify-center md:justify-start w-full '>
        <div className='p-2'>
          <MdDateRange className='text-2xl'/>
        </div>

        <div className='w-full  sm:justify-center md:justify-start   '>
        <h2>Birthday</h2>
        <p>January 01,2002</p>
        </div>

      </div>

      <div className='text-white   flex sm:justify-center md:justify-start w-full  '>

         <div className='p-2'>
          <FaMapMarkerAlt className='text-2xl'/>
         </div>

        <div className='w-full  sm:justify-center md:justify-start   '>
        <h2>Location</h2>
        <p>Bhiwadi Rajasthan ,India</p>
        </div>
        
      </div>
      </div>

      <div className='hidden   md:grid grid-cols-3 gap-10 text-2xl text-white mt-6'>
        <a href="#"><FaGithub/></a>
        <a href="#"><FaLinkedin/></a>
        <a href="#"><FaSquareXTwitter/></a>
      </div>

      </div>
      
      </div>
    </>
  )
}

export default Sidebar