import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PlayList from './components/PlayList';
import VideoPlayer from './components/VideoPlayer';
import normalizeVideosSchema from './lib/normalizeVideosSchema';

import './App.css';

const App = () => {
  const [videos, setVideos] = useState(null);
  const [currentVideoId, setCurrentVideo] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch('https://api.myjson.com/bins/so5pk');
      res
        .json()
        .then(videos => {
          setVideos(normalizeVideosSchema(videos));
          // Set the first video in the list as the currently playing video.
          setCurrentVideo(videos[0].id);
        })
        .catch(err => console.error(err));
    }

    fetchVideos();
  }, []);

  const playVideo = videoId => {
    setCurrentVideo(videoId);
    // Play the selected video automatically.
    setAutoPlay(true);
  };

  if (!videos || !currentVideoId) return null;

  const currentVideo = videos.entities[currentVideoId];

  return (
    <div className="App">
      <Helmet>
        <title>Currently playing "{currentVideo.name}"</title>
        <meta name="description" content={currentVideo.description} />
      </Helmet>
      <div className="App_Content">
        <VideoPlayer autoPlay={autoPlay} videoSrc={currentVideo.video} />
        <PlayList videos={videos} onClickItem={playVideo} />
      </div>
    </div>
  );
};

export default App;
