import React from "react"

import Home from "./components/Home"
import LogIn from "./components/LogIn"
import Register from "./components/Register"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/logowanie' element={<LogIn />} />
					<Route path='/rejestracja' element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
