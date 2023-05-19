import { Flare } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
  return (
    <div className=" bg-zinc-800 p-4 w-screen h-0/5 flex flex-row justify-between drop-shadow-lg   ">
      <div className=" font-bold text-amber-200 ">
        <Link to="/">Home</Link>
      </div>
      <div className="flex flex-row justify-around gap-4 ">
        <div >
          <Flare className=" cursor-pointer text-amber-100 " />
        </div>
        <div className="font-bold text-amber-200">
          <Link to="/collections">Collections</Link>
        </div>

        <div className="font-bold text-amber-200">
          <Link to="/register">Register</Link>
        </div>

        <div className="font-bold text-amber-200">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
