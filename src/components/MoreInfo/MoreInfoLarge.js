import React from 'react';
import classes from './MoreInfoLarge.module.css';
import MoreInfoSmall from './MoreInfoSmall';
import InfoDropdown from '../InfoDropdown';


const MoreInfoLarge = ({info}) => {
const text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat mi orci, ut sollicitudin purus pulvinar vitae.
Morbi hendrerit accumsan enim, a sagittis justo pretium nec. 
Quisque vel mauris at arcu fermentum convallis. Nunc malesuada justo vel lectus scelerisque, ut commodo felis luctus.
Cras eu tempus velit, eget pretium mauris. Aenean scelerisque facilisis nisl, a aliquam tortor sollicitudin in. 
Nam luctus in justo hendrerit vulputate. Praesent lacinia pharetra eleifend. Suspendisse potenti.
Morbi at auctor magna. Etiam a lacus ante. Maecenas laoreet lorem cursus nulla sollicitudin, a varius sem ultricies.
Phasellus ut mauris at metus semper varius eget sed purus. Fusce tempor tempor tempus. 
Proin consequat, metus in maximus maximus, urna orci malesuada libero, eget efficitur erat nisl ac turpis. 
Suspendisse dapibus, est pellentesque gravida consectetur, sapien est finibus urna, vel accumsan diam eros id risus. 
Sed tellus neque, dignissim ac posuere rhoncus, euismod et magna. Maecenas eleifend eros sed nunc iaculis, eget feugiat odio sodales. 
Phasellus congue at lectus quis gravida. Mauris vel aliquam odio. Sed ornare at mi a dignissim. 
In mi velit, cursus quis placerat et, dapibus ac ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.
Praesent vel nisi lacus. In iaculis eget nisi eu tempus. Sed lacinia orci eu nibh congue tempus.`
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <MoreInfoSmall />
      </div>
      <div className={classes.main}>
        <div className={`${classes.map} ${classes.container}`}>
          <iframe
            width="100%"
            height="100%"
            style={{borderRadius: "10px"}}
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAy9yS_arlq4aUcA4HTrzgaKfStnG9XhMY&q=Space+Needle,Seattle+WA" allowfullscreen>
          </iframe>
        </div>
        <div className={`${classes.review} ${classes.container}`}/>
        <InfoDropdown title={'Title Here'} text={text} />
        <InfoDropdown title={'Title Here'} text={text} />
        <InfoDropdown title={'Title Here'} text={text} />
        <InfoDropdown title={'Title Here'} text={text} />
      </div>
    </div>
  )
}

export default MoreInfoLarge;