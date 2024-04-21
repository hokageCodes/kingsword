"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';


// Import your content components
import OurBeliefContent from '../../components/our-belief/OurBelief';
import OurLeadershipContent from '../../components/our-leadership/OurLeadershipContent';
import LocationsContent from '../../components/installations/InstallationsContent';

const tabData = [
  {
    label: 'Our Belief',
    content: <OurBeliefContent />,
  },
  {
    label: 'Our Leadership',
    content: <OurLeadershipContent />,
  },
  {
    label: 'Locations',
    content: <LocationsContent />,
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(tabData[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
    console.log("Clicked tab:", label); // Log to see if the function is called
  };

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <div className="flex justify-around items-center bg-yellow-300 py-3 shadow-md">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab.label)}
            className={`w-full py-2 transition-colors duration-300 ease-in-out cursor-pointer
              ${activeTab === tab.label ? 'text-black-900 font-bold' : 'text-gray-600 hover:text-black-900'}
              text-sm sm:text-md md:text-lg lg:text-xl flex justify-center items-center`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        variants={variants}
        initial="hidden"
        animate="visible"
        className="p-4"
      >
        {tabData.find(tab => tab.label === activeTab)?.content}
      </motion.div>
    </div>
  );
}