import React from 'react';
import Poster from '../Poster';

import './PlayList.css';

const PlayList = ({ videos, onClickItem }) => {
  return (
    <div className="PlayList">
      {videos.keys.map(videoId => {
        const { name, description, image } = videos.entities[videoId];
        return (
          <div
            onClick={() => onClickItem(videoId)}
            className="PlayList_Item"
            key={videoId}
          >
            <Poster title={name} description={description} imagePath={image} />
          </div>
        );
      })}
    </div>
  );
};

export default PlayList;
