import React from "react"
import { useNavigate } from "react-router-dom"
import DecorationText from "./../../assets/Decoration.svg"
import { HomeHeader } from "../Home/HomeHeader"

const LogIn = () => {
	const navigate = useNavigate()
	return (
		<div>
			<HomeHeader />
			<div className='log-in-container'>
				<h1>Zaloguj się</h1>
				<img src={DecorationText} alt='ozdoba tekstu' />
				<div>
					<from className='log-in-form'>
						<label>Email</label>
						<input type='email'></input>
						<label>Hasło</label>
						<input type='password'></input>
					</from>
					<div className='log-in-button'>
						<button onClick={() => navigate("/rejestracja")}>
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
