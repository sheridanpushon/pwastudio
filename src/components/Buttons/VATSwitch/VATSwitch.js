import React from 'react';
import classes from './VATSwitch.module.css';
import IncludingVATSwitch from '../../Icons/IncludingVATSwitch';
import ExcludingVATSwitch from '../../Icons/ExcludingVATSwitch';

const VATSwitch = ({onClick, including}) => {
  return (
    <div className={classes.root}>
      <span className={classes.vat}>VAT</span>
      <button onClick={onClick} className={classes.button}>
        {
          including ?
          <IncludingVATSwitch/>:
          <ExcludingVATSwitch/>
        }
      </button>
    </div>
  )
}

export default VATSwitch;