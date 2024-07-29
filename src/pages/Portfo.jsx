import React, { useEffect, useState } from 'react'
import blogapp from '../assets/blogapp.png'
import Ecomerce from '../assets/Ecomerce.png'
import hms_dashboard from '../assets/hms_dashboard.png'
import hms_user from '../assets/hms_user.png'
import Jobportal from '../assets/Jobportal.png'
import weather from '../assets/weather.png'
import Loginsignup from '../assets/Loginsignup.png'
import Managerwise from '../assets/Managerwise.png'
import starbuck from '../assets/starbuck.png'
import chat_app from '../assets/chat_app.png'
import { Link } from 'react-router-dom'
const Portfo = () => {
    const [selectcategory,setSelectCategory]=useState(null)
    const category =['Web Application','Web Design']
    const  data =[
      {
       "image":hms_dashboard,
       "Name":"Hospital Management system",
       "name":"HospitalManagementsystem",
       "Category":"Web Application",
      },
      {
        "image":starbuck,
        "Name":"Starbuck",
        "name":"Starbuck",
        "Category":"Web Design",
       },
      {
        "image":hms_user,
        "Name":"Hospital Management system User Interface",
        "name":"HMS-User",
        "Category":"Web Application",
       },
      {
        "image":blogapp,
       "Name":"Blog Website",
       "name":"Blog-Website",
       "Category":"Web Application",
      },
      {
      "image":Jobportal,
       "Name":"Job Portal",
       "name":"Job-Portal",
       "Category":"Web Application",
      },
      {
        "image":Ecomerce,
       "Name":"E-Commerce",
       "name":"E-Commerce",
       "Category":"Web Application",
      },
      {
        "image":chat_app,
       "Name":"Chat Application",
       "name":"Chat-Application",
       "Category":"Web Application",
      },
      {
        "image":Loginsignup,
       "Name":"Login With OTP",
       "name":"Login-With-OTP",
       "Category":"Web Application",
      },
      {
        "image":weather,
       "Name":"Weather App",
       "name":"Weather-App",
       "Category":"Web Application",
      },
      {
        "image":Managerwise,
       "Name":"Manager-wise",
       "name":"Manager-wise",
       "Category":"Web Design",
      }

    ]
    

    const fildata=data
    .filter((item)=>!selectcategory || item.Category === selectcategory)
  return (
    <>
    <div className='mx-10 my-10'>
    <div className='mb-5'>
      <h1 className='text-[25px] md:text-3xl mb-4 font-bold text-white '>Portfolio</h1>
      <hr className='w-[20px] md:w-[40px] border-orange-400 border-2 rounded-xl' />
      </div>
     
     <div className='flex  gap-6 text-white'>
        <button className={selectcategory === null ? 'text-yellow-400 font-bold text-[20px] md:text-[25px] ':"font-bold text-[15px] md:text-[20px]"} onClick={()=>setSelectCategory(null)}>All</button>
        {
            category.map((item,index)=>{
                return <button className={selectcategory === item ? 'text-yellow-400 font-bold text-[20px] md:text-[25px] ':" font-bold text-[15px] md:text-[20px] "} onClick={()=>setSelectCategory(item)} key={index}>{item}</button>
            })
        }
     </div>
    
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-14 text-center   '> 
      {fildata.map((item,index) =>{
        return <Link to={`/Portfolio/${item.name}`} key={index} className=''>
          <div className='mb-3 flex justify-center'>
          <img className=' w-[300px]  md:w-full' src={item.image} alt="" />
          </div>
          <h1 className='text-sm md:text-xl font-semibold text-white'>{item.Name}</h1>
          <p className='text-gray-300 text-l'>{item.Category}</p>
          
        </Link>
      
      })
      }
       </div>

    </div>
    </>
  )
}

export default Portfo