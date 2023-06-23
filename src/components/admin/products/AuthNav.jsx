import { AccountCircle, Flare, Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import DropdownComponent from "../../../pages/Dropdown";

const AuthNav = () => {
  return (
    <div className=" bg-zinc-800 p-4 h-0/5 flex flex-row h-fit justify-between drop-shadow-md w-screen relative z-10">
      <div className=" font-bold text-amber-200">
        <Link to="/">Home</Link>
      </div>
      <div className="flex flex-row justify-around gap-4">
        <div className="flex flex-row justify-around gap-4 mr-4">
          <DropdownComponent />
        </div>
      </div>
    </div>
  );
};

export default AuthNav;
