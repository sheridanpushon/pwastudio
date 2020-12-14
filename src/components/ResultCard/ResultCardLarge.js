import React from 'react';
import classes from './ResultCard.module.css';
import LocationLabel from '../LocationLabel';
import callIcon from '../Icons/Call_Icon.svg';
import arrowRightIcon from '../Icons/Arrow_Right.svg';


const ResultCardLarge = ({info, nearestBranch}) => {
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
        <div className={classes.flexLeft}>
          <div className={classes.iconContainer}> 
            <img className={classes.callIcon} src={callIcon}/>
          </div>
          <div className={classes.number}>{info.phoneNumber}</div>
          <div className={classes.iconContainer}> 
            <img className={classes.callIcon} src={callIcon}/>
          </div>
          <div className={classes.email}>{info.email}</div>
        </div>
      </div>
      <div className={`${classes.flexBetween} ${classes.container}`}>
        {
          info.open ?
          <div className={classes.open}>OPEN</div>:
          <div className={classes.closed}>CLOSED</div>
        }
        <div className={classes.flexLeft}>
          <div className={classes.label}>More info</div>
          <div className={`${classes.label} ${classes.red}`}>
            Directions
            <img className={classes.arrowRightIcon} src={arrowRightIcon}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultCardLarge