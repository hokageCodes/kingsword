import Image from 'next/image';
import React from 'react';

const ActionSection = () => {
  const actions = [
    {
      label: 'VOLUNTEER',
      imageUrl: '/connect1.png', // Ensure correct image path
      alt: 'Volunteer'
    },
    {
      label: 'GIVE',
      imageUrl: '/connect2.png', // Ensure correct image path
      alt: 'Give'
    },
    {
      label: 'CONNECT',
      imageUrl: '/other1.jpg', // Ensure correct image path
      alt: 'Connect'
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
        <div className="flex flex-wrap justify-center items-stretch gap-4">
          {actions.map((action, index) => (
            <div key={index} className="relative flex-1 min-w-96" style={{ maxWidth: "400px", position: "relative", height: "300px" }}>
              <Image
                src={action.imageUrl}
                alt={action.alt}
                layout="fill" // This will make the image fill the container
                objectFit="cover" // Ensures the image covers the div correctly
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, 33vw" // Sizes for responsive images
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
                <h3 className="text-white text-2xl lg:text-3xl font-bold text-center">{action.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionSection;
