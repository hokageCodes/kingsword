"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const WorshipPage = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', city: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center items-center">

        {/* Slanted Image Gallery */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          {['other.jpg', 'worship1.png', 'worship2.png', 'worship3.png'].map((src, index) => (
            <div key={index} className="col-span-1 relative h-60 lg:h-96">
              {/* Using Next.js Image component for optimized images */}
              <Image
                src={`/${src}`} // Ensure the path is correct
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
    
        {/* Form Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Worship with us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block text-gray-700 text-sm font-bold mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                <select
                  id="city"
                  name="city"
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded bg-white"
                  required
                >
                  <option value="">Select city</option>
                  <option value="city_one">City One</option>
                  <option value="city_two">City Two</option>
                  <option value="city_three">City Three</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-white p-3 rounded hover:bg-yellow-600">
                Worship with us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorshipPage;

