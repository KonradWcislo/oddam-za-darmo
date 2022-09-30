import React from "react"
import DecorationText from "./../../assets/Decoration.svg"
import { HomeFooter } from "./HomeFooter"

export const HomeContact = () => {
	return (
		<>
			<section name='HomeContact' className=''>
				<div className='contact-container contact-container-background'>
					<div className='contact-right-column-background'>
						<div>
							<h1>Skontaktuj się z nami</h1>
							<img src={DecorationText} alt='ozdoba tekstu' />
						</div>

						<form>
							<div className='contact-first-row'>
								<label>
									Wpisz swoje Imię
									<input type='name' placeholder='Imię' required />
								</label>
								<label>
									Wpisz swój email
									<input type='email' placeholder='email' required />
								</label>
							</div>
							<div className='contact-second-row'>
								<label>
									Wpisz swoją wiadomość
									<input
										type='text'
										placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
										required
									/>
								</label>
							</div>

							<button>Wyślij</button>
						</form>
					</div>
				</div><HomeFooter />
				
			</section>
		</>
	)
}
