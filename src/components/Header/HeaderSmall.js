import React from 'react'
import classes from './Header.module.css';
import logo from '../Icons/hire_station_logo_wo.svg';
import FavouriteIcon from '../Icons/FavouriteIcon';
import callIcon from '../Icons/Call_Icon.svg';

const HeaderSmall = () => {
  return (
    <div className={classes.root}>
      <div className={classes.banner}>Next Day Delivery Available -  <u>&nbsp;Read More</u></div>
      <div className={classes.toolbar}>
        <img className={classes.logo} src={logo}/>
        <div className={classes.flex}>
          <div className={classes.iconContainer}>
            <FavouriteIcon classNames={[classes.favouriteIcon, classes.favouriteIconInner, classes.favouriteIconOuterPrimary]}/>
          </div>
          <div className={classes.iconContainer}>
            <img src={callIcon}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSmall;