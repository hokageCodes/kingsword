"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import RealLogo from '../../public/real-logo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className='bg-black text-white flex justify-between items-center h-24 z-50 relative'>
      <div className='flex-shrink-0 w-48 ml-4 md:w-64 md:ml-0'> {/* Adjusted for left alignment and responsive width */}
        <Image src={RealLogo} alt='Real Logo' width={208} height={80} layout='responsive' />
      </div>
      <ul className='hidden md:flex'>
        <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/">Home</a></li>
        <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/about">About</a></li>
        <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/connect">Connect</a></li>
        <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="https://youtube.com/kingswordcalgary8172?si=AqiMNKeBUnIy-DtJ">Listen</a></li>
        <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/grow">Grow</a></li>
        <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/partner">Partner</a></li>
        <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/shop">Shop</a></li>
      </ul>
      <div onClick={handleNav} className='md:hidden z-30 text-3xl'> {/* Larger icon for better mobile interaction */}
        { !nav ? <AiOutlineMenu /> : <AiOutlineClose /> }
      </div>
      <motion.div 
        initial="closed"
        animate={nav ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.8 }}
        className='fixed left-0 top-0 w-[60%] h-full bg-black border-r border-r-yellow ease-in-out z-20'
      >
        <ul className='pt-20'>
          <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'>Home</li>
          <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'>About</li>
          <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'>Connect</li>
          <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'>Listen</li>
          <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'>Grow</li>
          <li className='p-4 font-light hover:text-[#c27803] transition duration-500 ease-out hover:ease-in cursor-pointer'>Shop</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar;

