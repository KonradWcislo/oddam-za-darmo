import React, { useEffect, useState } from "react"
import FJsonData from "./../Data_files/F_DATA.json"
import LZJsonData from "./../Data_files/LZ_DATA.json"
import OPJsonData from "./../Data_files/OP_DATA.json"
import { Pagination } from "./Pagination"

export const HomeWhoWeHelpOrganizations = ({ currentSection }) => {
	const [fundations, setFoundations] = useState([])
	const [pageNumber, setPageNumber] = useState(0)

	useEffect(() => {
		switch (currentSection) {
			case "Fundacjom":
				setFoundations(FJsonData.slice(0, 9))
				break
			case "Organizacjom":
				setFoundations(OPJsonData.slice(0, 6))
				break
			case "Lokalnym":
				setFoundations(LZJsonData.slice(0, 3))
				break
			default:
				console.log("wtf")
		}
	}, [currentSection])

	const fundationsPerPage = 3

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

	const changePage = selected => {
		setPageNumber(selected)
	}
	console.log(displayFundations, "displayFundations")
	return (
		<div>
			{displayFundations}
			<Pagination  
				pageCount={pageCount}
				currentPage={pageNumber}
				onPageChange={changePage}
			/>
		</div>
	)
}
