import React, { useState } from 'react';
import PosterDescription from './PosterDescription';

import './Poster.css';

const Poster = ({ title, description, imagePath }) => {
  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });
  const [showDescription, setShowDescription] = useState(false);

  const _onMouseMove = e => {
    setCursorCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div className="Poster">
      <img
        onMouseMove={_onMouseMove}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        className="Poster_Image"
        src={imagePath}
        alt={title}
      />
      <span className="Poster_Title">{title}</span>
      <PosterDescription isVisible={showDescription} coords={cursorCoords}>
        {description}
      </PosterDescription>
    </div>
  );
};

export default Poster;
