import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Cont from './pages/Cont.jsx'
import Portfo from './pages/Portfo.jsx'
import Singleportfolio from './pages/Singleportfolio.jsx'

const router =createBrowserRouter([
  {
path:"/",
element:<App/>,
children:[
  {
    path:'/',
    element:<About/>
  },
  {
    path:'/About',
    element:<About/>
  },
  {
    path:'/Portfolio',
    element:<Portfo/>
  },
  {
      path:'/Resume',
      element:<Resume/>
  },
  {
    path:'/Contact',
    element:<Cont/>
  },
  {
    path:'/Portfolio/:Name',
    element:<Singleportfolio/>
  }]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
