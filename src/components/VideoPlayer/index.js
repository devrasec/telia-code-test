import React from 'react';

import './VideoPlayer.css';

const VideoPlayer = ({ videoSrc, autoPlay }) => {
  // To correctly update the video playing we have to add the key prop to the video tag.
  // The video tag doesn't know if the source is updated, so we are forcing React
  // to update the DOM element when the video source is updated.
  return (
    <video key={videoSrc} className="VideoPlayer" controls autoPlay={autoPlay}>
      <source src={videoSrc} type="video/mp4" />
      Sorry, your browser doesn't support this video format.
    </video>
  );
};

export default VideoPlayer;
