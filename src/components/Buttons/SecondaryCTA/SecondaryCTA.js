import React from 'react';
import classes from './SecondaryCTA.module.css';
import ArrowBracketsSemi from '../../Icons/ArrowBracketsSemi';

const SecondaryCTA = ({onClick, text}) => {
  return (
    <button className={classes.root} onClick={onClick}>
      <span className={classes.text}>{text}</span>
      <ArrowBracketsSemi classNameA={classes.arrowBracketsIcon} classNameB={classes.arrowBracketsIconInner} />
    </button>
  )
}

export default SecondaryCTA;