import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const[select,setSelect]=useState("About")
  const [isopen,setIsopen]=useState(false)
  return (
    <>
        <div className=' bg-[#282828] w-[35%] hidden   rounded-l-full  p-4  lg:flex  justify-around ml-auto    '>
            <ul className=' text-white text-[15px]  md:text-xl gap-5 font-bold flex  '>
                <li onClick={()=>setSelect('About')} className={select === 'About'? 'text-orange-500':"" } ><Link to={'/About'}>About</Link></li>
                <li onClick={()=>setSelect('Resume')} className={select === 'Resume'? 'text-orange-500':"" }><Link to={'/Resume'}>Resume</Link></li>
                <li onClick={()=>setSelect('Contact')} className={select === 'Contact'? 'text-orange-500':"" }><Link to={'/Contact'}>Contact</Link></li>
                <li onClick={()=>setSelect('Portfolio')} className={select === 'Portfolio'? 'text-orange-500':"" }><Link to={'/Portfolio'}>Portfolio</Link></li>
            </ul>
        </div>
        <div className='fixed top-5 lg:hidden right-6 '>
          {isopen?<p onClick={()=>setIsopen(false)}><IoMdClose className='text-white text-[20px]  md:text-[25px]'/></p>:<p  onClick={()=>setIsopen(true)}><GiHamburgerMenu className='text-white  text-[20px] md:text-[25px]'/></p>}
        </div>

        <ul className={isopen?'fixed right-10 top-10 bg-[#333333] bg-opacity-90 p-9 text-white rounded-lg text-xl lg:hidden ':"hidden"} onClick={()=>setIsopen(false)}>
        <li onClick={()=>setSelect('About')} className={select === 'About'? 'text-orange-500 ':"hover:text-yellow-300" } ><Link to={'/About'}>About</Link></li>
                <li onClick={()=>setSelect('Resume')} className={select === 'Resume'? 'text-orange-500':"hover:text-yellow-300" }><Link to={'/Resume'}>Resume</Link></li>
                <li onClick={()=>setSelect('Contact')} className={select === 'Contact'? 'text-orange-500':"hover:text-yellow-300" }><Link to={'/Contact'}>Contact</Link></li>
                <li onClick={()=>setSelect('Portfolio')} className={select === 'Portfolio'? 'text-orange-500':"hover:text-yellow-300" }><Link to={'/Portfolio'}>Portfolio</Link></li>
        </ul>

        </>
  )
}

export default Navbar