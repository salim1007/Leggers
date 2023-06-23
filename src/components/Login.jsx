import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/sanctum/csrf-cookie").then((res) => {
        axios.post(`/api/login`, { email, password }).then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem("auth_token", res.data.token);
            localStorage.setItem("auth_name", res.data.username);

            if (res.data.role === "admin") {
              Swal.fire({
                icon: "success",
                title: res.data.message,
                text: "Success!",
                timer:3000,
              })
              navigate("/admin/dashboard");
            } else {
              Swal.fire({
                icon: "success",
                title: res.data.message,
                text: "Success!",
                timer:3000,
              })
              navigate("/");
            }
          } else if (res.data.status === 401) {
            Swal.fire({
              icon: 'error',
              title: res.data.message,
              text: 'Error!',
              timer:3000,
           
            })
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="inline-flex flex-col basis-auto h-screen bg-amber-600 ">
      <Navbar />
      <span className="text-center mt-6 font-bold ">
        Enter your credentials:
      </span>

      <div className="">
        <form
          onSubmit={loginSubmit}
          className=" bg-zinc-800 flex flex-col gap-8 justify-center items-center h-64 ml-96 mr-96 mt-6 rounded-3xl text-xs font-bold"
        >
          <input
            className="rounded p-1 w-64 "
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            name="email"
            placeholder="Email"
          />

          <input
            className="rounded p-1 w-64 "
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
            <span className=" text-blue-300">
              <Link>forgot password?</Link>
            </span>
            <span className=" text-blue-300">
              don't have an account?{" "}
              <Link
                to="/register"
                className=" text-amber-200 hover:text-orange-400"
              >
                {" "}
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
