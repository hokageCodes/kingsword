import React, { useState } from 'react';

const tabData = [
  {
    label: 'Our Belief',
    content: 'Content about our beliefs...',
  },
  {
    label: 'Our Leadership',
    content: 'Content about our leadership...',
  },
  {
    label: 'Installations',
    content: 'Content about our installations...',
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(tabData[0].label);

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
      <div className="p-4">
        {tabData.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
}
