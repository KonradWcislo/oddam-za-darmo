export const Pagination = ({ pageCount, currentPage, onPageChange }) => {
	const handlePageClick = (e, page) => {
		console.log(`Selected Pagination ${page}`)
		e.preventDefault()
		onPageChange(page)
	}

	return (
		<ul className="paginationBttns">
			{pageCount > 1 &&
				Array.from(Array(pageCount).keys()).map(n => (
					<li onClick={e => handlePageClick(e, n)}>{n + 1}</li>
				))}
		</ul>
	)
}
