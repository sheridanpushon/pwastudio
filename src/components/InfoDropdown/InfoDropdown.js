import React,{useState} from 'react';
import classes from './InfoDropdown.module.css';

const InfoDropdown = ({title, text}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h3 className={classes.heading}>{title}</h3>
        <div onClick={()=>setOpen(!open)} className={classes.iconContainer}></div>
      </div>
      <div className={open?classes.textOpen:classes.textClosed}>
        {text}
      </div>
    </div>
  )
}

export default InfoDropdown;