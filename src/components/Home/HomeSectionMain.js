import React from "react"
import { useNavigate } from "react-router-dom"
import DecorationText from "./../../assets/Decoration.svg"

export const HomeSectionMain = () => {
	const navigate = useNavigate()
	return (
		<section name='HomeSectionMain' className='section-main'>
			<div className='first-column two-columns'>
				<div className='home-background-img' />
			</div>
			<section className='second-column two-columns'>
				<h1 className='second-column-h1'>
					Zacznij pomagać! <br />
					Oddaj niechciane rzeczy w zaufane ręce
				</h1>
				<img
					className='second-column-decoration-text'
					src={DecorationText}
					alt='ozdoba tekstu'
				/>
				<div className='second-colum-button-container'>
					<button className='second-column-button' onClick={() => navigate('/logowanie')}>
						Oddaj
						<br /> rzeczy
					</button>
					<button className='second-column-button'>
						Zorganizuj
						<br /> zbiórkę
					</button>
				</div>
			</section>
		</section>
	)
}
