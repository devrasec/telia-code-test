import React, { useState, useEffect } from 'react';
import PlayList from './components/PlayList';
import VideoPlayer from './components/VideoPlayer';

import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch('https://api.myjson.com/bins/so5pk');
      res
        .json()
        .then(videos => setVideos(videos))
        .catch(err => console.error(err));
    }

    fetchVideos();
  }, []);

  return (
    <div className="App">
      <div className="App_Content">
        <PlayList videos={videos} />
      </div>
    </div>
  );
};

export default App;
