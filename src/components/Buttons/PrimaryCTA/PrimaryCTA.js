import React from 'react';
import classes from './PrimaryCTA.module.css';
import ArrowBrackets from '../../Icons/ArrowBrackets';

const PrimaryCTA = ({onClick, text, className}) => {
  return (
    <button className={`${classes.root} ${classes[className]}`} onClick={onClick}>
      <span className={classes.text}>{text}</span>
      <ArrowBrackets className={classes.arrowBracketsIcon} />
    </button>
  )
}

export default PrimaryCTA;