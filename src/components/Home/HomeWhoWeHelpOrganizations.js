import React, { useEffect, useState } from "react"
import JsonData from "./../Data_files/F_DATA.json"
import ReactPaginate from "react-paginate"

export const HomeWhoWeHelpOrganizations = () => {
	const [fundations] = useState(JsonData.slice(0, 9))
	const [pageNumber, setPageNumber] = useState(0)

	useEffect(() => {
		console.log(pageNumber)
	}, [pageNumber])

	const fundationsPerPage = 3
	//const pagesVisited = pageNumber + fundationsPerPage

	const displayFundations = fundations
		.filter((el, i) => i >= pageNumber * 3 && i <= pageNumber * 3 + 2)
		.map(fundation => {
			return (
				<div className='fundation who-we-help-second-container'>
					<table>
						<tbody>
							<tr>
								<td>
									<h3>Fundacja {fundation.fundationName}</h3>
									<p>Cel i misja: {fundation.purposeAndMission}</p>
								</td>
								<td>
									<p>{fundation.stuff}</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)
		})

	const pageCount = Math.ceil(fundations.length / fundationsPerPage)

	const changePage = ({ selected }) => {
		console.log(selected)
		setPageNumber(selected)
	}
	console.log(displayFundations, "displayFundations")
	return (
		<div>
			{displayFundations}
			<ReactPaginate
				previousLabel={"<"}
				nextLabel={">"}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={"paginationBttns"}
				previousLinkClassName={"previousBttn"}
				nextLinkClassName={"nextBttn"}
				disabledClassName={"paginationDisabled"}
				activeClassName={"paginationActive"}
			/>
		</div>
	)
}
