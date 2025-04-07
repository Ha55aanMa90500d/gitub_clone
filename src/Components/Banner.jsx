import React, { useEffect } from "react";
import Link from "./Link";
import "../css/banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../images/hero banner images.png";

function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="hero_banner">
      <div data-aos="zoom-in" className="hero-content">
        <h1 className="text-larger">
          Build and ship software on a single, collaborative platform
        </h1>
        <p className="joinmsg">
          Join the world’s most widely adopted AI-powered developer platform.
        </p>
        <div className="flex items-center justify-between bannerbtnflex">
          <form
            method="post"
            action="https://github.com/signup?source=form-home-signup&user_email="
            className="flex c-gp-2 banner_form_wrapper"
          >
            <input
              type="email"
              id="useremail"
              name="userEmail"
              placeholder="you@domain.com"
            />
            <label htmlFor="useremail" id="emaillabel">
              Enter your email
            </label>
            <input className="link3" type="submit" value="Sign up for Github" />
          </form>
          <Link className="bigLink" text="Try Github Copilot" />
        </div>
        <div className="hero_image_wrapper">
          <img src={heroImage} width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
