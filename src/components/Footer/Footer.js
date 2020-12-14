import React from 'react';
import Media from 'react-media';
import FooterSmall from './FooterSmall';
import FooterLarge from './FooterLarge';

const Footer = () => {
  return (
    <Media queries={{
      small: "(max-width: 1023px)",
      large: "(min-width: 1024px)"
    }}>
      {
        matches=>(
          <>
            {matches.small&&<FooterSmall/>}
            {matches.large&&<FooterLarge/>}
          </>
        )
      }
    </Media>
  )
}

export default Footer;