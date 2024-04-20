"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';
import Image from 'next/image';

const VideoSection = () => {
  const videoData = [
    {
      id: 'BGp3oTBJVFo', // Use the actual YouTube video ID here
      title: "The New Story", // Title of the video
    },
    {
      id: 'ElasRjYH00c', // Replace with other video IDs
      title: "The New Story II",
    },
    {   
      id: 'fkzCLS-FXc0', // Replace with other video IDs
      title: "The New Story II",
    },
    {
      id: '8Odgf0HKKkQ', // Replace with other video IDs
      title: "The New Story II",
    },
  
    // Add as many objects as you have videos
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
      {/* <h2 className="text-2xl font-bold mb-4">The New Story</h2> */}
      <div className="flex flex-col lg:flex-row">
        {/* Main Video Display */}
        <div className="flex-1">
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${currentVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Video Thumbnails */}
        <div className="flex-1 mt-4 lg:mt-0 lg:ml-4">
          {videoData.map((video) => (
            <motion.div
              key={video.id}
              className={`flex items-center mb-4 cursor-pointer ${currentVideoId === video.id ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg`}
              onClick={() => setCurrentVideoId(video.id)}
              variants={thumbnailVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <img
                className="w-20 h-20 flex-none bg-cover rounded-lg mr-4"
                src={`https://img.youtube.com/vi/${video.id}/oth.jpg`}
                alt={video.title}
              />
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
  