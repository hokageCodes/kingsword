import React from 'react';
import { FaHeart, FaHandsHelping, FaPray, FaMedal, FaUsers, FaLightbulb } from 'react-icons/fa';

function CoreValuesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: <FaHeart />, title: 'Love', description: 'Putting others before ourselves and showing compassion.' },
            { icon: <FaHandsHelping />, title: 'Honor', description: 'Upholding dignity and respect in all our interactions.' },
            { icon: <FaPray />, title: 'Prayer', description: 'Believing in the power of communication with the divine.' },
            { icon: <FaMedal />, title: 'Excellence', description: 'Striving for the highest quality in all we do.' },
            { icon: <FaUsers />, title: 'Soul-winning', description: 'Committed to bringing people into a meaningful relationship with the divine.' },
            { icon: <FaLightbulb />, title: 'Creativity', description: 'Encouraging innovation and originality.' },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-6xl mb-4 text-[#c27803]">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValuesSection;
