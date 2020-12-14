import React, {useState} from 'react';
import classes from './BranchFinder.module.css';
import BranchSearch from '../BranchSearch';
import BranchSearchResults from '../BranchSearchResults';
import sampleData from '../../sampleData';
import Media from 'react-media';

const BranchFinder = () => {
  const [locationInput, setLocationInput] = useState('');
  const [location, setLocation] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  
  const search = () => {
    setLocation(locationInput);
    setSearchResults(sampleData);
  }

  return (
    <div className={classes.root}>
      <BranchSearch locationInput={locationInput} setLocationInput={setLocationInput} search={search}/>
      {
        searchResults &&
        <BranchSearchResults location={location} searchResults={searchResults} />
      }
      <Media queries={{
        large: "(min-width: 1024px)"
      }}>
        {
          matches=>(
            <>
              {matches.large&&
              <div className={classes.mapContainer}>
                <iframe
                  width="100%"
                  height="100%"
                  style={{borderRadius: "10px"}}
                  frameborder="0"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAy9yS_arlq4aUcA4HTrzgaKfStnG9XhMY&q=Space+Needle,Seattle+WA" allowfullscreen>
                </iframe>
              </div>}
            </>
          )
        }
      </Media>
    </div>
  )
}

export default BranchFinder;