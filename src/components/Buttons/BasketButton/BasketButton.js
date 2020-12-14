import React from 'react';
import classes from './BasketButton.module.css';
import BasketIcon from '../../Icons/BasketIcon';

const BasketButton = ({onClick, basketQuantity}) => {
  const active = basketQuantity>0;
  return (
    <button onClick={onClick} className={`${classes.root} ${active&&classes.rootActive}`}>
      <div className={classes.iconContainer}>
        <BasketIcon outer={`${classes.basketIcon} ${active&&classes.basketIconActive}`} inner={active?classes.innerActive:classes.inner} active={active}/>
        {
          active?
          <span className={classes.basketQuantity}>{
            basketQuantity>99?
            '+99':
            basketQuantity
          }</span>:
          <div className={classes.whiteDiv}/>
        }
      </div>
    </button>
  )
}

export default BasketButton;