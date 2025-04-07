import React from "react";
import Slider from "react-slick";
import "../css/logoslider.css";
import americanairline from "../images/american_airline.png";
import ford from "../images/ford.png";
import duolingo from "../images/duolingo.png";
import vodafone from "../images/vodafone.png";
import shopify from "../images/shopify.png";
import merchedes from "../images/mercedese.png";
import figma from "../images/figma.png";
import ey from "../images/EY.png";

function Logoslider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // no delay between scrolls
    speed: 3000, // controls scroll speed
    cssEase: "linear", // for smooth linear motion
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        <div className="csslide">
          <img src={americanairline} alt="americanairline" />
        </div>
        <div className="csslide">
          <img src={ford} alt="ford" />
        </div>
        <div className="csslide">
          <img src={figma} alt="figma" />
        </div>
        <div className="csslide">
          <img src={vodafone} alt="vodafone" />
        </div>
        <div className="csslide">
          <img src={duolingo} alt="duolingo" />
        </div>
        <div className="csslide">
          <img src={shopify} alt="shopify" />
        </div>
        <div className="csslide">
          <img src={merchedes} alt="merchedes" />
        </div>
        <div className="csslide">
          <img src={vodafone} alt="vodafone" />
        </div>
        <div className="csslide">
          <img src={duolingo} alt="duolingo" />
        </div>
        <div className="csslide">
          <img src={shopify} alt="shopify" />
        </div>
        <div className="csslide">
          <img src={merchedes} alt="merchedes" />
        </div>
      </Slider>
    </div>
  );
}

export default Logoslider;
