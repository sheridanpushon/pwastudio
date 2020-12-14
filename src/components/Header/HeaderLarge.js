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
import BracketLeft from '../Icons/BracketLeft';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const HeaderLarge = () => {
  const [vatStatus, setVatStatus] = useState(true);

  const handleVatSwitch = () => {
    setVatStatus(!vatStatus);
  }

  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        Next Day Delivery Available - <u>&nbsp;Read More</u>
      </div>
      <div className={classes.toolbar}>
        <img className={classes.logo} src={logo}/>
        <HeaderButton text='Tool Hire' className='alt'/>
        <HeaderButton text='Purchase'/>
        <div className={classes.separator}/>
        <span className={classes.orderByPhone}>
          Order By Phone - 
          <span className={classes.secondary}> 0345 604 5337</span>
        </span>
        <div className={classes.separator}/>
        <div>TrustPilot</div>
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

export default HeaderLarge;