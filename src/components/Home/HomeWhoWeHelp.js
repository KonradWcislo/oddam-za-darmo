import DecorationText from "./../../assets/Decoration.svg"

import { HomeWhoWeHelpOrganizations } from "./HomeWhoWeHelpOrganizations"
import { useState } from "react"

export const HomeWhoWeHelp = () => {
	const [section, setSection] = useState("Fundacjom")

	const handleButtonClick = (e, sectionName) => {
		e.preventDefault()
		setSection(sectionName)
	}

	return (
		<section name='HomeWhoWeHelp' className=''>
			<div className='who-we-help-first-container'>
				<h1>Komu pomagamy?</h1>
				<img
					className='who-we-help-decoration-text'
					src={DecorationText}
					alt=''
				/>
				<div className='who-we-help-buttons-container'>
					<button
						className='who-we-help-buttons'
						onClick={e => handleButtonClick(e, "Fundacjom")}>
						Fundacjom
					</button>
					<button
						className='who-we-help-buttons'
						onClick={e => handleButtonClick(e, "Organizacjom")}>
						Oraganizacjom pozarządowym
					</button>
					<button
						className='who-we-help-buttons'
						onClick={e => handleButtonClick(e, "Lokalnym")}>
						Lokalnym zbiórkom
					</button>
				</div>
				<p>
					W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
					współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
					czego potrzebują.
				</p>
			</div>
			<HomeWhoWeHelpOrganizations currentSection={section} />
		</section>
	)
}
