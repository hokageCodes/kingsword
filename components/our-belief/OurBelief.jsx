import React from 'react';
import TimelineSection from '../../components/timeline/TimelineSection'
import CoreValuesSection from '../../components/core-values/CoreValuesSection';

function OutBeliefContent() {
  return (
    <>
      <section className="container mx-auto flex flex-wrap gap-24 items-center justify-center py-12 px-4 lg:px-0" data-aos="fade-up">
        <div className="flex-1 max-w-md text-center lg:text-left mb-8 lg:mb-0" data-aos="zoom-in">
          <h2 className="text-5xl max-w-xs font-bold mb-4">Raising A Supernatural Army</h2>
          <hr className="border-t-4 border-[#c27803] w-full lg:w-2/4 mb-8" />
          <p className="mb-8 text-xl">KingsWord International Church, Chicago is committed to raising a people of purpose.</p>
          <p className="mb-8 text-xl">To proclaim Jesus, the Anointed one and present him clearly to the world.</p>
          <p className="mb-8 text-xl">We emphasize victory is by the Word and the strategy that is in it.</p>
          <p className="mb-8 text-xl">We are ordained to raise up and expose God’s children into the fullness of their God-given purpose.</p>
          <button className="bg-white text-[#c27803] font-bold border border-[#c27803] border-2 py-4 px-4 rounded">
            CONTACT US
          </button>
        </div>
        <div className="flex-1 max-w-xl grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-left">
          {['/about1.png', '/about2.png', '/about3.png', '/about4.png', '/about5.png', '/about6.png'].map((src, index) => (
            <div key={index} className="mb-4" data-aos="zoom-out">
              <img className="object-cover rounded-lg shadow-lg w-full h-48 md:h-64" src={src} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </section>
      <TimelineSection />
      <CoreValuesSection />
    </>
  );
}

export default OutBeliefContent;
