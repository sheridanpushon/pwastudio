import React from 'react';
import classes from './SmallArrowCTA.module.css';
import Arrow from '../../Icons/Arrow';

const SmallArrowCTA = ({onClick, text}) => {
  return (
    <button onClick={onClick} className={classes.root}>
      {text}
      <Arrow className={classes.arrowIcon}/>
    </button>
  )
}

export default SmallArrowCTA;