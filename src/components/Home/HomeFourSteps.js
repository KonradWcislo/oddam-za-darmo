import React from "react"
import { useNavigate } from "react-router-dom"
import DecorationText from "./../../assets/Decoration.svg"
import Icon1 from "./../../assets/Icon-1.svg"
import Icon2 from "./../../assets/Icon-2.svg"
import Icon3 from "./../../assets/Icon-3.svg"
import Icon4 from "./../../assets/Icon-4.svg"

export const HomeFourSteps = () => {
	const navigate = useNavigate()
	return (
		<section name='HomeFourSteps'>
			<div className='four-steps-first-row'>
				<h1>Wystarczą 4 proste kroki</h1>
				<img
					className='four-steps-decoration-text'
					src={DecorationText}
					alt='ozdoba tekstu'
				/>
			</div>
			<div className='four-steps-container four-steps-second-row'>
				<div className='four-steps-box'>
					<img src={Icon1} alt='.' />
					<h3>Wybierz rzeczy</h3>
					<p>ubrania, zabawki, sprzęt i inne</p>
				</div>
				<div className='four-steps-box'>
					<img src={Icon2} alt='.' />
					<h3>Spakuj je</h3>
					<p>skorzystaj z worków na śmeci</p>
				</div>
				<div className='four-steps-box'>
					<img src={Icon3} alt='.' />
					<h3>Zdecyduj komu chcesz pomóc</h3>
					<p>wybierz zaufane miejsce</p>
				</div>
				<div className='four-steps-box'>
					<img src={Icon4} alt='.' />
					<h3>Zamów kuriera</h3>
					<p>kurier przyjedzie w dogodne</p>
				</div>
			</div>
			<div className='four-steps-container four-steps-third-row'>
				<button
					onClick={() => navigate("logowanie")}
					className='four-steps-button'>
					oddaj
					<br /> rzeczy
				</button>
			</div>
		</section>
	)
}
