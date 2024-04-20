"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';


const VideoSection = () => {
  const videoData = [
    {
      id: 'BGp3oTBJVFo',
      title: "The New Story",
    },
    {
      id: 'ElasRjYH00c',
      title: "The New Story II",
    },
    {
      id: 'fkzCLS-FXc0',
      title: "The New Story III",
    },
    {
      id: '8Odgf0HKKkQ',
      title: "The New Story IV",
    },
    // ... Add more videos as needed
  ];
  const [currentVideoId, setCurrentVideoId] = useState(videoData[0].id);

  // Animation variants for video thumbnails
  const thumbnailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Hover animation for the play icon
  const playIconVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.2 },
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row">
        {/* Main Video Display */}
        <div className="flex-1">
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Video Thumbnails */}
        <div className="flex-1 mt-4 lg:mt-0 lg:ml-4">
          {videoData.map((video, index) => (
            <motion.div
              key={video.id}
              className={`flex items-center mb-4 cursor-pointer ${currentVideoId === video.id ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg`}
              onClick={() => setCurrentVideoId(video.id)}
              variants={thumbnailVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 flex-none bg-cover rounded-lg mr-4 relative">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <p className="text-lg font-semibold">{video.title}</p>
              </div>
              <motion.div
                className="flex-shrink-0"
                variants={playIconVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <FaPlayCircle className={`text-2xl ${currentVideoId === video.id ? 'text-yellow-400' : 'text-gray-400'}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
