"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import your content components
import OurBeliefContent from '../../components/our-belief/OurBelief';
import OurLeadershipContent from '../../components/our-leadership/OurLeadershipContent';
import InstallationsContent from '../../components/installations/InstallationsContent';

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
    label: 'Installations',
    content: <InstallationsContent />,
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
      {/* Banner with larger text */}
      <div className="h-16 flex justify-around items-center bg-yellow-300 py-4 shadow-md">
        {tabData.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(tab.label)}
            className={`text-2xl md:text-3xl ${
              activeTab === tab.label
                ? 'text-black-500 font-semibold'
                : 'text-gray-600 hover:text-black-900'
            } focus:outline-none cursor-pointer`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <motion.div
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
