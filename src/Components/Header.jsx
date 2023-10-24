import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logoF.png";

const Header = () => {
  return (
    <nav>
      <div className="p-2 xl:px-10 shadow-md bg-white ">
        <NavLink to={"/"}>
          <img className="  w-20 2xl:w-40 " src={logo} alt="logo" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
