import React from 'react'
import contact from '../assets/contact.png'
import { IoIosSend } from "react-icons/io";

const Cont = () => {
  return (
    <div className=' mx-5 my-10'>
    <div className='py-5  text-white  px-4 '>
    <div className=' text-white'>
      <h1 className='text-[25px] md:text-3xl mb-4 font-bold '>Contact</h1>
      <hr className='w-[20px] md:w-[40px] border-orange-400 border-2 rounded-xl' />
      </div>
  </div>
  <div className='  p-5 md:px-20 '>
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 mx-auto gap-9 '  >
      <img src={contact} className='w-full' alt="" />
      <div>
        <div className='mb-4'>
          <h1 className='font-semibold text-lg mb-2 text-white'>Full Name</h1>
          <input className='bg-[#111111] border-gray-500 w-full border p-3 font-medium rounded-lg text-gray-500' type="text" name="" id="" placeholder='Enter your name ..' />
        </div>
        <div className='mb-4'>
          <h1 className='font-semibold text-lg mb-2 text-white'>Email</h1>
          <input className='bg-[#111111] border-gray-500 w-full border   p-3 font-medium rounded-lg text-white' type="text" name="" id="" placeholder='Enter your Email ..' />
        </div>
        <div>
          <h1 className='font-semibold text-lg mb-2 text-white'> Message</h1>
          <textarea name="" id="" cols="30" rows='5' className='bg-[#111111] border-gray-500 w-full outline-4 text-gray-500 border p-3 text-lg font-medium rounded-lg ' placeholder='Message here...' ></textarea>
        </div>
        <button className='bg-purple-500 p-3 px-5 rounded mt-5 font-bold text-white hover:bg-orange-500 inline '><span className='inline-flex items-center mr-2'><IoIosSend/></span>Send message</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Cont