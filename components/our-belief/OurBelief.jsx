import React from 'react';

function OutBeliefContent() {
  // Images array with specified paths
  const images = [
    '/about1.png',
    '/about2.png',
    '/about3.png',
    '/about4.png',
    '/about5.png',
    '/about6.png',
  ];

  const title = 'Raising A Supernatural Army';
  const description = [
    'KingsWord International Church, Chicago is committed to raising a people of purpose.',
    'To proclaim Jesus, the Anointed one and present him clearly to the world. We are called to help people build strong relationships with the Lord through the preaching and teaching of the Word.',
    'We emphasize victory is by the Word and the strategy that is in it.',
    'We are ordained to raise up and expose God’s children into the fullness of their God-given purpose.'
  ];

  return (
    <section className="container mx-auto flex flex-wrap items-center justify-center py-12 px-4 lg:px-0">
      <div className="lg:w-1/2 lg:max-w-lg text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <hr className="border-t-4 border-blue-600 w-3/4 mx-auto lg:mx-0 mb-8" />
        {description.map((text, index) => (
          <p key={index} className="mb-4">{text}</p>
        ))}
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          CONTACT US
        </button>
      </div>
      <div className="lg:w-1/2 lg:max-w-lg grid grid-cols-3 gap-4 px-4">
        {images.map((src, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img className="object-cover rounded-lg shadow-lg" src={src} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OutBeliefContent;
