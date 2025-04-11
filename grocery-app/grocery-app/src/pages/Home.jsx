import React from "react";
import Navbar from "../components/navbar/Navbar";
import BannerSlider from "../components/banners/BannerSlider";
import HomeCategories from "../components/Category/HomeCategories";

const Home = () => {
	return (
		<div>
			<Navbar />
			<BannerSlider />
			<HomeCategories />
			Home
		</div>
	);
};

export default Home;
