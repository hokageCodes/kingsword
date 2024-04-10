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
    // Process form data
    console.log(formData);
  };

    // Helper function to load images correctly on mobile /(bug fix)
    const getImagePath = (imageName) => `/path/to/images/${imageName}`;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center items-center">

        {/* Slanted Image Gallery */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="relative" style={{ height: '243.534px' }}>
              <img
                src="/other.jpg"
                alt="Gallery Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform translate-y-10% mt-[30px]"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative" style={{ height: '243.534px' }}>
              <img  
                src="/other1.jpg"
                alt="Gallery Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform -translate-y-10%"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative" style={{ height: '243.534px' }}>
              <img
                src="/other2.jpg"
                alt="Gallery Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform translate-y-10% mt-[50px]"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative" style={{ height: '243.534px' }}>
              <img
                src="/other.jpg"
                alt="Gallery Image 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform -translate-y-10%"
              />
            </div>
          </div>
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
                <label htmlFor="installation" className="block text-gray-700 text-sm font-bold mb-2">
                  Installation *
                </label>
                <select
                  id="installation"
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
              <div>
              <button type="submit" className="w-full bg-yellow-500 text-white p-3 rounded hover:bg-yellow-600">
                  Worship with us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorshipPage;
