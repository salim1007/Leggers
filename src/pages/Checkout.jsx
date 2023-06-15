import React, { useEffect, useState } from "react";
import CheckOutNav from "./CheckOutNav";
import Logo from "./collections/images/bw-girl.webp";
import axios from "axios";
import Swal from "sweetalert2";

const Checkout = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setStateName] = useState("");
  const [zip, setZip] = useState("");
  const [postalcode, setPostalcode] = useState("");


  const [cart, setCart] = useState([]);

  var subTotal = 0;
  let deliveryFee = 0;

  if (country === 'Tanzania') {
    deliveryFee = 15000;
  } else if (country === 'Kenya') {
    deliveryFee = 25000;
  } else if (country === 'Uganda') {
    deliveryFee = 28000;
  }

  var grandTotal = subTotal + deliveryFee;

  useEffect(() => {
    axios.get(`/api/cart`).then((res) => {
      setCart(res.data.cart);
    });
  }, []);

  const submitOrder = (e) => {
    e.preventDefault();

    axios
      .post(`api/place-order`, {
        firstname,
        lastname,
        email,
        phone,
        country,
        city,
        state,
        zip,
        postalcode,
      })
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            text: "Success!",
            timer: 2000,
          });
        } else if (res.data.status === 422) {
          Swal.fire({
            icon: "error",
            title: res.data.errors,
            text: "Error!",
            timer: 2000,
          });
        }
      });
  };

  return (
    <div>
      <div>
        <CheckOutNav />
      </div>
      <div className=" bg-amber-600 p-4 h-8 italic items-center flex flex-row justify-start drop-shadow-lg w-full ">
        Fill in your Checkout Details to place your Order
      </div>
      <div className=" flex flex-row justify-between bg-gray-600 p-5 gap-6 h-fit">
        <form
          onSubmit={submitOrder}
          className="flex flex-col gap-7 bg-amber-600 p-5 w-1/2 rounded-md mt-4 h-fit ml-8 text-sm"
        >
          <div className="flex justify-between gap-8 mt-3">
            <input
              name="firstname"
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              placeholder="First Name"
              className=" flex w-72 rounded-md p-2"
            />
            <input
              name="lastname"
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              placeholder="Last Name"
              className=" flex w-72 rounded-md p-2"
            />
          </div>
          <div className="flex justify-between gap-8">
            <input
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              className=" flex w-72 rounded-md p-2"
            />
            <input
              name="phone"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone No."
              className=" flex w-72 rounded-md p-2"
            />
          </div>
          <div className="flex justify-between gap-8">
            <select
              name="country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              className=" flex w-72 rounded-md p-2"
            >
              <option value="">Country</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
            </select>
            <input
              name="city"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
              className=" flex w-72 rounded-md p-2"
            />
          </div>
          <div className="flex justify-between gap-8">
            <input
              name="state"
              type="text"
              onChange={(e) => setStateName(e.target.value)}
              value={state}
              placeholder="State"
              className=" flex w-72 rounded-md p-2"
            />
            <input
              name="zip"
              type="text"
              onChange={(e) => setZip(e.target.value)}
              value={zip}
              placeholder="Zip"
              className=" flex w-72 rounded-md p-2"
            />
          </div>
          <div className="flex justify-between gap-8">
            <input
              name="postalcode"
              type="text"
              onChange={(e) => setPostalcode(e.target.value)}
              value={postalcode}
              placeholder="Postal Code"
              className=" flex w-full rounded-md p-2"
            />
          </div>
          <span className=" flex justify-center items-center p-2 rounded-md">
            <button type="submit" className=" bg-blue-300 p-2 rounded-md w-32">
              Place Order
            </button>
          </span>
        </form>
        <div className=" flex flex-col w-1/3 gap-8  mt-4 mr-8 ">
          <div className=" flex flex-col bg-blue-400 p-4 rounded h-fit">
            <span className=" font-bold bg-black text-white p-2 rounded">
              Order Summary
            </span>
            {cart.map((item) => {
              subTotal += item.product_sellPrice * item.product_qty;
              grandTotal = subTotal + deliveryFee;
            })}
            <div className=" flex flex-col gap-2 mt-2 mb-3 p-3 ">
              <div className=" flex flex-row justify-between">
                <span>Sub-Total</span>
                <span>{subTotal}</span>
              </div>
              <div className=" flex flex-row justify-between">
                <span>Delivery-Fee</span>
                <span>
                  {country === "" && 0}
                  {country === "Tanzania" &&  15000}
                  {country === "Kenya" &&  25000}
                  {country === "Uganda" &&  28000}
                </span>
              </div>
              <div className=" flex flex-row justify-between font-bold">
                <span>Grand-Total</span>
                <span>{grandTotal }</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col bg-blue-400 p-4 rounded h-fit mb-10">
            <span className=" font-bold bg-black text-white p-2 rounded w-full">
              Cart Summary
            </span>
            {cart.map((item) => {
              return (
                <div key={item.id} className=" flex flex-row mt-6 gap-8">
                  <div>
                    <img
                      src={`http://localhost:8000/${item.product_image}`}
                      alt=""
                      className=" object-scale-down ml-4 h-20 w-20 rounded-md"
                    />
                  </div>
                  <div className=" flex flex-col gap-3 text-xs">
                    <div className=" flex flex-row gap-5 w-56 justify-between ">
                      <span>Name :</span>
                      <span className=" font-bold flex float-left">
                        {item.product_name}
                      </span>
                    </div>
                    <div className=" flex flex-row gap-5 w-56 justify-between ">
                      <span>Qty :</span>
                      <span className=" font-bold flex float-left">
                        {item.product_qty}
                      </span>
                    </div>
                    <div className=" flex flex-row gap-5 w-56 justify-between ">
                      <span>Price :</span>
                      <span className=" font-bold">
                        {item.product_sellPrice}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
