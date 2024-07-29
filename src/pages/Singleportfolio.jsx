import React, { useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
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
import img1 from '../assets/hms_dashboard/img1.png'
import img2 from '../assets/hms_dashboard/img2.png'
import img3 from '../assets/hms_dashboard/img3.png'
import img4 from '../assets/hms_dashboard/img4.png'
import img5 from '../assets/hms_dashboard/img5.png'
import img6 from '../assets/hms_dashboard/img6.png'
import hms1 from '../assets/hms_user/hms1.png'
import hms2 from '../assets/hms_user/hms2.png'
import hms3 from '../assets/hms_user/hms3.png'
import hms4 from '../assets/hms_user/hms4.png'
import hms5 from '../assets/hms_user/hms5.png'
import hms6 from '../assets/hms_user/hms6.png'
import m1 from '../assets/managerwise/m1.png'
import m2 from '../assets/managerwise/m2.png'
import m3 from '../assets/managerwise/m3.png'
import m4 from '../assets/managerwise/m4.png'
import m5 from '../assets/managerwise/m5.png'
import s1 from '../assets/starbuck/s1.png'
import s2 from '../assets/starbuck/s2.png'
import s3 from '../assets/starbuck/s3.png'
import s4 from '../assets/starbuck/s4.png'
import s5 from '../assets/starbuck/s5.png'
import j1 from '../assets/Job_portal/j1.png'
import j2 from '../assets/Job_portal/j2.png'
import j3 from '../assets/Job_portal/j3.png'
import j4 from '../assets/Job_portal/j4.png'
import j5 from '../assets/Job_portal/j5.png'
import j6 from '../assets/Job_portal/j6.png'
import e1 from '../assets/Eccomerce/e1.png'
import e2 from '../assets/Eccomerce/e2.png'
import e3 from '../assets/Eccomerce/e3.png'
import e4 from '../assets/Eccomerce/e4.png'
import e5 from '../assets/Eccomerce/e5.png'
import e6 from '../assets/Eccomerce/e6.png'
import e7 from '../assets/Eccomerce/e7.png'
import l1 from '../assets/Login_otp/l1.png'
import l2 from '../assets/Login_otp/l2.png'
import l3 from '../assets/Login_otp/l3.png'
import l4 from '../assets/Login_otp/l4.png'
import l5 from '../assets/Login_otp/l5.png'
import l6 from '../assets/Login_otp/l6.png'
import b1 from '../assets/blog_app/b1.png'
import b2 from '../assets/blog_app/b2.png'
import b3 from '../assets/blog_app/b3.png'
import b4 from '../assets/blog_app/b4.png'
import b5 from '../assets/blog_app/b5.png'
import b6 from '../assets/blog_app/b6.png'
import { FaArrowLeftLong } from "react-icons/fa6";

const Singleportfolio = () => {
    const {Name}=useParams();
    const [category,setcategory]=useState(Name)
    const[zoom,setzoom]=useState(false)

   const navigate=useNavigate()
    const  data =[
        {
         "image":hms_dashboard,
         "image1":img1,
         "image2":img2,
         "image3":img3,
         "image4":img4,
         "image5":img5,
         "image6":img6,
         "img1tit":"Log in to Dashboard",
         "img2tit":"Dashboard",
         "img3tit":"Doctors",
         "img4tit":"Appointments",
         "img5tit":"Register New Doctors",
         "img6tit":"Checking Query",
         "Name":"Hospital Management system",
         "name":"HospitalManagementsystem",
         "title":"In a hospital management portal project developed using React, Node.js,  Express and MongoDB, the goal is to create a comprehensive system that   facilitates the management of various hospital operations and services. This  includes a user portal for patients and an admin portal for administrators. This  introduction will provide an overview of the technology stack and the functionalities in each portal.",
         "Category":"Web Application",
        },
        {
          "image":starbuck,
          "image1":starbuck,
         "image2":s2,
         "image3":s3,
         "image4":s4,
         "image5":s5,
         "image6":"",
         "img1tit":"Homepage ",
         "img2tit":"Order Card",
         "img3tit":"Some info",
         "img4tit":"About us ",
         "img5tit":"Pastry Order",
         "img6tit":"",
          "Name":"Starbuck",
          "name":"Starbuck",
          "Category":"Web Design",
         },
        {
          "image":hms_user,
          "image1":hms1,
         "image2":hms2,
         "image3":hms3,
         "image4":hms4,
         "image5":hms5,
         "image6":hms6,
         "img1tit":"Homepage",
         "img2tit":"Who We Are",
         "img3tit":"Department",
         "img4tit":"Send Query",
         "img5tit":"Schedule Appointment",
         "img6tit":"Get Appointment",
          "Name":"Hospital Management system User Interface",
          "name":"HMS-User",
          "title":"In a hospital management portal project developed using React, Node.js,  Express and MongoDB, the goal is to create a comprehensive system that   facilitates the management of various hospital operations and services. This  includes a user portal for patients and an admin portal for administrators. This  introduction will provide an overview of the technology stack and the functionalities in each portal.",
          "Category":"Web Application",
         },
        {
          "image1":blogapp,
          "image2":b1,
          "image3":b2,
          "image4":b3,
          "image5":b4,
          "image6":b5,
          "image7":b6,
          "img1tit":"HomePage",
          "img2tit":"Pagination",
          "img3tit":"Footer",
          "img4tit":"Login / register",
          "img5tit":"Contact Us",
          "img6tit":"About Us ",
          "img7tit":"Services Section ",
         "Name":"Blog Website",
         "name":"Blog-Website",
         "title":"Comprehensive Blog App: Admin and User Dashboards for Creating Reading  and Managing Blog Posts Welcome to our dynamic Blog App  designed to cater to both administrators and users. With dedicated dashboards for each  admins can effortlessly manage content  approve posts and oversee user activity while users enjoy a seamless experience creating reading and engaging with blog posts. Explore various categories from fintech to health and join a thriving community of writers and readers. Start your blog today, share your stories, and access valuable tips and tutorials. Our Blog App offers the perfect platform for passionate bloggers to connect and thrive. Discover the future of blogging with our comprehensive and user-friendly app.",
         "Category":"Web Application",
        },
        {
        "image1":Jobportal,
        "image2":j2,
        "image3":j4,
        "image4":j3,
        "image5":j5,
        "image6":j6,
        "img1tit":"Homepage",
        "img2tit":"Filter by City",
        "img3tit":"Job Detail",
        "img4tit":"Job Detail",
        "img5tit":"Posted Job",
        "img6tit":"Login or Register",
         "Name":"Job Portal",
         "name":"Job-Portal",
         "title":"Introducing our state-of-the-art job portal built with the MERN stack (MongoDB, Express.js, React, Node.js), designed to streamline the job seeking and posting process. With user-friendly login and registration features, easily track the jobs you've applied for and manage your job postings. Whether you're a job seeker looking for your next opportunity or an employer searching for top talent, our platform offers the tools you need for success. Experience a modern, efficient, and intuitive job portal that connects talented professionals with their dream jobs. Join today and take control of your career journey!",
         "Category":"Web Application",
        },
        {
          
          "image1":e1,
        "image2":e2,
        "image3":e3,
        "image4":e4,
        "image5":e5,
        "image6":e6,
        "image7":e7,
        "img1tit":"Hero Section",
        "img2tit":"Offer",
        "img3tit":"Men Section",
        "img4tit":"Women section",
        "img5tit":"Login or Register",
        "img6tit":"Product ",
        "img7tit":"Cart ",
         "Name":"E-Commerce",
         "name":"E-Commerce",
         "title":"Discover the future of online shopping with our advanced e-commerce website built using the MERN stack (MongoDB, Express.js, React, Node.js). Enjoy a seamless shopping experience with intuitive add-to-cart functionality and dedicated sections for men, women, and kids. Browse through a wide range of products tailored to your preferences, ensuring a personalized shopping journey. Our platform combines cutting-edge technology with user-friendly design to make online shopping effortless and enjoyable. Experience convenience, variety, and efficiency all in one place. Shop now and transform your online shopping experience with our state-of-the-art e-commerce website.",
         "Category":"Web Application",
        },
        {
          "image1":chat_app,
         "Name":"Chat Application",
         "name":"Chat-Application",
         "title":"Real-Time Chat App with MERN Stack and Socket.io: Seamless Communication for Modern UsersDiscover our cutting-edge chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io for real-time communication. Experience seamless, instant messaging with a sleek interface designed for effortless user interaction. Connect with friends, family, or colleagues and enjoy features like live message updates, personalized chat windows, and user-friendly design. Our app ensures reliable and fast communication, making it the perfect solution for modern users seeking an efficient and enjoyable chatting experience.",
         "Category":"Web Application",
        },
        {
          "image1":Loginsignup,
          "image2":l1,
          "image3":l3,
          "image4":l2,
          "image5":l5,
          "image6":l6,
          "img1tit":"Home ",
          "img2tit":"Username",
          "img3tit":"Password",
          "img4tit":"Register",
          "img5tit":"Recovery",
          "img6tit":"Reset ",
         "Name":"Login With OTP",
         "name":"Login-With-OTP",
         "title":"Experience top-tier security and functionality with our MERN stack web application. Enjoy a seamless login and signup process, complete with a robust 'forgot password' feature that uses OTP verification sent directly to your email. Keep your profile information up-to-date with ease using our intuitive profile update section. Our platform ensures that your data is secure while providing a user-friendly experience. Whether you're a new user registering for the first time or an existing user managing your account, our MERN stack application offers all the tools you need for a smooth and secure user journey.",
         "Category":"Web Application",
        },
        {
          "image1":weather,
          
         "Name":"Weather App",
         "name":"Weather-App",
         "title":"Experience the future of weather forecasting with our state-of-the-art weather app. Get precise and reliable weather forecasts tailored to your location, ensuring you're always prepared for any weather condition. Enjoy real-time updates, radar maps, and personalized alerts that keep you informed about severe weather conditions. Whether you're planning your day, week, or a special event, our app provides the insights you need to stay ahead. Download now and take control of your weather experience with the ultimate weather app. Stay safe, stay informed, stay ahead.",
         "Category":"Web Application",
        },
        {
          "image":Managerwise,
         "Name":"Manager-wise",
         "image1":Managerwise,
         "image2":m1,
         "image3":m2,
         "image4":m3,
         "image5":m4,
         "image6":m5,
         "title":"Empower Your Business with Strategic Insights: Unlock Premier Features and Boost Productivity with Manage Wise Looking for a powerful management platform to streamline operations and drive success? Discover Manage Wise, designed to enhance your business productivity and provide strategic insights. Embrace the future of management with our premier features and capabilities. Get started today and dont settle for mediocrity. Watch our demo to learn more about how Manage Wise can transform your business operations.",
         "name":"Manager-wise",
         "Category":"Web Design",
        }
      ]
    
      const filt=data
      .filter((item)=>  item.name === category)
    if(filt === null){
        navigate('/')
    }
      return (
    <div className='mx-4 md:mx-5 my-5'>
        <Link to={'/Portfolio'}>
        <FaArrowLeftLong className='text-white text-2xl'/></Link>
       
        <div className='mx-7 '>
        {
            filt.map((item,index)=>{
                return <>
                <div className='text-white my-7'>
      <h1 className='text-[25px] md:text-3xl mb-4 font-bold '>{item.Name}</h1>
      <hr className='w-[20px] md:w-[40px] border-orange-400 border-2 rounded-xl' />
      </div>

      <div className='mx-2 md:mx-4 lg:mx-10 my-4'>
        <p className='text-gray-300 text-sm md:text-xl font-semibold'>{item.title}</p>
      </div>
     <div className='mt-5 hidden md:grid'>
     { !zoom? <h4 onClick={()=>setzoom(true)} className='text-white m-3 w-32 rounded-3xl text-l text-center font-bold bg-purple-500'> Click To Zoom </h4>: <h4 onClick={()=>setzoom(false)} className='text-white m-3 w-20 rounded-3xl text-l text-center font-bold bg-orange-500'> Disable </h4>}
     </div>
                 <div className={zoom?"imgbox grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3 md:mt-12  ":'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3 md:mt-14 '}>
                    <div><img className={zoom?'rounded-xl imggetrans':"rounded"} src={item.image1} alt="" />
                    <h1 className='text-center text-white font-bold my-2'>{item.img1tit}</h1>
                    </div>
                    <div >
                    <img className={zoom?'rounded-xl imggetrans':"rounded"} src={item.image2} alt="" />
                    <h1 className='text-center text-white font-bold my-2'>{item.img2tit}</h1>
                    </div>
                    <div>
                    <img src={item.image3} className={zoom?'rounded-xl imggetrans':"rounded"} alt="" />
                    <h1 className='text-center text-white font-bold my-2'>{item.img3tit}</h1>   
                    </div>
                    <div>
                    <img src={item.image4} className={zoom?'rounded-xl imggetrans':"rounded"} alt="" />
                    <h1 className='text-center text-white font-bold my-2'>{item.img4tit}</h1>
                    </div>
                    <div>
                    <img src={item.image5} className={zoom?'rounded-xl imggetrans':"rounded"} alt="" />
                    <h1 className='text-center text-white font-bold my-2'>{item.img5tit}</h1>
                    </div>
                    
                    <div>
                    <img src={item.image6} className={zoom?'rounded-xl imggetrans':"rounded"} alt="" />
                    <h1 className='text-center text-white font-bold my-2'>{item.img6tit}</h1>
                    </div>
                    <div>
                    <img src={item.image7} className={zoom?'rounded-xl imggetrans':"rounded"} alt="" />
                    <h1 className='text-center text-white font-bold my-2'>{item.img7tit}</h1>
                    </div>
                </div>
                </>
            })
        }
        </div>
    </div>
  )
}

export default Singleportfolio