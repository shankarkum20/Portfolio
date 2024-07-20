import { useState } from 'react'
import {ToastContainer} from 'react-toastify'
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
function App() {
 
  return (
    <>
       <ToastContainer position='top-center'/>
      <Home/>
    </>
  )
}

export default App
