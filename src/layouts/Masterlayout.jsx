import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import DropDownAdminNav from "../pages/DropDownAdminNav";
const Masterlayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen basis-auto bg-orange-600">
      <div className=" flex h-fit  bg-zinc-800 p-4 w-screen h-0/5 flex-row justify-between drop-shadow-lg   ">
        <div className=" font-bold text-amber-200">
          <Link to="/">Home</Link>
        </div>
        <div className=" font-bold text-amber-200">
          <DropDownAdminNav/>
        </div>
      </div>
      <div className="flex flex-row h-full w-screen bg-green-400">
        <div className="bg-blue-500 h-auto w-72 ">
            <AdminNavbar/>
        </div>
        <div className="bg-gray-600 h-full  w-full">
            <main>
                <Outlet/>
            </main>
        </div>
      </div>
    </div>
  );
};

export default Masterlayout;
