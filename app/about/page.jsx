"use client"
// Use client
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import your content components
import OurBeliefContent from '../../components/our-belief/OurBelief';
import OurLeadershipContent from '../../components/our-leadership/OurLeadershipContent';
import LocationsContent from '../../components/installations/InstallationsContent'

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
    content: <LocationsContent />, // Updated component reference for Locations
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(tabData[0].label);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <div className="flex justify-around items-center bg-yellow-300 py-3 shadow-md">
        {tabData.map((tab, index) => (
          <button // Changed from div to button for better accessibility and semantic HTML
            key={index}
            onClick={() => setActiveTab(tab.label)}
            className={`w-full text-xl md:text-2xl py-2 focus:outline-none ${
              activeTab === tab.label
                ? 'text-black-500 font-bold' // Make the active tab more distinct
                : 'text-black-900 hover:text-black-500'
            }`}
            style={{ transition: 'all 0.3s ease' }} // Smooth transition for color changes
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab} // Add a key to help React identify changes
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="p-4"
      >
        {tabData.find((tab) => tab.label === activeTab)?.content}
      </motion.div>
    </div>
  );
}
