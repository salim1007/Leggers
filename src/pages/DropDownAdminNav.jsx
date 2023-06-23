import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function DropDownAdminNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const logoutOfSystem = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        Swal.fire({
          icon: "success",
          title: res.data.message,
          timer: 2000,
        });

        navigate("/login");
      }
    });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-flex bg-amber-200 border rounded-md z-20 mr-1">
      <a
        href="#"
        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
      >
        MyLeggerz
      </a>

      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 z-20 w-56 mt-4 origin-top-right bg-amber-200 border border-gray-100 rounded-md shadow-lg">
            <div className="p-2">
              <button
                onClick={logoutOfSystem}
                className="block px-4 py-2 text-sm text-black rounded-lg hover:bg-gray-200 w-52 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
