import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg",
      title: "Fresh Vegetable and Fruits at your Doorstep",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, esse.",
      button: "https://www.google.com",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Fresh Vegetable and Fruits at your Doorstep",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, esse.",
      button: "https://www.google.com",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bannerSlider">
      <Slider className="bannerSlider" {...settings}>
        {data.map((item) => {
          return (
            <div className="imageContent" key={item.id}>
              <img src={item.image} alt="noImage" />
              <div className="content">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>Shop More</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
