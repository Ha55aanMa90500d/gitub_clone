import React from "react";
import logo from "../images/logo.png";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Link from "./Link";
import '../css/header.css'

function Header() {
  return (
    <header className="flex justify-between items-center c-gp-5 py-2 px-4 bg-none">
      <div className="flex items-center c-gp-5">
        <img src={logo} alt="Company Logo" />
        <Navbar />
      </div>
      <div className="flex c-gp-4 items-center">
        <SearchBar />
        <Link className="link" text="Sign In" />
        <Link className="link2" text="Sign up"/>
      </div>
    </header>
  );
}

export default Header;
