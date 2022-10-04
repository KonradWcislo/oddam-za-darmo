import React from "react"
import { HomeSectionMain } from "./Home/HomeSectionMain"
import { HomeThreeColumns } from "./Home/HomeThreeColumns"
import { HomeFourSteps } from "./Home/HomeFourSteps"
import { HomeAboutUs } from "./Home/HomeAboutUs"
import { HomeWhoWeHelp } from "./Home/HomeWhoWeHelp"
import { HomeContact } from "./Home/HomeContact"
import { HomeFooter } from "./Home/HomeFooter"

const Home = () => {
	return (
		<>
			<HomeSectionMain />
			<HomeThreeColumns />
			<HomeFourSteps />
			<HomeAboutUs />
			<HomeWhoWeHelp />
			<HomeContact />
			<HomeFooter />
		</>
	)
}

export default Home
