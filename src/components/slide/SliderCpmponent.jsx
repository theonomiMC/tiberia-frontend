import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    lazyLoad: true,
    arrows: false,
};
const SliderComponent = ({ children }) => {
    
    return <Slider {...settings}>{children}</Slider>
}

export default SliderComponent