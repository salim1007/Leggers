import { AccountCircle, LibraryBooks, Queue } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="flex flex-row gap-2 p-3 bg-yellow-500 hover:bg-gray-500 hover:text-white">
        <AccountCircle />
        <Link to="/admin/dashboard">Dashboard</Link>
      </div>

      <div>
        <p className="flex ml-3">Category</p>
        <div className="flex flex-row bg-yellow-500 p-3 gap-2 mt-2  hover:bg-gray-500 hover:text-white  ">
          <Queue />
          <Link to="">Add Category</Link>
        </div>
        <div className="flex flex-row bg-yellow-500 p-3 gap-2  hover:bg-gray-500 hover:text-white">
          <LibraryBooks />
          <Link to="">View Category</Link>
        </div>
      </div>
      <div>
      <p className="flex ml-3">Product</p>
        <div className="flex flex-row bg-yellow-500 p-3 gap-2 mt-2  hover:bg-gray-500 hover:text-white ">
          <Queue />
          <Link to="">Add Product</Link>
        </div>
        <div className="flex flex-row bg-yellow-500 p-3 gap-2  hover:bg-gray-500 hover:text-white">
          <LibraryBooks />
          <Link to="">View Product</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
