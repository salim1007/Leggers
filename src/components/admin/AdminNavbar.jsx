import { AccountCircle, LibraryBooks, Queue } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className=" flex flex-col gap-3">
      <Link to="/admin/dashboard" className="flex flex-row gap-2 p-3 bg-yellow-500 hover:bg-gray-500 hover:text-white">
        <AccountCircle />
        <div>Dashboard</div>
      </Link>

      <div>
        <p className="flex ml-3">Category</p>
        <Link to="/admin/add-category" className="flex flex-row bg-yellow-500 p-3 gap-2 mt-2  hover:bg-gray-500 hover:text-white  ">
          <Queue />
          <div>Add Category</div>
        </Link>
       
      </div>
      <div>
      <p className="flex ml-3">Product</p>
        <Link to="/admin/add-product" className="flex flex-row bg-yellow-500 p-3 gap-2 mt-2  hover:bg-gray-500 hover:text-white ">
          <Queue />
          <div>Add Product</div>
        </Link>
        <Link  to="/admin/view-product" className="flex flex-row bg-yellow-500 p-3 gap-2  hover:bg-gray-500 hover:text-white">
          <LibraryBooks />
          <div>View Product</div>
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
