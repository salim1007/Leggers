import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    axios.get(`/api/getAdminData`).then((res) => {
      if (res.data.status === 200) {
        setAdminData(res.data.admin);
      }
    });
  }, []);

  return (
    <div>
      {adminData.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center p-6 mt-12"
          >
            <p className=" flex font-bold text-4xl ">
              {" "}
              Welcome To Admin Dashboard!
            </p>
            <div className="flex flex-col gap-6">
              <p className="flex font-bold text-xl mt-10 justify-center items-center ">
                {" "}
                Your Details Are Listed Below
              </p>
              <div className="flex flex-col gap-2 w-96">
                <div className="flex flex-row justify-between">
                  <span className="font-bold italic">Name: </span>
                  <span className="font-bold italic">{item.firstname}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="font-bold italic">Surname: </span>
                  <span className="font-bold italic">{item.surname}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="font-bold italic">Contact: </span>
                  <span className="font-bold italic">{item.phoneNo}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="font-bold italic">Email: </span>
                  <span className="font-bold italic">{item.email}</span>
                </div>
              </div>
              <span className="mt-12 font-bold italic">
                Access the Sidebar to <i className="text-yellow-500">Add</i> ,{" "}
                <i className="text-yellow-500">Update</i> or{" "}
                <i className="text-yellow-500">Remove</i> Products details
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
