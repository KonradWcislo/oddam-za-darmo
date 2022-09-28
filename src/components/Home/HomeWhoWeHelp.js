import React, { useState } from "react"
import DecorationText from "./../../assets/Decoration.svg"
import ReactPaginate from "react-paginate"

export const HomeWhoWeHelp = () => {
	const [pageNumber, setPageNumber] = useState(0)

	const infoPerPage = 3
	const pagesVisited = pageNumber * infoPerPage
	const pageCount = pageNumber
	const changePage = ({ selected }) => {
		setPageNumber(selected)
	}
	return (
		<section name='HomeWhoWeHelp'>
			<div className='who-we-help-first-container'>
				<h1>Komu pomagamy?</h1>
				<img
					className='who-we-help-decoration-text'
					src={DecorationText}
					alt=''
				/>
				<div>
					<button className='who-we-help-buttons'>Fundacjom</button>
					<button className='who-we-help-buttons'>
						Oraganizacjom pozarządowym
					</button>
					<button className='who-we-help-buttons'>Lokalnym zbiórkom</button>
				</div>
				<p>
					W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
					współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
					czego potrzebują.
				</p>
			</div>
			<div className='who-we-help-second-container '>
				<table>
					<tbody>
						<tr>
							<td>
								<h3>Fundacja “Dbam o Zdrowie”</h3>
								<p>
									Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
									życiowej.
								</p>
							</td>
							<td>
								<p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
							</td>
						</tr>
						<tr>
							<td>
								<h3>Fundacja “Dla dzieci”</h3>
								<p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
							</td>
							<td>
								<p>ubrania, meble, zabawki</p>
							</td>
						</tr>
						<tr>
							<td>
								<h3>Fundacja “Bez domu”</h3>
								<p>
									Cel i misja: Pomoc dla osób nie posiadających miejsca
									zamieszkania.
								</p>
							</td>
							<td>
								<p>ubrania, jedzenie, ciepłe koce</p>
							</td>
						</tr>
					</tbody>
				</table>
							</div>
			<ReactPaginate
					previousLabel={"Poprzednia"}
					nextLabel={"Następna"}
					pageCount={pageNumber}
					onPageChange={changePage}
					containerClassName={"paginationBttns"}
					previousLinkClassName={"previouseBttn"}
					nextLinkClassName={"nextBttn"}
					disabledClassName={"paginationDIsabled"}
					activeClassName={"paginationActive"}
				/>
		</section>
	)
}
