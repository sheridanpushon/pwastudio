import React from 'react';
import classes from './SmallCTA.module.css';

const SmallCTA = ({onClick, text, className}) => {
  return (
    <button onClick={onClick} className={`${classes.root} ${classes[className]}`}>{text}</button>
  )
}

export default SmallCTA;