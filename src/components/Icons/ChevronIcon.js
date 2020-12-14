import React from 'react';

const ChevronIcon = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8.828" height="5.829" viewBox="0 0 8.828 5.829">
      <g transform="translate(1.414 1.414)">
        <path className={className} fill="none" stroke-linecap="round" stroke-width="2px" d="M0,0,3,3,6,0"/>
      </g>
    </svg>
  )
}

export default ChevronIcon;