"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import your content components
import OurBeliefContent from '@/components/our-belief/OurBelief';
import OurLeadershipContent from '@/components/our-leadership/OurLeadershipContent';
import InstallationsContent from '@/components/installations/InstallationsContent';

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
    <div className="container mx-auto p-4">
      <div className="flex border-b">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.label)}
            className={`py-2 px-4 text-lg ${
              activeTab === tab.label
                ? 'border-b-2 border-blue-500 text-blue-500 font-semibold'
                : 'text-gray-600 hover:text-blue-500'
            } focus:outline-none`}
          >
            {tab.label}
          </button>
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
