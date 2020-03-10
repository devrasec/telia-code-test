import React from 'react';
import classnames from 'classnames';

import './PosterDescription.css';

const PosterDescription = ({ children, isVisible, coords }) => {
  const classes = classnames('PosterDescription', {
    'PosterDescription--visible': isVisible,
  });

  return (
    <span className={classes} style={{ left: coords.x, top: coords.y }}>
      {children}
    </span>
  );
};

export default PosterDescription;
