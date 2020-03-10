import React from 'react';

import './Poster.css';

const Poster = ({ title, description, imagePath }) => {
  return (
    <div className="Poster">
      <img className="Poster_Image" src={imagePath} alt={title} />
      <span className="Poster_Title">{title}</span>
    </div>
  );
};

export default Poster;
