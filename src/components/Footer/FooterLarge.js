import React from 'react';
import classes from './FooterLarge.module.css';
import logo from '../Icons/hire_station_logo_wo.svg';
import facebookLogo from '../Icons/FaceBook.svg';
import twitterLogo from '../Icons/Twitter.svg';
import instagramLogo from '../Icons/instagram.svg';
import youtubeLogo from '../Icons/Youtube.svg';
import linkedinLogo from '../Icons/LinkedIn.svg';
import logo1 from '../Icons/logo1.png';
import logo2 from '../Icons/logo2.png';
import logo3 from '../Icons/logo3.png';
import logo4 from '../Icons/logo4.png';
import logo5 from '../Icons/logo5.png';

const FooterLarge = () => {
  return (
    <div className={classes.root}>
      <div className={classes.topSection}>
        <div className={classes.container}>
          <img className={classes.logo} src={logo}/>
        </div>
        <div className={classes.container}>
          <b>Awards and Accreditations</b>
          <div>
            <img src={logo1}/>
            <img src={logo2}/>
            <img src={logo3}/>
            <img src={logo4}/>
            <img src={logo5}/>
          </div>
        </div>
        <div className={classes.container}>
          <b>Branch Opening Times</b>
          <div>
            <p>Monday to Friday: <span>7am - 5pm</span></p>
            <p>Saturday: <span>8am - 12 noon</span></p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
      <div className={classes.middleSection}>
        <div className={classes.container}>
          <h4>Useful Information</h4>
          <p>Branch Opening Times</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Near Me</p>
          <p>Order and Collect</p>
          <p>Payment Methods</p>
          <p>Product Catalogue</p>
        </div>
        <div className={classes.container}>
          <h4>Help and Support</h4>
          <p>Order Catalogue</p>
          <p>FAQs</p>
          <p>How to Order Online</p>
          <p>Delivery Information</p>
          <p>Delivery Tracking</p>
          <p>Health and Safety</p>
          <p>Services</p>
        </div>
        <div className={classes.container}>
          <h4>Guides and Offers</h4>
          <p>How to Guides</p>
          <p>Reference Material</p>
          <p>Special Offers</p>
          <p>News</p>
          <p>Site Map</p>
        </div>
        <div className={classes.container}>
          <h4>Accounts</h4>
          <p>Customer Login</p>
          <p>Extranet Login</p>
          <p>Open Trade Account</p>
          <p>Trade Account Enquiry</p>
          <p>My Account</p>
          <p>Order History</p>
        </div>
        <div className={classes.container}>
          <h4>Business</h4>
          <p>Key Messages</p>
          <p>Services</p>
          <p>Accreditations</p>
          <p>Awards</p>
          <p>Careers</p>
          <p>Modern Slavery Act</p>
        </div>
        <div className={classes.container}>
          <h4>Divisions</h4>
          <p>Forestry Tool Hire</p>
          <p>Rail Equipment Hire</p>
          <p>Innovation</p>
          <p>DIY Hire Tools</p>
          <p>Crane Hire</p>
        </div>
      </div>
      <div className={classes.bottomSection}>
        <div className={classes.container}>
          <img src={facebookLogo}/>
          <img src={twitterLogo}/>
          <img src={linkedinLogo}/>
          <img src={instagramLogo}/>
          <img src={youtubeLogo}/>
        </div>
        <div className={classes.container}>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Brandon Hire Station Copyright 2021 ©</p>
        </div>
        <div className={classes.container}>
          <span>Built by PushOn</span>
        </div>
      </div>
    </div>
  )
}

export default FooterLarge;