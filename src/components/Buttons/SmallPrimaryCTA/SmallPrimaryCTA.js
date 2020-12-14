import React from 'react';
import classes from './SmallPrimaryCTA.module.css';

const SmallPrimaryCTA = ({onClick, text, className}) => {
  return (
    <button className={`${classes.root} ${classes[className]}`} onClick={onClick}>{text}</button>
  )
}

export default SmallPrimaryCTA;