import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 mt-12">
      <p className=" flex font-bold text-4xl "> Welcome To Admin Dashboard!</p>
      <div className="flex flex-col gap-6">
        <p className="flex font-bold text-xl mt-10 justify-center items-center "> Your Details Are Listed Below</p>
        <div className="flex flex-col gap-2 w-96">
          <div className="flex flex-row justify-between">
            <span className="font-bold italic">Name: </span>
            <span>Salim</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-bold italic">Surname: </span>
            <span>Mchomvu</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-bold italic">Contact: </span>
            <span>0748088341</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-bold italic">Email: </span>
            <span>salimmchomvu7@gmail.com</span>
          </div>
        </div>
        <span className="mt-12">Access the Sidebar to <i className="text-yellow-500">Add</i>, <i className="text-yellow-500">Update</i> or <i className="text-yellow-500" >Remove</i> Products details</span>
      </div>
    </div>
  );
};

export default Dashboard;
