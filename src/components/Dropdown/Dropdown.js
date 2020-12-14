import React,{useState} from 'react';
import classes from './Dropdown.module.css';
import ChevronIcon from '../Icons/ChevronIcon';
import chevron from '../Icons/Down_Chevron_Icon.svg';

const Dropdown = ({text, children}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={classes.root}>
        <h3 className={open&&classes.headerOpen}>{text}</h3>
        <button className={open?classes.chevronOpen:classes.chevron} onClick={()=>setOpen(!open)}>
          <ChevronIcon/>
        </button>
      </div>
      <div className={open?classes.childrenOpen:classes.children}>
        {children}
      </div>
    </>
  )
}

export default Dropdown;