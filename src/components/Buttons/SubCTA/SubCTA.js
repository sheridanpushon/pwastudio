import React from 'react';
import classes from './SubCTA.module.css';
import Arrow from '../../Icons/Arrow';

const SubCTA = ({onClick, text}) => {
  return (
    <button onClick={onClick} className={classes.root}>
      <div className={classes.innerContainer}>
        {text}
        <Arrow className={classes.arrowIcon} />
      </div>
    </button>
  )
}

export default SubCTA;