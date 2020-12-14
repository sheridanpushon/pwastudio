import React from 'react';
import classes from './ResultCard.module.css';
import LocationLabel from '../LocationLabel';


const ResultCardSmall = ({info, nearestBranch}) => {
  const rootAlt = nearestBranch?classes.rootAlt:'';
  const underline = nearestBranch?classes.underlineAlt:classes.underline;

  return (
    <div className={`${classes.root} ${rootAlt}`}>
      <div className={classes.header}>
        <LocationLabel text={info.distance} style="alt"/>
        {
          nearestBranch &&
          <div className={classes.nearestBranch}>Nearest Branch</div>
        }
      </div>
      <div className={`${underline} ${classes.container}`}>
        <h3 className={classes.heading}>{info.branch}</h3>
        <div className={classes.address}>{info.address}</div>
      </div>
      <div className={`${underline} ${classes.container}`}>
        {
          info.open ?
          <div className={classes.open}>OPEN</div>:
          <div className={classes.closed}>CLOSED</div>
        }
      </div>
      <div className={`${underline} ${classes.container} ${classes.flexLeft}`}>
        <div className={classes.iconContainer}></div>
        {info.phoneNumber}
      </div>
      <div className={`${underline} ${classes.container} ${classes.flexLeft}`}>
        <div className={classes.iconContainer}></div>
        {info.email}
      </div>
      <div className={`${classes.flexLeft} ${classes.container}`}>
        <div className={classes.label}>More info</div>
        <div className={`${classes.label} ${classes.red}`}>Directions</div>
      </div>
    </div>
  )
}

export default ResultCardSmall;