import React from 'react';
import classes from './MoreInfoSmall.module.css';

const MoreInfoSmall = ({info}) => {
  info = {
    branch: "MANCHESTER (101)",
    locations: [
      'Location name',
      'Location name',
      'Location name'
    ],
    address: "Unit 8, Warren Road, Manchester, M17 1QR",
    distance: "0.6 Miles",
    open: true,
    weekOpeningTime: "07:00",
    weekClosingTime: "17:00",
    weekendOpeningTime: "08:00",
    weekendClosingTime: "12:00",
    openingTimeInfo: `We are closed every Sunday, Bank Holiday & 
    from December 24th (Christmas Eve) until the first working day in January`,
    phoneNumber: "0161 877 1234",
    email: "email.co.uk",
    orderAndCollectInfo: `Our order and collect service is available on all orders
    placed online, on the phone or in the local branch. However, you may not get
    the same special offers and prices as advertised on this site.
    Our branch staff will show you how to use the machine in the branch. If you 
    are collecting from us on behalf of someone else, please be aware we cannot 
    be held responsible for any operating errors or faults.`
  }

  return (
    <div className={classes.root}>
      <div className={`${classes.container} ${classes.underline}`}>
        <h2 className={classes.heading}>{info.branch}</h2>
        <div className={`${classes.textDark} ${classes.marginBottom}`}>
          Supplying tool and equipment hire for
          <span className={classes.red}> {info.locations[0]}</span>,
          <span className={classes.red}> {info.locations[1]}</span>,
          <span className={classes.red}> {info.locations[2]} </span>
          and surrounded areas.
        </div>
      </div>
      <div className={`${classes.container} ${classes.underline}`}>
        <h3 className={classes.heading}>Location</h3>
        <div className={`${classes.marginBottom} ${classes.textLight}`}>{info.address}</div>
        <div className={`${classes.label} ${classes.red}`}>Directions</div>
      </div>
      <div className={`${classes.container} ${classes.underline}`}>
        {
          info.open ?
          <div className={classes.open}>OPEN</div>:
          <div className={classes.closed}>CLOSED</div>
        }
      </div>
      <div className={`${classes.underline} ${classes.container} ${classes.flexLeft}`}>
        <div className={classes.iconContainer}></div>
        {info.phoneNumber}
      </div>
      <div className={`${classes.underline} ${classes.container} ${classes.flexLeft}`}>
        <div className={classes.iconContainer}></div>
        {info.email}
      </div>
      <div className={`${classes.underline} ${classes.container}`}>
        <h3 className={`${classes.marginBottom} ${classes.heading}`}>Opening Hours</h3>
        <div className={classes.flexBetween}>
          <div className={`${classes.marginBottom} ${classes.textDark}`}>Mon - Friday</div>
          <div className={`${classes.marginBottom} ${classes.textDark}`}>{info.weekOpeningTime} - {info.weekClosingTime}</div>
        </div>
        <div className={classes.flexBetween}>
          <div className={`${classes.marginBottom} ${classes.textDark}`}>Saturday</div>
          <div className={`${classes.marginBottom} ${classes.textDark}`}>{info.weekendOpeningTime} - {info.weekendClosingTime}</div>
        </div>
        <div className={`${classes.marginBottom} ${classes.textLight}`}>
          {info.openingTimeInfo}
        </div>
      </div>
      <div className={`${classes.underline} ${classes.container} ${classes.flexLeft}`}>
        <h3 className={classes.heading}>Tool Shop Services</h3>
        
      </div>
      <div className={`${classes.underline} ${classes.container} ${classes.flexLeft}`}>
        <h3 className={classes.heading}>Location</h3>
      </div>
      <div className={`${classes.container}`}>
        <h3 className={classes.heading}>Order and Collect</h3>
        <div className={classes.textDark}>{info.orderAndCollectInfo}</div>
      </div>
    </div>
  )
}

export default MoreInfoSmall;