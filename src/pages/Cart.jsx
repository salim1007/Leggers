import React, { useEffect, useState } from "react";
import CartNavbar from "./CartNavbar";
import { Link, Navigate } from "react-router-dom";
import LogoSelf from "./collections/images/logoSelf.png";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  var subTotal = 0;

  useEffect(() => {
    if (!localStorage.getItem("auth_token")) {
      Swal.fire({
        icon: "warning",
        title: "Login to Access Cart Page",
        text: "Warning!",
        timer: 3000,
      });
    }
    let IsMounted = true;

    axios.get(`/api/cart`).then((res) => {
      if (IsMounted) {
        if (res.data.status === 200) {
          setCart(res.data.cart);
          setLoading(false);
        }
      }
    });

    return () => {
      IsMounted = false;
    };
  }, []);

  if (!localStorage.getItem("auth_token")) {
    return <Navigate to="/" />;
  }

  const handleIncrement = (cart_id) => {
    setCart((cart) =>
      cart.map((item) =>
        cart_id === item.id
          ? {
              ...item,
              product_qty: item.product_qty + (item.product_qty < 10 ? 1 : 0),
            }
          : item
      )
    );
    updateCartQty(cart_id, "inc");
  };
  const handleDecrement = (cart_id) => {
    setCart((cart) =>
      cart.map((item) =>
        cart_id === item.id
          ? {
              ...item,
              product_qty: item.product_qty - (item.product_qty > 1 ? 1 : 0),
            }
          : item
      )
    );
    updateCartQty(cart_id, "dec");
  };

  function updateCartQty(cart_id, scope) {
    axios.put(`/api/cart-updateqty/` + cart_id + `/` + scope).then((res) => {
      if (res.data.status === 200) {
      }
    });
  }

  const deleteCartItem = (e, cart_id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Removing";

    axios.delete(`/api/delete-cartItem/` + cart_id).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          text: "Success!",
          timer: 3000,
        });

        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        Swal.fire({
          icon: "error",
          title: res.data.message,
          text: "Error!",
          timer: 3000,
        });

        thisClicked.innerText = "Remove";
      }
    });
  };

  var CartStatus = "";

  if (cart.length > 0) {
    CartStatus = (
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
                  subTotal += item.product_qty * item.product_sellPrice;
                  return (
                    <TableBody key={item.id}>
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
                            <button
                              onClick={() => handleDecrement(item.id)}
                              className="flex bg-slate-700 w-6 justify-center shadow-md items-center rounded rounded-r-none"
                            >
                              -
                            </button>
                            <div className="flex w-20 h-8 shadow-md justify-center items-center">
                              {item.product_qty}
                            </div>
                            <button
                              onClick={() => handleIncrement(item.id)}
                              className="flex bg-slate-700  justify-center shadow-md w-6 items-center rounded rounded-l-none"
                            >
                              +
                            </button>
                          </div>
                        </TableCell>
                        <TableCell>
                          {item.product_qty * item.product_sellPrice}
                        </TableCell>
                        <TableCell>
                          <button
                            onClick={(e) => deleteCartItem(e, item.id)}
                            className="bg-slate-600 text-slate-900 hover:text-white p-1 rounded"
                          >
                            Remove
                          </button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })}
              </Table>
            </TableContainer>
          </div>
          <div className="flex bg-gray-600 flex-col items-center p-4 gap-1 h-fit mr-4 w-96 rounded-md justify-center">
            <span className=" bg-slate-800 p-2 text-amber-200 rounded-md">
              Leggerz
            </span>
            <span className="p-2 rounded-md italic font-bold font-mono">
              Cart Price
            </span>

            <div className="flex flex-col p-3 gap-6 bg-gray-500 w-full justify-between rounded-md ">
              <div className=" flex flex-row justify-between">
                <div className="flex flex-col font-mono gap-4">
                  <div className="flex flex-col">
                    <span className="font-bold">Sub-total</span>
                  </div>

                  <span className="font-bold">Grand Total</span>
                </div>
                <div className="flex flex-col font-mono gap-4  ">
                  <span className=" flex font-bold  ">{subTotal}</span>

                  <span className=" flex font-bold ">{subTotal}</span>
                </div>
              </div>
              <div>
                <Link
                  to="/checkout"
                  className="flex bg-black text-white hover:text-amber-200 hover:bg-slate-900 p-2 rounded-md mt-2 justify-center items-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    CartStatus = (
      <div className=" bg-amber-600 h-screen">
        <div>
          <CartNavbar />
        </div>
        <div >
          <span className="flex p-4 font-semibold font-mono flex-col gap-6 justify-center items-center mt-32">
            <div className=" flex text-2xl">Your Cart is Empty!</div>
            <div className=" flex text-md">Shop to Add Items to Cart</div>
          </span>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className=" bg-zinc-800 h-screen w-screen">
        <div className="flex flex-col bg-zinc-800 p-4 h-4/5 justify-center items-center ">
          <img
            src={LogoSelf}
            alt="LeggerzLogo"
            className="object-scale-down h-72 w-72 rounded-full  "
          />
          <span className=" flex text-3xl text-amber-400 mt-8 font-bold italic font-mono">
            {" "}
            Loading Cart........
          </span>
        </div>
      </div>
    );
  }

  return <div>{CartStatus}</div>;
};

export default Cart;
