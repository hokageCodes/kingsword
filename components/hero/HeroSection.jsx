"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Welcome to KingsWord, Canada",
      subtitle: "Home of the Supernatural",
      image: "/1.png",
      ctaLink: "#join",
      ctaText: "Worship with us",
    },
    {
      title: "Welcome to KingsWord, Canada",
      subtitle: "Home of the Supernatural",
      image: "/2.png",
      ctaLink: "#join",
      ctaText: "Worship with us",
    },
    {
      title: "Welcome to KingsWord, Canada",
      subtitle: "Home of the Supernatural",
      image: "/3.png",
      ctaLink: "#join",
      ctaText: "Worship with us",
    },
    {
      title: "Welcome to KingsWord, Canada",
      subtitle: "Home of the Supernatural",
      image: "/4.png",
      ctaLink: "#join",
      ctaText: "Worship with us",
    },
    // ... other slides
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full" style={{ height: '80vh' }}>
      <AnimatePresence>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 w-full h-full ${index === activeSlide ? 'block' : 'hidden'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.5 } }}
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt="Hero slide"
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <motion.h2
                dangerouslySetInnerHTML={{ __html: slide.title }}
                className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <motion.h3
                dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 text-white"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
              <motion.a
                href={slide.ctaLink}
                className="mt-8 bg-[#c27803] hover:bg-blue-800 text-white font-bold py-3 px-6 text-lg sm:text-xl transition duration-300 ease-in-out"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {slide.ctaText}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <button type="button" className="absolute top-0 left-0 z-30 h-full p-4" onClick={prevSlide}>
        {/* Previous button */}
      </button>
      
      <button type="button" className="absolute top-0 right-0 z-30 h-full p-4" onClick={nextSlide}>
        {/* Next button */}
      </button>
    </div>
  );
};

export default HeroSection;
