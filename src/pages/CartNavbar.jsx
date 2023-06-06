import { AccountCircle, Flare, Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import DropdownComponent from "./Dropdown";

const CartNavbar = () => {
  return (
    <div className=" bg-zinc-800 p-4 h-0/5 flex flex-row h-fit justify-between drop-shadow-md w-full ">
      <div className=" font-bold text-amber-200">
        <Link to="/">Leggerz</Link>
      </div>
      <div className="flex flex-row justify-around gap-4">
        <DropdownComponent/>
      </div>
    </div>
  );
};

export default CartNavbar;
