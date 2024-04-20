"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const EventsSection = () => {
  const events = [
    { title: 'Supernatural Canada', subtitle: 'Annual Worship Meeting', imageUrl: '/Supernatural.png' },
    { title: 'Limitless', subtitle: 'Worship Meeting', imageUrl: '/Limitless.png' },
    { title: 'Easter Sunday', subtitle: 'Easter Service', imageUrl: '/Easter-Sunday-Service.png' },
    { title: 'Mr. & Mrs', subtitle: 'Love Series', imageUrl: '/mr-mrs.png' },
    { title: 'His & Hers', subtitle: 'Love Series', imageUrl: '/his-hers.png' },
    { title: 'Carol Service', subtitle: 'Christmas Carol Service', imageUrl: '/Carol-Service.png' },
    { title: 'Cross Over Service', subtitle: 'New Years Eve', imageUrl: '/Cross-Over-service.png' },
  ];

  return (
    <div className="bg-yellow-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 sm:mb-0 text-center sm:text-left">
            Catch up our past monthly and annual events
          </h2>
          <button className="bg-black text-white py-2 px-6 sm:px-8 text-sm sm:text-base rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a href="https://youtube.com/kingswordcalgary8172?si=AqiMNKeBUnIy-DtJ">View all events</a>
          </button>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="rounded overflow-hidden shadow-lg bg-white">
                <Image
                  src={event.imageUrl}
                  alt={`Event ${event.title}`}
                  layout="responsive"
                  width={500}
                  height={380}
                  objectFit="cover"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{event.title}</div>
                  <p className="text-gray-700 text-base">{event.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventsSection;
