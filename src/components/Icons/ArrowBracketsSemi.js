import React from 'react';

const ArrowBrackets = ({classNameA, classNameB}) => {
  return (
    <svg className={classNameA} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.63 33.5">
      <path d="M-105.583,52.011a.769.769,0,0,0-.117-1.176,18.712,18.712,0,0,1-7.988-15.327A18.712,18.712,0,0,1-105.7,20.18.769.769,0,0,0-105.583,19l-.02-.02a.767.767,0,0,0-.978-.093,20.272,20.272,0,0,0-8.668,16.616,20.272,20.272,0,0,0,8.668,16.616.766.766,0,0,0,.977-.093Z" transform="translate(115.248 -18.758)"/>
      <g transform="translate(25.635 11.236) rotate(90)">
        <path className={classNameB} d="M5.5,0,4.813.6,0,4.781,1.373,6.357l3.08-2.681v8.593H6.546V3.675l3.08,2.681L11,4.781,6.187.6Z"/>
      </g>
    </svg>
  )
}

export default ArrowBrackets;