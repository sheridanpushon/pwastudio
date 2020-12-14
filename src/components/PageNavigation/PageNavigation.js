import React from 'react';
import classes from './PageNavigation.module.css';
import ReactPaginate from 'react-paginate';
import ArrowBrackets from '../Icons/ArrowBrackets';

const PageNavigation = ({itemCount}) => {
  return (
    <div>
      <ReactPaginate
        pageCount={5}
        pageRangeDisplayed={10}
        containerClassName={classes.root}
        pageClassName={classes.button}
        pageLinkClassName={classes.link}
        previousClassName={classes.next}
        nextClassName={classes.next}
        previousClassName={classes.previous}
        activeLinkClassName={classes.active}
      />
    </div>
  )
}

export default PageNavigation;