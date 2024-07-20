import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hm from './Hm'
import Sidebar from '../components/Sidebar'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-wrap md:flex-nowrap  flex-col md:flex-row '>
    <Sidebar/>
    <div>
      <Hm/>
    </div>
    </div>
    
    
    </>
  )
}

export default Home