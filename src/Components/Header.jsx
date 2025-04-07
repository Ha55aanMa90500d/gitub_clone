import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Link from "./Link";
import "../css/header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center c-gp-5 py-2 px-4 ${
        scrolled ? "header-dark" : "bg-none"
      } sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="flex items-center c-gp-5">
        <img src={logo} alt="Company Logo" />
        <Navbar />
      </div>
      <div className="flex c-gp-4 items-center">
        <SearchBar />
        <Link className="link" text="Sign In" />
        <Link className="link2" text="Sign up" />
      </div>
    </header>
  );
}

export default Header;
