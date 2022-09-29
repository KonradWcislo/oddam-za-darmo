import DecorationText from "./../../assets/Decoration.svg"

import { HomeWhoWeHelpOrganizations } from "./HomeWhoWeHelpOrganizations"

export const HomeWhoWeHelp = () => {
	return (
		<section name='HomeWhoWeHelp'>
			<div className='who-we-help-first-container'>
				<h1>Komu pomagamy?</h1>
				<img
					className='who-we-help-decoration-text'
					src={DecorationText}
					alt=''
				/>
				<div className='who-we-help-buttons-container'>
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
			<HomeWhoWeHelpOrganizations />
		</section>
	)
}
