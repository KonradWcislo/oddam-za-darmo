import React from "react"
import DecorationText from "./../assets/Decoration.svg"
import { HomeHeader } from "./Home/HomeHeader"

const LogIn = () => {
	return (
		<div>
			<HomeHeader />
			<div className='log-in-container'>
				<h1>Zaloguj się</h1>
				<img
					className='log-in-decoration-text'
					src={DecorationText}
					alt='ozdoba tekstu'
				/>
				<div>
					<from className='log-in-form'>
						<label>Email</label>
						<input type="email"></input>
						<label >Hasło</label>
						<input type='password'></input>
					</from>
					<div className="log-in-button">
						<button onClick={event => (window.location.href = "/rejestracja")}>
							Załóż konto
						</button>
						<button>Zaloguj się</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LogIn
