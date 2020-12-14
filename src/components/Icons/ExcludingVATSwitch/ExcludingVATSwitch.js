import React from 'react';
import classes from './ExcludingVATSwitch.module.css';

const ExcludingVATSwitch = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 50 20">
    <g transform="translate(-313)">
      <g transform="translate(50 20) rotate(180)">
        <g className={classes.a} transform="translate(-313)">
          <rect className={classes.d} width="50" height="20" rx="10"/>
          <rect className={classes.e} x="0.125" y="0.125" width="49.75" height="19.75" rx="9.875"/>
        </g>
        <circle className={classes.b} cx="8" cy="8" r="8" transform="translate(-281 2)"/>
      </g>
    </g>
    <text className={classes.c} transform="translate(17 2)"><tspan x="8.212" y="12">EX</tspan></text>
  </svg>
  )
}

export default ExcludingVATSwitch;