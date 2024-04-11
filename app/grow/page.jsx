import React from 'react';

const growthSections = [
  {
    title: 'TRAVEL THE NEW',
    description: 'Embark on a meaningful journey of belonging and shared purpose with Travel The New, our membership program. This is not just about joining a group; it is about connecting with a community that values you. Travel The New is an exploration of faith, service, and camaraderie. We invite you to walk this path with us, deepening your understanding of our church family and finding your place within it. Join Travel The New and let us make this journey together, embracing the warmth of fellowship and the richness of shared experiences.',
    imgSrc: '/oth.jpg',
    cta: 'Join Travel the New',
    link: '#'
  },
  {
    title: 'SOLDIERS',
    description: 'Discover a deeper connection to our church community through Soldiers, a thoughtful workers training program. This opportunity is an invitation to grow in service, understand our mission more profoundly, and contribute meaningfully. Soldiers is here to equip you for a more engaged and purposeful service. Join us in this shared journey of learning and commitment as we strengthen our community together.',
    imgSrc: '/oth.jpg',
    cta: 'Become a Soldier',
    link: '#'
  },
  {
    title: 'CAPTAINS',
    description: 'Step into your potential and become a true leader in our church community! Join Captains—the transformative leadership training that will empower you to inspire others, navigate challenges, and strengthen our collective journey. Seize this opportunity to make a lasting impact, leading with purpose and passion.',
    imgSrc: '/oth.jpg',
    cta: 'Become a Captain',
    link: '#'
  },
  {
    title: 'QUIVER',
    description: 'The Quiver is a spiritual Boot Camp dedicated to training and equipping the New Generation Minister. Through immersive learning methods and transformative teachings, we aim to fortify men and women alike, who sense the five-fold calling of God upon their lives. Does this sound like you? Let us get you started on that journey.',
    imgSrc: '/oth.jpg',
    cta: 'Learn More',
    link: '#'
  },
  // Add 3 more growth sections following the same pattern
];

const GrowthPage = () => {
  return (
    <div>
      {/* Banner with background image and text overlay */}
      <div className="relative h-64 bg-cover bg-center text-white" style={{ backgroundImage: "url('/growth-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Growth</h1>
        </div>
      </div>

      {/* Growth Sections - Centered with internal padding */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6 md:space-y-10">
          {growthSections.map((section, index) => (
            <a key={index} href={section.link} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-4xl w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={section.imgSrc} alt="" />
              <div className="flex flex-col justify-between p-6 leading-normal w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{section.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">{section.description}</p>
                <span className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {section.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowthPage;
