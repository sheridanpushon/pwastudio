import React from 'react';
import classes from './BranchSearch.module.css';
import SearchBox from '../SearchBox';
import LocationLabel from '../LocationLabel';
import PrimaryCTA from '../Buttons/PrimaryCTA';
import Media from 'react-media';

const BranchSearch = ({locationInput, setLocationInput, search}) => {
  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>Tool Hire Shops</h3>
      <SearchBox locationInput={locationInput} setLocationInput={setLocationInput} search={search}/>
      <LocationLabel text={'Use my location'}/>
      <Media queries={{
        small: "(max-width: 1023px)",
      }}>
        {
          matches=>(
            <>
              {matches.small&&
                <div className={classes.CTAContainer}>
                  <PrimaryCTA onClick={search} text={'Search'} className={'alt'}/>
                </div>
              }
            </>
          )
        }
      </Media>
    </div>
  )
}

export default BranchSearch;