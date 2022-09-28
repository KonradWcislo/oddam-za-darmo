import React from "react"
import DecorationText from "./../assets/Decoration.svg"
import { HomeHeader } from "./Home/HomeHeader"

const LogIn = () => {
	return (
		<div>
			<HomeHeader />
			<div className='log-in-container'>
				<h1>Załóż konto</h1>
				<img
					className='log-in-decoration-text'
					src={DecorationText}
					alt='ozdoba tekstu'
				/>
				<div>
					<from className='register-form'>
						<label>Email</label>
						<input type='email'></input>
						<label>Hasło</label>
						<input type='password'></input>
						<label>Powtórz hasło</label>
						<input type='password'></input>
					</from>
					<div className='log-in-button'>
						<button onClick={event => (window.location.href = "/logowanie")}>
							Zaloguj się
						</button>
						<button>Załóż konto</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LogIn
