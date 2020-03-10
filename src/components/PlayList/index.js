import React from 'react';
import Poster from '../Poster';

import './PlayList.css';

const PlayList = ({ videos }) => {
  return (
    <div className="PlayList">
      {videos.map(({ id, name, description, image }) => (
        <div className="PlayList_Item">
          <Poster
            key={id}
            title={name}
            description={description}
            imagePath={image}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayList;
