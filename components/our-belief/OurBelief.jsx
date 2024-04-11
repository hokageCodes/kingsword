import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define your animation variants here
const variants = {
  offscreen: {
    x: -100,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const OurBeliefContent = () => {
  return (
    <div className="space-y-16">
      {/* Top Section */}
      <motion.div 
        className="flex flex-col md:flex-row items-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={variants} className="w-full md:w-1/2">
          {/* Replace with your image */}
          <Image src="/fam.jpg" alt="Vision Image" layout="responsive" width={500} height={300} />
        </motion.div>
        <motion.div variants={variants} className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <p className='mb-8'>KingsWord Calgary is a Church of young,  vibrant and passionate people based in Calgary in Alberta.</p>
          <p className="mt-8">We are a Church committed to raising people who give expression to the Word and the Spirit of God in their daily lives; and who are committed to God&#39;s plan for their lives.</p>
          <p className="mt-8">KingsWord Calgary is an expression of KingsWord Everywhere.  At KingsWord Everywhere, our vision is to raise a supernatural people - people of the Word, Spirit and Purpose everywhere.</p>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div 
        className="flex flex-col md:flex-row items-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={variants} className="w-full md:w-1/2">
          {/* Replace with your image */}
          <Image src="/hug.jpg" alt="Mission Image" layout="responsive" width={500} height={300} />
        </motion.div>
        <motion.div variants={variants} className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Our vision is to raise a supernatural army that will bring God&#39;s influence to cover the earth</h2>
          <p>Joel 2:1-32, Is 8:18, Eze 8:14</p>
          <hr className='mt-8 mb-8' />
          <h2 className="text-2xl font-bold mb-4">Our vision is to raise a supernatural army that will bring God&#39;s influence to cover the earth</h2>
          <p>Joel 2:1-32, Is 8:18, Eze 8:14</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurBeliefContent;
