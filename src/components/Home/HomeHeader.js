import React from "react"
import { Link } from "react-scroll"
import { useNavigate } from "react-router-dom"
import "./../../scss/main.scss"
export const HomeHeader = () => {
	const navigate = useNavigate()
	return (
		<div className=''>
			<div className='header-navBar'>
				<div className='logPanel'>
					<Link to='LogIn'>
						<button
							onClick={() => navigate('/logowanie')}
							className='login'>
							Zaloguj
						</button>
					</Link>
					<Link to='Register'>
						<button
							onClick={() => navigate('/rejestracja')}
							className='register'>
							Załóż konto
						</button>
					</Link>
				</div>
				<nav>
					<ul>
						<Link
							onClick={() => navigate('/')}
							smooth={true}
							duration={1000}>
							<li>Start</li>
						</Link>
						<Link to='HomeFourSteps' smooth={true} duration={1000}>
							<li>O co chodzi?</li>
						</Link>
						<Link to='HomeAboutUs' smooth={true} duration={1000}>
							<li>O nas</li>
						</Link>
						<Link to='HomeWhoWeHelp' smooth={true} duration={1000}>
							<li>Fundacja i organizacje</li>
						</Link>
						<Link to='HomeContact' smooth={true} duration={1000}>
							<li>Kontakt</li>
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	)
}
