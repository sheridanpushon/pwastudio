import React from 'react';
import classes from './FooterSmall.module.css';
import logo from '../Icons/hire_station_logo_wo.svg';
import facebookLogo from '../Icons/FaceBook.svg';
import twitterLogo from '../Icons/Twitter.svg';
import instagramLogo from '../Icons/instagram.svg';
import youtubeLogo from '../Icons/Youtube.svg';
import linkedinLogo from '../Icons/LinkedIn.svg';
import DropDown from '../Dropdown';

const FooterSmall = () => {
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <img src={logo}/>
      </div>
      <div className={classes.menu}>
        <DropDown text='Branch Opening Times'>
          <div>
            content
          </div>
        </DropDown>
        <div className={classes.separator}/>
        <DropDown text='Awards and Accreditations'></DropDown>
        <div className={classes.separator}/>
        <DropDown text='Useful Information'></DropDown>
        <div className={classes.separator}/>
        <DropDown text='Help and Support'></DropDown>
        <div className={classes.separator}/>
        <DropDown text='Guides and Offers'></DropDown>
        <div className={classes.separator}/>
        <DropDown text='Accounts'></DropDown>
        <div className={classes.separator}/>
        <DropDown text='Business'></DropDown>
        <div className={classes.separator}/>
        <DropDown text='Divisions'></DropDown>
      </div>
      <div className={classes.foot}>
        <div className={classes.container}>
          <img src={facebookLogo}/>
          <div className={classes.separator}/>
          <img src={twitterLogo}/>
          <div className={classes.separator}/>
          <img src={linkedinLogo}/>
          <div className={classes.separator}/>
          <img src={instagramLogo}/>
          <div className={classes.separator}/>
          <img src={youtubeLogo}/>
        </div>
        <div className={classes.container}>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <div className={classes.container}>
          <div>Brandon Hire Station Copyright 2021 ©</div>
          <div>Built by PushON</div>
        </div>
      </div>
    </div>
  )
}

export default FooterSmall;