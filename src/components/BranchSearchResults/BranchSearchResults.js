import React from 'react';
import classes from './BranchSearchResults.module.css';
import PageNavigation from '../PageNavigation';
import ResultCard from '../ResultCard';

const BranchSearchResults = ({location, searchResults}) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2 className={classes.location}>{`Tool Hire Shops within 50 miles of "${location}"`}</h2>
        <div className={classes.flexLeft}>
          <div className={classes.checkbox}>
            <input type="checkbox"/>
            <label className={classes.label}>Lifting Specialists</label>
          </div>
          <div className={`${classes.marginLeft} ${classes.checkbox}`}>
            <input type="checkbox"/>
            <label className={classes.label}>Toilet Specialists</label>
          </div>
        </div>
      </div>
      <div className={classes.results}>
        {
          searchResults &&
          searchResults.map((result, index)=>{
            if(index===0) {
              return <ResultCard info={result} nearestBranch={true}/>
            } else {
              return <ResultCard info={result}/>
            }
          })
        }
      </div>
      <PageNavigation itemCount={searchResults.length} />
    </div>
  )
}

export default BranchSearchResults;