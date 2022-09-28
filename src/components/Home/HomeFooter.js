import React from "react"

import { FaFacebook, FaInstagram } from "react-icons/fa"

export const HomeFooter = () => {
	return (
		<footer className='footer-container '>
			<p>Copyright by Coders Lab</p>
			<div className='footer-social'>
				<a href='https://www.facebook.com/'>
					<FaFacebook className='footer-fb' />
				</a>
				<a href='https://www.instagram.com/'>
					<FaInstagram className='footer-ig' />
				</a>
			</div>
		</footer>
	)
}
