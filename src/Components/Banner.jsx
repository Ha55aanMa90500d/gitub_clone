import React from "react";
import Link from "./Link";
import "../css/banner.css";
import heroImage from '../images/hero banner images.png';

function Banner() {
  return (
    <div id="hero_banner">
      <div className="hero-content">
        <h1 className="text-larger">
          Build and ship software on a single, collaborative platform
        </h1>
        <p className="joinmsg">
          Join the world’s most widely adopted AI-powered developer platform.
        </p>
        <div className="flex c-gp-2">
          <input type="email" name="userEmail" placeholder="you@domain.com" />
          <Link className="link3" text="Sign up for Github" />
        </div>
        <div className="hero_image_wrapper">
          <img src={heroImage} width='100%'/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
