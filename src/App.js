import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import LogIn from "./components/Log_files/LogIn"
import Register from "./components/Log_files/Register"
import LogOut from "./components/Log_files/LogOut"



const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/logowanie' element={<LogIn />} />
					<Route path='/rejestracja' element={<Register />} />
					<Route path="/wylogowano" element={<LogOut />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
