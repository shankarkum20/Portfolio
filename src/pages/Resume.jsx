import React from 'react'
import { IoMdBook } from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";

const Resume = () => {
  return (
    <>
    <div className='text-white mx-10 my-10 '>
    <div className='mb-5'>
      <h1 className='text-[25px] md:text-3xl mb-4 font-bold '>Resume</h1>
      <hr className='w-[20px] md:w-[40px] border-orange-400 border-2 rounded-xl' />
      </div>
      <div className='flex gap-4 items-center mb-8'>
      <span><IoMdBook className='text-[30px] ]'/></span>
       <h1 className='text-3xl font-bold'>Education</h1>
      </div>
        
           
      <div className='mb-5'>
        <h1 className='inline-flex items-center gap-10'><span><FaRegDotCircle/></span> Central Board of secondary Education (Class X)</h1>
        <p className='ml-14 mb-2'>2018</p>
        
      </div>
      <div className='mb-5'>
        <h1 className='inline-flex  items-center gap-10 mb-2'> <span><FaRegDotCircle/></span>Bihar Board of secondary Education(BSEB XII)</h1>
        <p className='ml-14'>2020</p>
        
      </div>
      <div className='mb-5 '>
        <h1 className='inline-flex  items-center gap-10 mb-3'><span><FaRegDotCircle/></span>Bachelor of Technology in Computer Science and Engineering(B-Tech CSE)</h1>
        <p className='ml-14 mb-2'>Starex University (Gurugram)</p>
        <p className='ml-14'>2020-2024</p>
        
      </div>
   <hr className='border-2 rounded-lg border-gray-600' />
{/**Experience   **************** */}     

   <div className='flex gap-4 items-center my-8'>
      <span><IoMdBook className='text-[30px] ]'/></span>
       <h1 className='text-3xl font-bold'>Experience</h1>
      </div>
        
           
      <div className='mb-5'>
        <h1 className='inline-flex items-center gap-10'><span><FaRegDotCircle/></span> Geopro Infotech Pvt Ltd (Gurugram)</h1>
        <p className='ml-14 mb-2'>Internship <span className='ml-1'>GIS</span> </p>
        <p className='ml-14 mb-2'>8 months</p>
        
      </div>
      <div className='mb-5'>
        <h1 className='inline-flex  items-center gap-10 mb-2'> <span><FaRegDotCircle/></span>Prutor@IIT kanpur</h1>
        <p className='ml-14 mb-2'>Software Developer Intern</p>
        <p className='ml-14'>3 Months</p>
        
      </div>
      <div className='mb-5 '>
        <h1 className='inline-flex  items-center gap-10 mb-3'><span><FaRegDotCircle/></span>Ducat (Gurugram)</h1>
        <p className='ml-14 mb-2'>Mern Stack industrial training</p>
        <p className='ml-14'>6 Months</p>
        
      </div>

      </div>
    
    </>
  )
}

export default Resume