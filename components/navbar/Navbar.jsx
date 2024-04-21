"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import Image from 'next/image';
import RealLogo from '../../public/real-logo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showLocationsDropdown, setShowLocationsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleLocationsDropdown = (e) => {
    e.preventDefault();
    setShowLocationsDropdown(!showLocationsDropdown);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='bg-black text-white flex justify-between items-center h-24 z-50 relative'>
      <div className='flex-shrink-0 w-48 ml-4 md:w-64 md:ml-0'>
        <a href="/">
          <Image src={RealLogo} alt='Real Logo' width={208} height={80} layout='responsive' />
        </a>
          
      </div>
      <ul className='hidden md:flex relative' ref={dropdownRef}>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/">Home</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/about">About</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/connect">Connect</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/give">Give</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/listen">Listen</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer relative flex items-center' onClick={toggleLocationsDropdown}>
          Locations <AiOutlineDown className="ml-1" />
          {showLocationsDropdown && (
            <div className='absolute left-0 mt-[230px] w-48 bg-white text-black rounded shadow-lg'>
              <ul>
                <li className='p-2 hover:bg-gray-200'><a href="/location1">Calgary</a></li>
                <li className='p-2 hover:bg-gray-200'><a href="/location2">Toronto</a></li>
                <li className='p-2 hover:bg-gray-200'><a href="/location3">Vancuover</a></li>
              </ul>
            </div>
          )}
        </li>
      </ul>
      <div onClick={handleNav} className='md:hidden z-30 text-3xl'>
        { !nav ? <AiOutlineMenu /> : <AiOutlineClose /> }
      </div>
      <motion.div 
        initial="closed"
        animate={nav ? "open" : "closed"}
        variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: "-100%" } }}
        transition={{ duration: 0.8 }}
        className='fixed left-0 top-0 w-[60%] h-full bg-black border-r border-r-yellow ease-in-out z-20'
      >
        <ul className='pt-20'>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/">Home</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/about">About</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/connect">Connect</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="/give">Give</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer'><a href="https://wearethenew.org/listen">Listen</a></li>
        <li className='p-4 font-bold hover:text-[#c27803] text-xl transition duration-500 ease-out hover:ease-in cursor-pointer relative flex items-center' onClick={toggleLocationsDropdown}></li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar;
