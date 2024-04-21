"use client"
import React, { useEffect } from 'react';
import { Card } from 'flowbite-react';
  
const leaders = [
  {
    name: 'Pastor Olushola Okodugha',
    title: 'Global Senior Pastor',
    imageUrl: '/hero1.jpg',
  },
  {
    name: 'Pastor Tope Okodugha',
    title: 'Global Senior Pastor',
    imageUrl: '/hero2.jpg',
  },
  {
    name: 'Pastor Tope Okodugha',
    title: 'Global Senior Pastor',
    imageUrl: '/hero2.jpg',
  },
  {
    name: 'Pastor Tope Okodugha',
    title: 'Global Senior Pastor',
    imageUrl: '/hero2.jpg',
  },
];

const residentPastors = [
  {
    name: 'Pastor Name 1',
    title: 'Resident Pastor',
    imageUrl: '/hero1.jpg',
  },
  {
    name: 'Pastor Name 2',
    title: 'Resident Pastor',
    imageUrl: '/hero2.jpg',
  },
  {
    name: 'Pastor Name 3',
    title: 'Resident Pastor',
    imageUrl: '/hero1.jpg',
  },
  {
    name: 'Pastor Name 4',
    title: 'Resident Pastor',
    imageUrl: '/hero2.jpg',
  },
];

const FoundersAndLeadershipSection = () => {

  return (
    <>
      {/* Founders Section */}
      <section className="text-gray-800 py-12 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <img
                src="/hero1.jpg"
                alt="Founders"
                className="rounded-lg shadow-lg mb-8 lg:mb-0"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-semibold mb-4">Meet our founders</h2>
              <p className="text-lg max-w-lg">
                Dr. Kay and Pastor May Ijisesan provide apostolic oversight over KingsWord Ministries
                International.
              </p>
            </div>
          </div>
      </section>
      
      {/* Leadership Section */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-left mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                imgAlt={leader.name}
                imgSrc={leader.imageUrl}
                className="max-w-sm mx-auto"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {leader.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {leader.title}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Resident Section */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-left mb-12">Resident Pastors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {residentPastors.map((pastor, index) => (
              <Card key={index} imgAlt={pastor.name} className="max-w-sm mx-auto">
                <img src={pastor.imageUrl} alt={pastor.name} />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {pastor.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {pastor.title}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundersAndLeadershipSection;
