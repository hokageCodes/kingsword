import React from 'react'
import ComingSoon from '../../components/coming-soon/ComingSoon'
export default function page() {
  return (
    <div>
      <ComingSoon />
    </div>
  )
}








// import React from 'react'

// const ConnectPage = () => {
//     const cards = [
//         {
//           imgSrc: '/otha.jpg',
//           title: 'Networks',
//           description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//           link: '#',
//         },
//         {
//           imgSrc: '/otha.jpg',
//           title: 'Kids Community',
//           description: 'Artificial Intelligence is rapidly transforming industries. Find out what trends are on the rise in 2021.',
//           link: '#',
//         },
//         {
//           imgSrc: '/otha.jpg',
//           title: 'Service Teams',
//           description: 'Explore how technology companies are incorporating sustainability practices into their business models.',
//           link: '#',
//         },
//         {
//           imgSrc: '/otha.jpg',
//           title: 'Partnership',
//           description: 'Discover how blockchain technology is being applied beyond just the world of finance.',
//           link: '#',
//         },
//         {
//           imgSrc: '/otha.jpg',
//           title: 'Grow',
//           description: 'With the world adapting to the new normal, find out what the future holds for remote work.',
//           link: '#',
//         },
//         {
//           imgSrc: '/otha.jpg',
//           title: 'Family Life',
//           description: 'The healthcare sector is evolving with tech. Read more about the latest advancements.',
//           link: '#',
//         },
//         {
//           imgSrc: '/otha.jpg',
//           title: 'Tribe',
//           description: 'Cybersecurity challenges are growing. Learn about strategies to protect digital assets in the new decade.',
//           link: '#',
//         },
//         {
//           imgSrc: '/otha.jpg',
//           title: 'Operations',
//           description: 'Educational Technology is booming. Find out how it’s shaping the way we learn.',
//           link: '#',
//         },
//       ];
//     return (
//       <div>
//         {/* Banner with background image and text overlay */}
//         <div className="relative h-64 bg-cover bg-center text-white" style={{ backgroundImage: "url('/banner-bg.jpg')" }}>
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-4xl font-bold">Connect With Us</h1>
//           </div>
//         </div>
  
//         {/* Cards Section */}
//         <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {cards.map((card, index) => (
//             <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//               <a href={card.link}>
//                 <img className="rounded-t-lg" src={card.imgSrc} alt="" />
//               </a>
//               <div className="p-5">
//                 <a href={card.link}>
//                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
//                 </a>
//                 {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p> */}
//                 <a href={card.link} className="inline-flex items-center px-6 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                   Join Now
//                   {/* SVG arrow icon */}
//                   <svg className="ml-2 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default ConnectPage;
  