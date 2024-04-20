import React from 'react';

const locations = {
  CA: [
    {
      name: 'KingsWord Calgary',
      address: '5811 46th Street SE, Calgary, AB',
      services: [{ day: 'Sunday Service', time: '9:30AM' }],
    },
    {
      name: 'KingsWord Toronto',
      address: '380 Albion Road Etobicoke, Toronto, ON',
      services: [{ day: 'Sunday Service', time: '9:00AM' }],
    },
    {
      name: 'KingsWord Vancouver',
      address: 'Room 402, Surrey City Centre Library, Surrey, BC',
      services: [{ day: 'Sunday Service', time: '11:00AM' }],
    },
    // Add more locations here if necessary...
  ],
  // ...other countries
};

const ServiceTime = ({ day, time }) => (
  <div className="flex justify-between items-center p-2 border-t">
    <p className="font-semibold">{day}</p>
    <p>{time}</p>
  </div>
);

const LocationCard = ({ name, address, services }) => (
  <div className="h-36 bg-white p-4 shadow-lg rounded-lg">
    <h3 className="text-2xl font-bold mb-3">{name}</h3>
    <p className="text-gray-600 mb-4">{address}</p>
    {services.map((service, index) => (
      <ServiceTime key={index} day={service.day} time={service.time} />
    ))}
  </div>
);

const LocationsContent = () => (
  <div className="p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.CA.map((location, index) => (
        <LocationCard key={index} {...location} />
      ))}
    </div>
  </div>  
);

export default LocationsContent;
