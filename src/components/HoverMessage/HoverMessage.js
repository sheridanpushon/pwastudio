import React from 'react';
import classes from './HoverMessage.module.css';

const HoverMessage = ({children, message}) => {
  return (
    <div className={classes.root}>
      <div className={classes.message}>{message}</div>
      {children}
    </div>
  )
}

export default HoverMessage;