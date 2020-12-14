import React from 'react';
import classes from './HeaderButton.module.css';
import Arrow from '../../Icons/Arrow';

const HeaderButton = ({onClick, text, className}) => {
  return (
    <button onClick={onClick} className={`${classes.root} ${classes[className]}`}>
      {text}
      <Arrow className={classes.arrowIcon} />  
    </button>
  )
}

export default HeaderButton;