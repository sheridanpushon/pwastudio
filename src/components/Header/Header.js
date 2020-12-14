import React from 'react';
import Media from 'react-media';
import HeaderSmall from './HeaderSmall';
import HeaderMedium from './HeaderMedium';
import HeaderLarge from './HeaderLarge';

const Header = () => {
  return (
    <Media queries={{
      small: "(max-width: 768px)",
      medium: "(min-width: 769px) and (max-width: 1279px)",
      large: "(min-width: 1279px)",
    }}>
      {
        matches=>(
          <>
            {matches.small&&<HeaderSmall/>}
            {matches.medium&&<HeaderMedium/>}
            {matches.large&&<HeaderLarge/>}
          </>
        )
      }
    </Media>
  )
}

export default Header;