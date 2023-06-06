import React, { useEffect, useState } from "react";
import CartNavbar from "./CartNavbar";
import { Link, useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let IsMounted = true;

    if (!localStorage.getItem("auth_token")) {
      navigate('/')
      swal("Warning", "Login to go to Cart Page", "warning");
      
    }

    axios.get(`/api/cart`).then((res) => {
      if (IsMounted) {
        if (res.data.status === 200) {
          setCart(res.data.cart);
          setLoading(false);
        }
      } else if (res.data.status === 401) {
        navigate("/collections");
        swal("Warning", res.data.message, "warning");
      }
    });

    return () => {
      IsMounted = false;
    };
  }, []);

  if (loading) {
    return <h4>Loading Cart Details...</h4>;
  }

  return (
    <div className=" bg-amber-600 h-screen">
      <div>
        <CartNavbar />
      </div>
      <div>
        <span className="flex p-4 font-semibold font-mono text-xl">
          Your Shopping Cart
        </span>
      </div>
      <div className="flex flex-row bg-amber-600 justify-between gap-8 ">
        <div className="flex flex-col w-full gap-4">
          <TableContainer className=" rounded-md ml-4 h-fit">
            <Table>
              <TableHead>
                <TableRow selected>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              {cart.map((item) => {
                return (
                <TableBody key={item.id} >
                  <TableRow>
                    <TableCell>
                      <img
                        src={`http://localhost:8000/${item.product_image}`}
                        className=" object-scale-down h-20 w-20 rounded-md"
                        alt={item.product_name}
                      />
                    </TableCell>
                    <TableCell>{item.product_name}</TableCell>
                    <TableCell>{item.product_sellPrice}</TableCell>
                    <TableCell>
                      <div className="flex flex-row">
                        <button className="flex bg-slate-700 w-6 justify-center shadow-md items-center rounded rounded-r-none">
                          -
                        </button>
                        <input
                          type="text"
                          name="qty"
                          className="flex w-20 h-8 shadow-md"
                        />
                        <button className="flex bg-slate-700  justify-center shadow-md w-6 items-center rounded rounded-l-none">
                          +
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>180000</TableCell>
                    <TableCell>Remove</TableCell>
                  </TableRow>
                </TableBody>
                )
              })}
            </Table>
          </TableContainer>
        </div>
        <div className="flex bg-green-600 flex-col items-center p-4 gap-2 h-fit mr-4 w-96 rounded-md justify-center">
          <span className=" bg-slate-600 p-2 rounded-md">Leggerz</span>

          <div className="flex flex-row p-3 bg-blue-500 w-full justify-between rounded-md ">
            <div className="flex flex-col font-mono gap-4">
              <div className="flex flex-col">
                <span>item 1</span>
                <span>item 2</span>
                <span className="font-bold">Sub-total</span>
              </div>
              <span className="font-bold">delivery fee</span>
              <span className="font-bold">Grand Total</span>
            </div>
            <div className="flex flex-col font-mono gap-4">
              <div className="flex flex-col">
                <span>value 1</span>
                <span>value 2</span>
                <span className="font-bold">Sub-Total</span>
              </div>
              <span className="font-bold">delivery</span>
              <span className="font-bold">grand-Total</span>
            </div>
          </div>
          <Link to="" className="flex bg-blue-400 p-2 rounded-md mt-2">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
