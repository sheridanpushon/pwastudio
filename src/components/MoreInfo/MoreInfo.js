import React from 'react';
import MoreInfoSmall from './MoreInfoSmall';
import MoreInfoLarge from './MoreInfoLarge';
import Media from 'react-media';

const MoreInfo = ({info}) => {
  return (
    <Media queries={{
      small: "(max-width: 1023px)",
      large: "(min-width: 1024px)"
    }}>
      {
        matches=>(
          <>
            {matches.small&&<MoreInfoSmall/>}
            {matches.large&&<MoreInfoLarge/>}
          </>
        )
      }
    </Media>)
}

export default MoreInfo;