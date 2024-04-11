import React from 'react';

const locations = {
  NG: [
    {
      name: 'The New Ikeja',
      address: 'Grandeur Events Center, 17, Billings Way, Oregun Ikeja',
      services: [{ day: 'Sunday', time: '10:00AM' }, { day: 'Gethsmane', time: '06:30PM' }],
    },
    {
      name: 'The New Ikeja',
      address: 'Grandeur Events Center, 17, Billings Way, Oregun Ikeja',
      services: [{ day: 'Sunday', time: '10:00AM' }, { day: 'Gethsmane', time: '06:30PM' }],
    },
    {
      name: 'The New Ikeja',
      address: 'Grandeur Events Center, 17, Billings Way, Oregun Ikeja',
      services: [{ day: 'Sunday', time: '10:00AM' }, { day: 'Gethsmane', time: '06:30PM' }],
    },
    {
      name: 'The New Ibadan',
      address: 'Bollads Event Center, Akala Expressway, Ibadan, Nigeria',
      services: [{ day: 'Sunday', time: '9:00AM' }],
    },
    // Add more locations here...
  ],
  UK: [
    {
      name: 'The New United Kingdom',
      address: 'Standard house 107-115 Eastmoor St, London SE7 8LX',
      services: [{ day: 'Sunday', time: '2PM GMT+1' }],
    },
    {
      name: 'The New United Kingdom',
      address: 'Standard house 107-115 Eastmoor St, London SE7 8LX',
      services: [{ day: 'Sunday', time: '2PM GMT+1' }],
    },
  ],
  US: [
    {
      name: 'The New Ibadan',
      address: 'Bollads Event Center, Akala Expressway, Ibadan, Nigeria',
      services: [{ day: 'Sunday', time: '9:00AM' }],
    },
  ],
};

const ServiceTime = ({ day, time }) => (
  <div className="flex justify-between items-center bg-white p-2 border rounded-md">
    <p className="font-semibold mb-4">{day}</p>
    <p>{time}</p>
  </div>
);

const LocationCard = ({ name, address, services }) => (
  <div className="max-w-xs p-4 shadow-lg rounded-md">
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600 mb-4">{address}</p>
    {services.map((service, index) => (
      <ServiceTime key={index} day={service.day} time={service.time} />
    ))}
  </div>
);

const CountrySection = ({ country, locations }) => (
  <div>
    <h2 className="text-3xl font-semibold my-8">{country}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {locations.map((location, index) => (
        <LocationCard key={index} {...location} />
      ))}
    </div>
  </div>
);

export default function InstallationsContent() {
  return (
    <div className="p-6">
      {Object.entries(locations).map(([countryCode, locations], countryIndex) => (
        <React.Fragment key={countryCode}>
          <CountrySection country={countryCode} locations={locations} />
          {countryIndex < Object.keys(locations).length - 1 && <hr className="my-8" />}
        </React.Fragment>
      ))}
    </div>  
  );
}
