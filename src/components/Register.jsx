import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Register = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [midname, setMidname] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const registerSubmit = (e) => {
    e.preventDefault();
    try {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post(`/api/register`, {
            firstname,
            midname,
            surname,
            phoneNo,
            email,
            password,
            password_confirmation,
          })
          .then((res) => {
            if (res.data.status === 200) {
              localStorage.setItem("auth_token", res.data.token);
              localStorage.setItem("auth_name", res.data.username);

              swal("Success", res.data.message,"success");
              navigate("/login");
            } else if (res.data.status === 401) {
              swal( "Fill all fields with required information");
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
        Register your details here:
      </span>

      <div className="">
        <form
          onSubmit={registerSubmit}
          className=" bg-zinc-800 flex flex-col gap-4 justify-center items-center h-96 ml-96 mr-96 mt-6 rounded-3xl text-xs font-bold"
        >
          <input
            className="rounded p-1 w-64 "
            type="text"
            id="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            name="firstname"
            placeholder="Firstname"
          />

          <input
            className="rounded p-1 w-64 "
            type="text"
            onChange={(e) => setMidname(e.target.value)}
            value={midname}
            id="midname"
            name="midname"
            placeholder="Midname"
          />

          <input
            className="rounded p-1 w-64 "
            type="text"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            id="surname"
            name="surname"
            placeholder="Surname"
          />

          <input
            className="rounded p-1 w-64 "
            type="number"
            onChange={(e) => setPhoneNo(e.target.value)}
            value={phoneNo}
            id="phoneNo"
            name="phoneNo"
            placeholder="Phone number"
          />

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

          <input
            className="rounded p-1 w-64 "
            type="password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={password_confirmation}
            id="confPassword"
            name="password_confirmation"
            placeholder="Confirm password"
          />

          <button
            type="submit"
            className=" bg-slate-700 rounded p-1 hover:bg-orange-400 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
