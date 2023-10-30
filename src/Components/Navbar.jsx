import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full pt-6 px-9 lg:px-40 2xl:px-64 pb-3">
      <h1 className="text-2xl text-black font-semibold mb-4  pt-4 pb-2">
        Create Flashcard
      </h1>
      <div className="flex font-medium  space-x-12 pb-3 px-2">
        <button className=" ">
          <NavLink
            to={"/"} 
            /*if the link is actve it will give bottom background to creat new of red color */
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red " : undefined,
              paddingBottom: "12px",
              color:isActive? "red" : "GrayText",
              
            })}
          >
            Create New
          </NavLink>
        </button>
        <button className="">
          <NavLink
            to={"/myflashcard "}
            /*if the link is actve it will give bottom background to my Flashcard of red color */
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              paddingBottom: "12px",
              color:isActive? "red" : "GrayText"
            })}
          >
            My Flashcard
          </NavLink>
        </button>
      </div>
      <hr className="border border-gray-300 md:mb-5 mb-8" />
    </div>
  );
};

export default Navbar;
