import React,{useState} from 'react'
import classes from './Header.module.css';
import logo from '../Icons/hire_station_logo_wo.svg';
import HeaderButton from '../Buttons/HeaderButton';
import VATSwitch from '../Buttons/VATSwitch';
import FavouriteIcon from '../Icons/FavouriteIcon';
import LocationPinIcon from '../Icons/LocationPinIcon';
import userIcon from '../Icons/User_Icon.svg';
import BasketButton from '../Buttons/BasketButton';
import HoverMessage from '../HoverMessage';
import menuIcon from '../Icons/Menu.svg';

const HeaderMedium = () => {
  const [vatStatus, setVatStatus] = useState(true);

  const handleVatSwitch = () => {
    setVatStatus(!vatStatus);
  }

  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        Next Day Delivery Available - <u> Read More</u>
      </div>
      <div className={classes.toolbar}>
        <div className={classes.iconContainer}>
          <img src={menuIcon}/>
        </div>
        <img className={classes.logo} src={logo}/>
        <div className={classes.separator}/>
        <div className={classes.orderByPhone}>
          Order By Phone 
          <div>-</div> 
          <span className={classes.secondary}> 0345 604 5337</span>
        </div>
        <div className={classes.separator}/>
        <div className={classes.separator}/>
        <VATSwitch onClick={handleVatSwitch} including={vatStatus}/>
        <div className={classes.separator}/>
        <FavouriteIcon classNames={[classes.favouriteIcon, classes.favouriteIconInner, classes.favouriteIconOuter]}/>
        <HoverMessage message='Branch finder'>
          <LocationPinIcon classNames={[classes.locationPinIcon, classes.locationPinIconOuter, classes.locationPinIconInner]}/>
        </HoverMessage>
        <HoverMessage message='Log In / Register'>
          <img src={userIcon}/>
        </HoverMessage>
      </div>
      <div className={classes.searchbar}>
        <div className={classes.search}>
        </div>
        <BasketButton />
      </div>
    </div>
  )
}

export default HeaderMedium;