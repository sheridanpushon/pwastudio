import React from 'react';
import classes from './TertiaryCTA.module.css';
import ArrowBracketsSemi from '../../Icons/ArrowBracketsSemi';

const TertiaryCTA = ({onClick, text}) => {
  return (
    <button className={classes.root} onClick={onClick}>
      <span className={classes.text}>{text}</span>
      <ArrowBracketsSemi classNameA={classes.arrowBracketsIcon} />
    </button>
  )
}

export default TertiaryCTA;