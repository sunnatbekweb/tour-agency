import { useTranslations } from "next-intl";
import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ count, onPageChange, forcePage }) => {
  const t = useTranslations();
  return (
    <ReactPaginate
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={count}
      forcePage={forcePage}
      breakLabel="..."
      previousLabel={t("pagination_prev")}
      nextLabel={t("pagination_next")}
      containerClassName="pagination"
      pageClassName="page"
      activeClassName="active"
      disabledClassName="disabled"
      renderOnZeroPageCount={null}
    />
  );
};
