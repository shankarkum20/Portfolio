import React, {  useState } from 'react'
import contact from '../assets/contact.png'
import map from '../assets/map.jpg'
import { IoIosSend } from "react-icons/io";
import {  toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Cont = () => {
  const [send,Setsend]=useState(false)
  const [message,Setmessage]=useState({
    name:"",
    email:"",
    message:""
  })
  console.log(message)
  

    const onchangehandler=(e)=>{
      Setmessage({...message,[e.target.name]:e.target.value})
    }

    const sendmessage=async()=>{
    let responseData
    Setsend(true)
    await fetch("https://portfolio-backend-01ub.onrender.com/api/user/sendmessage",{
      method:"POST",
      headers:{
        Accept:"application/json",
        
      },
      body:JSON.stringify(message)
    }).then(res=>res.json())
    .then(data=>{responseData=data})
    if(responseData.success){
      Setsend(false)
      toast.success(responseData.msg)
      navigateTo('/');
    }
    else{
      Setsend(false)
      toast.error(responseData.msg)
    }
  }

  


  return (
    <div className=' mx-5 my-10'>
    <div className='py-5  text-white  px-4 '>
    <div className=' text-white'>
      <h1 className='text-[25px] md:text-3xl mb-4 font-bold '>Contact</h1>
      <hr className='w-[20px] md:w-[40px] border-orange-400 border-2 rounded-xl' />
      </div>
  </div>
  <div className='  p-5 md:px-20 '>
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 mx-auto gap-9  '  >
      <img src={map} className='w-full rounded-lg my-0 lg:my-20' alt="" />
      <div>
        <div className='mb-4'>
          <h1 className='font-semibold text-lg mb-2 text-white'>Full Name</h1>
          <input className='bg-[#111111] border-gray-500 w-full border p-3 font-medium rounded-lg text-gray-500' type="text" name="name" onChange={(e)=>onchangehandler(e)} value={message.name} id="" placeholder='Enter your name ..' />
        </div>
        <div className='mb-4'>
          <h1 className='font-semibold text-lg mb-2 text-white'>Email</h1>
          <input className='bg-[#111111] border-gray-500 w-full border   p-3 font-medium rounded-lg text-white' type="text" name="email" onChange={(e)=>onchangehandler(e)} value={message.email} id="" placeholder='Enter your Email ..' />
        </div>
        <div>
          <h1 className='font-semibold text-lg mb-2 text-white'> Message</h1>
          <textarea name="message" onChange={(e)=>onchangehandler(e)} value={message.message} id="" cols="30" rows='5' className='bg-[#111111] border-gray-500 w-full outline-4 text-gray-500 border p-3 text-lg font-medium rounded-lg ' placeholder='Message here...' ></textarea>
        </div>
        {send? <button onClick={()=>sendmessage()} className='bg-orange-500 p-3 px-5 rounded mt-5 font-bold text-white hover:bg-orange-500 inline '><span className='inline-flex items-center mr-2'><p className='loading'></p></span>Sending message</button>: <button onClick={()=>sendmessage()} className='bg-purple-500 p-3 px-5 rounded mt-5 font-bold text-white hover:bg-orange-500 inline '><span className='inline-flex items-center mr-2'><IoIosSend/></span>Send message</button>}
      </div>
    </div>
  </div>
</div>
  )
}

export default Cont