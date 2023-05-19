import { AccountCircle, Flare, Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-zinc-800 p-4 h-0/5 flex flex-row justify-between drop-shadow-lg w-full ">
      <div className=" font-bold text-amber-200">
        <Link to="/">Home</Link>
      </div>
      <div className="">
        <input type="search" className="bg-zinc-500 px-2 rounded " placeholder="Search....."   />
        <Search className=" text-amber-100"/>
      </div>
      <div className="flex flex-row justify-around gap-4">
        <div>
          <Flare className=" cursor-pointer text-amber-100" />
        </div>
        <div className="flex flex-row gap-1 font-bold text-amber-200 cursor-pointer">
           Account
          <AccountCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
