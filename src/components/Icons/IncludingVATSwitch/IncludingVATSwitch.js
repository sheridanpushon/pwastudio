import React from 'react';
import classes from './IncludingVATSwitch.module.css';

const IncludingVATSwitch = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 50 20">
      <g className={classes.a}>
        <rect className={classes.d} width="50" height="20" rx="10"/>
        <rect className={classes.e} x="0.125" y="0.125" width="49.75" height="19.75" rx="9.875"/>
      </g>
      <circle className={classes.b} cx="8" cy="8" r="8" transform="translate(32 2)"/>
      <text className={classes.c} transform="translate(3 2)">
        <tspan x="4.945" y="12">INC</tspan>
      </text>
    </svg>
  )
}

export default IncludingVATSwitch;