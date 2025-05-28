import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ count }) => {
  return (
    <ReactPaginate
      nextLabel="Next"
      // onPageChange={}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={count}
      breakLabel="..."
      previousLabel="Prev"
      containerClassName="pagination"
      pageClassName="page"
      activeClassName="active"
      disabledClassName="disabled"
      renderOnZeroPageCount={null}
    />
  );
};
