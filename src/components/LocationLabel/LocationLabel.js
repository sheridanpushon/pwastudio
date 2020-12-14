import React from 'react';
import classes from './LocationLabel.module.css';
import LocationPinIcon from '../Icons/LocationPinIcon';

const LocationLabel = ({text, style}) => {
  return (
    <button className={`${classes.root} ${style==="alt"&&classes.rootAlt}`}>
      <div >
        <div className={`${classes.iconContainer} ${style==="alt"&&classes.iconContainerAlt}`}>
          <LocationPinIcon />
        </div>
      </div>
      {text}
    </button>
  )
}

export default LocationLabel;