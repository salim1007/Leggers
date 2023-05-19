import React from "react";
import Navbar from "./Navbar";

const Register = () => {
  return (
    <div className="inline-flex flex-col basis-auto h-screen bg-amber-600 ">
      <Navbar />
      <span className="text-center mt-6 font-bold ">
        Register your details here:
      </span>

      <div className="">
        <form className=" bg-zinc-800 flex flex-col gap-4 justify-center items-center h-96 ml-96 mr-96 mt-6 rounded-3xl text-xs font-bold">
      
          <input className="rounded p-1 w-64 " type="text" id="firstname" name="firstname" placeholder="Firstname" />

          
          <input className="rounded p-1 w-64 " type="text" id="midname" name="midname" placeholder="Midname" />

       
          <input className="rounded p-1 w-64 " type="text" id="surname" name="surname" placeholder="Surname" />

          <input className="rounded p-1 w-64 " type="number" id="phoneNo" name="phoneNo" placeholder="Phone number" />

          <input className="rounded p-1 w-64 " type="email" id="email" name="email" placeholder="Email"/>

     
          <input className="rounded p-1 w-64 " type="password" id="password" name="password" placeholder="Password" />

          
          <input className="rounded p-1 w-64 " type="password" id="confPassword" name="confPassword" placeholder="Confirm password"/>

          <button type="submit" className=" bg-slate-700 rounded p-1 hover:bg-orange-400 ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
