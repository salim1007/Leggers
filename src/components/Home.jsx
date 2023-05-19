import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className=" inline-flex flex-col basis-auto h-screen">
        <Navbar/>
      <div className=" bg-amber-600 p-4 h-4/5 ">
        {/* content */}
      </div>
      <footer className=" bg-gray-800 p-4 h-2/5 items-center  ">
        <div className="text-center font-bold opacity-40 mt-2 text-amber-200 ">
          <h6>Contact Us:</h6>
        </div>
        <div className="text-center italic opacity-30 text-amber-200">
          <p>Tel:</p>
          <p>Facebook:</p>
          <p>Instagram:</p>
          <p>Email:</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
