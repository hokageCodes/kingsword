import React from 'react';

const YouTubeShortsEmbed = ({ videoId }) => {
  // YouTube Shorts URL structure is the same as regular videos, but the content is different.
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      width="560"
      height="315"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default function YouTube() {
  const shortsVideoId = 'YOUR_SHORTS_VIDEO_ID'; // Replace with your Shorts video ID

  return (
    <div>
      <h2>YouTube Shorts</h2>
      <YouTubeShortsEmbed videoId={shortsVideoId} />
    </div>
  );
}
