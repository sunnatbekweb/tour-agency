import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ count, onPageChange, forcePage }) => {
  return (
    <ReactPaginate
      nextLabel="Next"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={count}
      forcePage={forcePage}
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
