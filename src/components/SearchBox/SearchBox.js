import React from  'react';
import classes from './SearchBox.module.css';
import searchIcon from '../Icons/Search_Icon_Hover.svg';

const SearchBox = ({locationInput, setLocationInput, search}) => {
  return (
    <div className={classes.root}>
      <h4 className={classes.heading}>Branch Finder</h4>
      <div className={classes.searchContainer}>
        <img onClick={search} className={classes.iconContainer} src={searchIcon}/>
        <form className={classes.form} onSubmit={e=>{
          e.preventDefault();
          search();
        }}>
          <input className={classes.search} value={locationInput} onChange={e=>setLocationInput(e.target.value)} placeholder="Enter Postcode, town or What3Words"/>
        </form>
      </div>
    </div>
  )
}

export default SearchBox;