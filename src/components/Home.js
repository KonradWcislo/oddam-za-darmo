import React from "react"
import { HomeHeader } from "./Home/HomeHeader"
import { HomeSectionMain } from "./Home/HomeSectionMain"
import { HomeThreeColumns } from "./Home/HomeThreeColumns"
import { HomeFourSteps } from "./Home/HomeFourSteps"
import { HomeAboutUs } from "./Home/HomeAboutUs"
import { HomeWhoWeHelp } from "./Home/HomeWhoWeHelp"
import { HomeContact } from "./Home/HomeContact"

const Home = () => {
	return (
		<>
			<HomeHeader />
			<HomeSectionMain />
			<HomeThreeColumns />
			<HomeFourSteps />
			<HomeAboutUs />
			<HomeWhoWeHelp />
			<HomeContact />
		</>
	)
}

export default Home
