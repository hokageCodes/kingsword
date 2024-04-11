"use client"

import React, { useState } from 'react';

// Dummy installations and partnership categories data based on your screenshot and previous information
const installations = ['The New Ikeja', 'The New Island'];
const partnershipCategories = [
  { name: 'DIAMOND', amountRange: '(1,000,000+)', frequency: 'MONTHLY' },
  { name: 'GOLD', amountRange: '(500,000 - 999,999)', frequency: 'MONTHLY' },
  { name: 'PLATINUM', amountRange: '(500,000 - 999,999)', frequency: 'QUARTERLY' },
  { name: 'SILVER', amountRange: '(100,000 - 499,999)', frequency: 'MONTHLY' },
  { name: 'BRONZE', amountRange: '(10,000 - 99,999)', frequency: 'MONTHLY' },
  { name: 'OTHERS', amountRange: '(1,000,000+)', frequency: 'MONTHLY' }
];

const PartnerWithUsPage = () => {
  const [step, setStep] = useState(1);
  const [isMember, setIsMember] = useState(false);
  const [selectedInstallation, setSelectedInstallation] = useState(installations[0]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const stepDescriptions = {
    1: {
      title: "Personal Details",
      content: "We would like to know more about you. Please provide your personal information."
    },
    2: {
      title: "Membership Information",
      content: "Are you already a member of our installations? Let us know!"
    },
    3: {
      title: "Partnership Category",
      content: "Choose the category that best describes your intended partnership contribution."
    }
  };

  // Handle change of form inputs including the radio buttons
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'isMember') {
      setIsMember(value === 'yes');
      if (value === 'no') {
        setSelectedInstallation('');
      }
    } else if (name === 'selectedInstallation') {
      setSelectedInstallation(value);
    } else if (name === 'partnershipCategory') {
      setSelectedCategory(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form data:', { selectedInstallation, selectedCategory });
  };

  // Steps control
  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePreviousStep = () => setStep((prevStep) => prevStep - 1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: '',
    currency: 'USD',  // Default value for the currency field
    partnershipCategory: '', // Add this to manage the partnership category selection
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner with text overlay */}
      <div className="relative h-64 bg-cover bg-center text-white" style={{ backgroundImage: "url('/banner-partner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Partner With Us</h1>
        </div>
      </div>

      {/* Stepper (ensure to implement the active step visual cue) */}
      {/* Stepper component code here */}

      <div className="container mx-auto p-4 bg-white mt-8 mb-16 rounded-lg shadow">
        <form onSubmit={handleSubmit}>
          {/* Personal Information Step */}
          {step === 1 && (
            <div className="space-y-4 p-4">
              <input className="w-full p-2 border rounded" type="text" placeholder="First Name" name="firstName" onChange={handleInputChange} />
              <input className="w-full p-2 border rounded" type="text" placeholder="Last Name" name="lastName" onChange={handleInputChange} />
              <input className="w-full p-2 border rounded" type="email" placeholder="Email" name="email" onChange={handleInputChange} />
              <input className="w-full p-2 border rounded" type="tel" placeholder="Phone Number" name="phone" onChange={handleInputChange} />
            </div>
          )}

          {/* Membership Step */}
          {step === 2 && (
            <div className="space-y-4 p-4">
              <p>Are you a member of any installations?</p>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="isMember" value="yes" onChange={handleInputChange} />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input type="radio" className="form-radio" name="isMember" value="no" onChange={handleInputChange} />
                <span className="ml-2">No</span>
              </label>
              {isMember && (
                <select className="w-full p-2 border rounded mt-4" name="selectedInstallation" onChange={handleInputChange} value={selectedInstallation}>
                  {installations.map((installation, index) => (
                    <option key={index} value={installation}>{installation}</option>
                  ))}
                </select>
              )}
            </div>
          )}

          {/* Donation Step */}
          {step === 3 && (
            <div className="space-y-4 p-4">
              {/* Category Selection based on the provided screenshot */}
              <div className="flex flex-col">
                {partnershipCategories.map((category, index) => (
                  <label key={index} className="flex justify-between items-center p-2 border rounded mb-2">
                    <span className="font-bold">{category.name} {category.amountRange}</span>
                    <span>{category.frequency}</span>
                    <input type="radio" className="form-radio" name="partnershipCategory" value={category.name} onChange={handleInputChange} />
                  </label>
                ))}
              </div>
              <input className="w-full p-2 border rounded" type="number" placeholder="Amount" name="amount" onChange={handleInputChange} />
              <select className="w-full p-2 border rounded" name="currency" onChange={handleInputChange} value={formData.currency}>
                <option value="USD">USD</option>
                {/* Other currency options */}
              </select>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between p-4">
            {step > 1 && (
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" type="button" onClick={handlePreviousStep}>
                Previous
              </button>
            )}
            {step < 3 && (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleNextStep}>
                Next
              </button>
            )}
            {step === 3 && (
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerWithUsPage;
