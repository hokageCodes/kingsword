import React from 'react';

const ActionSection = () => {
  const actions = [
    {
      label: 'VOLUNTEER',
      imageUrl: '/other.jpg', // Replace with your image path
      alt: 'Volunteer',
      description: 'Join our team and make a difference' // Add a description or more info if needed
    },
    {
      label: 'GIVE',
      imageUrl: '/other1.jpg', // Replace with your image path
      alt: 'Give',
      description: 'Support us with your contributions' // Add a description or more info if needed
    },
    {
      label: 'CONNECT',
      imageUrl: '/other2.jpg', // Replace with your image path
      alt: 'Connect',
      description: 'Get involved with our community' // Add a description or more info if needed
    }
  ];

  return (
    <div className="bg-white py-12 border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Want to be a part of this movement?
          </h2>
        </div>
        <div className="flex flex-row justify-center items-stretch gap-4">
          {actions.map((action, index) => (
            <div key={index} className="flex-1">
              <div className="relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={action.imageUrl}
                  alt={action.alt}
                  style={{ height: '300px' }} // You can set a fixed height or adjust as needed
                />
                <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50">
                  <h3 className="text-white text-xl font-bold">{action.label}</h3>
                  <p className="text-white">{action.description}</p> {/* Optional */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionSection;
