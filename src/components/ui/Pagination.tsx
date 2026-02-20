import ReactPaginate from "react-paginate"

interface IProps {
	onPageChange?: () => void
	count: number
	forcePage?: number
}

export const Pagination = ({ onPageChange, count, forcePage }: IProps) => {
	return (
		<ReactPaginate
			onPageChange={onPageChange}
			pageRangeDisplayed={3}
			marginPagesDisplayed={1}
			pageCount={count}
			forcePage={forcePage}
			breakLabel="..."
			previousLabel={"Prev"}
			nextLabel={"Next"}
			containerClassName="pagination"
			pageClassName="page"
			activeClassName="active"
			disabledClassName="disabled"
			renderOnZeroPageCount={null}
		/>
	)
}
