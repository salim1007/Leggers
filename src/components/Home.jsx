import React from "react";
import Navbar from "./Navbar";
import LeggerzLogo from "../pages/collections/images/logoOfficial.png";

const Home = () => {
  return (
    <div className=" inline-flex flex-col basis-auto h-screen">
      <Navbar />
      <div className="flex bg-amber-600 p-4 h-4/5 justify-center items-center gap-10 w-screen ">
        <img
          src={LeggerzLogo}
          alt="LeggerzLogo"
          className="object-scale-down h-80 w-80 rounded-full  "
        />
      </div>
      <footer className=" bg-gray-800 p-4 h-2/5 items-center  ">
        <div className="text-center font-bold opacity-40 mt-2 text-amber-200 ">
          <h6>Contact Us:</h6>
        </div>
        <div className="text-center italic opacity-30 text-sm text-amber-200">
          <p>Tel: +255 22 267 4977</p>
          <p>Facebook: @leggerz255tz</p>
          <p>Instagram: @leggerz255tz</p>
          <p>Email: leggerz255tz@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
