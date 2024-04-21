"use client"
import React, { useState, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const VideoSection = () => {
  const videoIds = ['BGp3oTBJVFo', 'ElasRjYH00c', 'fkzCLS-FXc0', '8Odgf0HKKkQ'];
  const [videos, setVideos] = useState(videoIds.map(id => ({ id, title: 'Loading title...' })));
  const [currentVideoId, setCurrentVideoId] = useState(videoIds[0]);

  useEffect(() => {
    // Simulated fetching of video titles
    setVideos(videos.map((video, index) => ({
      ...video,
      title: `Dynamic Title ${index + 1}`,
    })));
  }, []);

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
        {/* Main Video Display */}
        <div className="w-full md:w-2/3">
          <iframe
            className="w-full"
            style={{ height: '25vw', minHeight: '300px' }}
            src={`https://www.youtube.com/embed/${currentVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Video Thumbnails */}
        <div className="w-full md:w-1/3 space-y-4 pr-4">
          {videos.map(video => (
            <div key={video.id} className="bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer p-2 flex items-center">
              <div className="w-16 h-16 flex-none bg-cover rounded-lg overflow-hidden mr-4">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow">
                <p className="text-sm font-medium">{video.title}</p>
              </div>
              <FaPlayCircle className="text-xl" onClick={() => setCurrentVideoId(video.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;



