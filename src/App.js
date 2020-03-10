import React, { useState, useEffect } from 'react';
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
          setCurrentVideo(videos[0].id);
        })
        .catch(err => console.error(err));
    }

    fetchVideos();
  }, []);

  const playVideo = videoId => {
    setCurrentVideo(videoId);
    setAutoPlay(true);
  };

  if (!videos || !currentVideoId) return null;

  return (
    <div className="App">
      <div className="App_Content">
        <VideoPlayer
          autoPlay={autoPlay}
          videoSrc={videos.entities[currentVideoId].video}
        />
        <PlayList videos={videos} onClickItem={playVideo} />
      </div>
    </div>
  );
};

export default App;
