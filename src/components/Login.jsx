import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="inline-flex flex-col basis-auto h-screen bg-amber-600 ">
      <Navbar />
      <span className="text-center mt-6 font-bold ">
       Enter your credentials:
      </span>

      <div className="">
        <form className=" bg-zinc-800 flex flex-col gap-8 justify-center items-center h-64 ml-96 mr-96 mt-6 rounded-3xl text-xs font-bold">
          <input
            className="rounded p-1 w-64 "
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />

          <input
            className="rounded p-1 w-64 "
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className=" bg-slate-700 rounded p-1 hover:bg-orange-400 -mt-4  "
          >
            Login
          </button>
          <div className="flex flex-col gap-4">
          <span className=" text-blue-300"><Link>forgot password?</Link></span>
          <span className=" text-blue-300">don't have an account? <Link to="/register" className=" text-amber-200 hover:text-orange-400"> Sign Up</Link></span>
          </div>
         
        </form>
        
      </div>
    </div>
  );
};

export default Login;
