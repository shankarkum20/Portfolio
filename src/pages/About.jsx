import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import resume from '../assets/Shankar_kum.pdf'

const About = () => {
  return (
    <>
    <div className='text-white mx-9'> 
      <div className='my-10'>
      <h1 className='text-[25px] md:text-3xl mb-4 font-bold '>About Me</h1>
      <hr className='w-[20px] md:w-[40px] border-orange-400 border-2 rounded-xl' />
      </div>
     
      <div className='mx-5 lg:mx-11 md:mx- mb-8'> 
        <p className='font-medium mb-5 text-[15px] md:text-xl text-gray-300'>
          I'm a Mern Stack Developer Seeking oppurtunities to apply expertise in web apllication developement.Eager to Contributeto innovative projects and gain practical experience in a collaborative team 
        </p>

        <p className='font-semibold text-gray-300 text-[15px] mb-10 md:text-xl'>
          My Job is to build Your Web Application so that it is functional and  user-friendly but at the same time attractive.Moreover I add personal touch to your product and make sure that is eye-catching and easy to use .My aim is to bring across your message and identofy in the most creative ay .I created Web Application using  Mern Stack
        </p>

        <a className='text-sm bg-purple-500 p-2 rounded-full hover:bg-orange-500 md:text-l lg:text-xl font-bold md:p-5 mr-10 ' href={resume} download="shankar_resume">Download Resume</a>
        <a className='text-sm bg-purple-500 p-2 rounded-full hover:bg-orange-500 md:text-l lg:text-xl md:p-5 font-bold ' href='mailto:shankarkumar.sk557@gmail.com' >Contact Me</a>
      </div>
      {/**************** */}
      <h1 className='font-bold text-3xl pt-5 pb-3'>What I'm Doing</h1>
      <hr className='w-[20px] md:w-[40px] border-orange-400 border-2 rounded-xl' />
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto shadow-lg gap-8 mt-10'>
      
        <div className='bg-[#333333]  rounded-[calc(1.5rem-1px)] p-8 flex gap-3 shadow-lg shadow-gray-700/50 flex-wrap '>
        <div className='flex '>
          <FaLaptopCode className='text-[35px]'/>
          </div>  
          <div className=''><h1 className='font-bold'>Web Design</h1>
          <p className='text-gray-300'>The mostmodern and high-quality design mode at a  professional level</p>
          </div>
        </div>
    {/**************** */}     
    <div className='bg-[#333333] rounded-[calc(1.5rem-1px)] p-8 flex gap-3 shadow-lg shadow-gray-700/50  flex-wrap'>
        <div className='flex items-center '>
          <FaLaptopCode className='text-[35px]'/>
          </div> 
          <div><h1 className='font-bold'>Web Development</h1>
          <p className='text-gray-300'>High-quality development of sites at the profrssionally level</p>
          </div>
        </div>
        

      </div>
      
{/**************** */}
<h1 className='font-bold text-3xl pt-5 pb-5'>Skills</h1>
<hr className='w-[20px] md:w-[40px] border-orange-400 border-2 rounded-xl' />
      <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-w-3xl mx-auto shadow-lg gap-8 mt-10'>
      
        <div className='bg-[#333333]  rounded-[calc(1.5rem-1px)] p-8 flex items-center justify-center gap-3 shadow-lg shadow-gray-700/50 flex-wrap '>
        <div className=' '>
          <FaLaptopCode className='text-[35px]'/>
          </div> 
          <div className=''><h1 className='font-bold'>HTML 5</h1>
          </div>
        </div>
    {/**************** */}     
    <div className='bg-[#333333]  rounded-[calc(1.5rem-1px)] p-8 flex flex-col items-center justify-center gap-3 shadow-lg shadow-gray-700/50 flex-wrap '>
        <div className=' '>
          <FaLaptopCode className='text-[35px]'/>
          </div> 
          <div className=''><h1 className='font-bold p-2'>  CSS</h1>
          </div>
        </div>
        {/***************** */}
        <div className='bg-[#333333]  rounded-[calc(1.5rem-1px)] p-8 flex items-center justify-center gap-3 shadow-lg shadow-gray-700/50 flex-wrap '>
        <div className=' '>
          <FaLaptopCode className='text-[35px]'/>
          </div> 
          <div className=''><h1 className='font-bold'>React Js</h1>
          </div>
        </div>
        {/***************** */}
        <div className='bg-[#333333]  rounded-[calc(1.5rem-1px)] p-8 flex items-center justify-center gap-3 shadow-lg shadow-gray-700/50 flex-wrap '>
        <div className=' '>
          <FaLaptopCode className='text-[35px]'/>
          </div> 
          <div className=''><h1 className='font-bold'>Node Js</h1>
          </div>
        </div>
        {/***************** */}
        <div className='bg-[#333333]  rounded-[calc(1.5rem-1px)] p-8 flex items-center justify-center gap-3 shadow-lg shadow-gray-700/50 flex-wrap '>
        <div className=' '>
          <FaLaptopCode className='text-[35px]'/>
          </div> 
          <div className=''><h1 className='font-bold'>Express Js</h1>
          </div>
        </div>
        {/***************** */}
        <div className='bg-[#333333]  rounded-[calc(1.5rem-1px)] p-8 flex items-center justify-center gap-3 shadow-lg shadow-gray-700/50 flex-wrap '>
        <div className=' '>
          <FaLaptopCode className='text-[35px]'/>
          </div> 
          <div className=''><h1 className='font-bold'>MongoDb</h1>
          </div>
        </div>

      </div>




    </div>
    </>
  )
}

export default About