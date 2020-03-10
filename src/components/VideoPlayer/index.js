import React from 'react';

import './VideoPlayer.css';

const VideoPlayer = ({ videoSrc, autoPlay }) => {
  return (
    <video key={videoSrc} className="VideoPlayer" controls autoPlay={autoPlay}>
      <source src={videoSrc} type="video/mp4" />
      Sorry, your browser doesn't support this video format.
    </video>
  );
};

export default VideoPlayer;
