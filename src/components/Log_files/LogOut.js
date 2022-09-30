import React from "react"
import DecorationText from "./../../assets/Decoration.svg"
import { HomeHeader } from "../Home/HomeHeader"
const LogOut = () => {
	return (
		<>
			<HomeHeader />
			<div className='log-in-container log-out-container'>
				<h1>Wylogowanie nastąpiło pomyślnie!</h1>
				<img
					className='log-in-decoration-text'
					src={DecorationText}
					alt='ozdoba tekstu'
				/>
				<div className='log-in-button'>
					<button>Strona główna</button>
				</div>
			</div>
		</>
	)
}

export default LogOut
