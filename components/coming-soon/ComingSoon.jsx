"use client"
import React, { useState } from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-center px-4 py-8">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-600 mb-6">
        We are working on this page! Stay tuned for updates.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          className="px-6 py-4 bg-[#c27803] text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          <a href="/">Go back Home</a>
        </button>
      </div>
      {/* Optional: Add a graphic or image related to what's coming soon */}
    </div>
  );
};

export default ComingSoon;
