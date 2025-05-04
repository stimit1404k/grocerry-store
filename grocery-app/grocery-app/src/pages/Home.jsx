import React from "react";
import Navbar from "../components/navbar/Navbar";
import BannerSlider from "../components/banners/BannerSlider";
import HomeCategories from "../components/category/HomeCategories";
import ProductSideBar from "../components/products/ProductSideBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <ProductSideBar />
      Home
    </div>
  );
};

export default Home;
