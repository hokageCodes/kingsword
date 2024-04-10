import Image from 'next/image';
import React from 'react';

const EventsSection = () => {
  const events = [
    { title: 'INA', subtitle: 'Worship Meetings', imageUrl: '/event4.jpg' },
    { title: 'Butterflies', subtitle: 'Love Series', imageUrl: '/event1.jpg' },
    { title: 'The Legislation', subtitle: 'Next Conference 2023', imageUrl: '/event2.jpg' },
    { title: 'Saba', subtitle: 'Feast', imageUrl: '/event3.jpg' },
  ];

  return (
    <div className="bg-yellow-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 sm:mb-0 text-center sm:text-left">
            Catch up our past monthly and annual events
          </h2>
          <button className="bg-black text-white py-2 px-6 sm:px-8 text-sm sm:text-base rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            View all events
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full object-cover h-[300px]"
                src={event.imageUrl}
                alt={`Event ${event.title}`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{event.title}</div>
                <p className="text-gray-700 text-base">{event.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
