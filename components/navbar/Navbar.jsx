"use client"
import React,{useState} from 'react'
import { motion } from 'framer-motion';
import {AiOutlineClose, AiOutlineclose,AiOutlineMenu} from 'react-icons/ai'



const NavBar = () => {

 const [nav,setNav] =useState(false)

 const handleNav=()=>{
      setNav(!nav);
 }

 const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};


  return (
    <div className='bg-black text-white flex justify-between items-center h-24 z-50 relative'>
        <h1 className='text-3xl tracking-[5px] font-mono font-bold text-[#00df9a]'>KingsWord</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/">Home</a></li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/about">About</a></li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/connect">Connect</a></li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="https://youtube.com/kingswordcalgary8172?si=AqiMNKeBUnIy-DtJ">Listen</a></li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/grow">Grow</a></li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/partner">Partner</a></li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/shop">Shop</a></li>
          {/* <li className='p-4 font-semibold whitespace-nowrap'><button className='rounded-md border border-[#00df9a] hover:bg-[#00df9a] hover:text-gray-900 p-4 py-3 mt-[-14px]  transition duration-500 ease-out hover:ease-in'>Get Started</button></li> */}
        </ul>
        <div onClick={handleNav} className='md:hidden z-30'>
          { !nav  ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
        </div>
        <motion.div 
          initial="closed"
          animate={nav ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.8 }}
          className='fixed left-0 top-0 w-[60%] h-full bg-black border-r border-r-yellow ease-in-out z-20'
        >
          <ul className='pt-20' >
            <li className='p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer'>Home</li>
            <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>About</li>
            <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>Connect</li>
            <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>Listen</li>
            <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>Grow</li>
            <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>Shop</li>
            {/* <li className='p-4 font-semibold whitespace-nowrap'><button className='rounded-md border border-[#00df9a] hover:bg-[#00df98f3] hover:text-gray-900 p-4 py-3 mt-[-14px]  transition duration-500 ease-out hover:ease-in'>Get Started</button></li> */}
          </ul>
        </motion.div>
        </div>
  )
}

export default NavBar;
          