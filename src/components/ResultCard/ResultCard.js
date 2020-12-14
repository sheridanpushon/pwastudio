import React from 'react';
import ResultCardSmall from './ResultCardSmall';
import ResultCardLarge from './ResultCardLarge';
import Media from 'react-media';

const ResultCard = ({info, nearestBranch}) => {
  return (
    <Media queries={{
      small: "(max-width: 1023px)",
      large: "(min-width: 1024px)"
    }}>
      {
        matches=>(
          <>
            {matches.small&&<ResultCardSmall info={info} nearestBranch={nearestBranch}/>}
            {matches.large&&<ResultCardLarge info={info} nearestBranch={nearestBranch}/>}
          </>
        )
      }
    </Media>
  )
}

export default ResultCard;