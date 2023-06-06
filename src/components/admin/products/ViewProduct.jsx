import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AdminNavbar from "../AdminNavbar";
import { Link } from "react-router-dom";

const ViewProduct = () => {
  const [menOfficial, setMenOfficial] = useState([]);
  const [menCasual, setMenCasual] = useState([]);
  const [womenCasual, setWomenCasual] = useState([]);
  const [womenOfficial, setWomenOfficial] = useState([]);
  const [boykids, setBoykids] = useState([]);
  const [girlkids, setGirlkids] = useState([]);

  useEffect(() => {
    axios.get(`/api/view-product-menOfficial`).then((res) => {
      if (res.data.status === 200) {
        setMenOfficial(res.data.menOfficial);
      }
    });

    axios.get(`/api/view-product-menCasual`).then((res) => {
      if (res.data.status === 200) {
        setMenCasual(res.data.menCasual);
      }
    });

    axios.get(`/api/view-product-boykids`).then((res) => {
      if (res.data.status === 200) {
        setBoykids(res.data.boykids);
      }
    });

    axios.get(`/api/view-product-girlkids`).then((res) => {
      if (res.data.status === 200) {
        setGirlkids(res.data.girlkids);
      }
    });

    axios.get(`/api/view-product-womenOfficial`).then((res) => {
      if (res.data.status === 200) {
        setWomenOfficial(res.data.womenOfficial);
      }
    });

    axios.get(`/api/view-product-womenCasual`).then((res) => {
      if (res.data.status === 200) {
        setWomenCasual(res.data.womenCasual);
      }
    });
  }, []);

  return (
    <div className="flex flex-col bg-gray-600 relative">
      <Navbar />
      <div className="flex flex-row gap-x-44 h-full w-full ">
        <div className="flex flex-col p-4 mt-6 gap-6">
          <TableContainer>
            <span className="font-bold ml-2 italic">Men (Official)</span>
            <Table>
              <TableHead>
                <TableRow className="italic" selected>
                  <TableCell>Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Orig.Price</TableCell>
                  <TableCell>Sell.Price</TableCell>
                  <TableCell>Section</TableCell>
                  <TableCell>Colour</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menOfficial.map((item) => {
                  return (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.brand_id}</TableCell>
                      <TableCell>{item.category_id}</TableCell>
                      <TableCell>{item.originalPrice}</TableCell>
                      <TableCell>{item.sellingPrice}</TableCell>
                      <TableCell>{item.prSection}</TableCell>
                      <TableCell>{item.colour}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>
                        <img
                          className=" object-scale-down h-20 w-20 rounded-md"
                          src={`http://localhost:8000/${item.image}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-4">
                          <Link to={`/admin/edit-product/${item.id}`} className=" bg-slate-400 p-2 rounded w-16 justify-center items-center flex  hover:bg-green-200">Edit</Link>
                          <button className=" bg-slate-400 p-2 rounded w-16 justify-center items-center flex hover:bg-red-400 hover:text-white">Delete</button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer>
            <span className="font-bold ml-2 italic">Men (Casual)</span>
            <Table>
              <TableHead>
                <TableRow className="italic" selected>
                  <TableCell>Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Orig.Price</TableCell>
                  <TableCell>Sell.Price</TableCell>
                  <TableCell>Section</TableCell>
                  <TableCell>Colour</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menCasual.map((item) => {
                  return (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.brand_id}</TableCell>
                      <TableCell>{item.category_id}</TableCell>
                      <TableCell>{item.originalPrice}</TableCell>
                      <TableCell>{item.sellingPrice}</TableCell>
                      <TableCell>{item.prSection}</TableCell>
                      <TableCell>{item.colour}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>
                        <img
                          className=" object-scale-down h-20 w-20 rounded-md"
                          src={`http://localhost:8000/${item.image}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-4">
                          <Link to={`/admin/edit-product/${item.id}`} className=" bg-slate-400 p-2 w-16 justify-center items-center flex rounded hover:bg-green-200">Edit</Link>
                          <button className=" bg-slate-400 p-2 w-16 justify-center items-center flex rounded hover:bg-red-400 hover:text-white">Delete</button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer>
            <span className="font-bold ml-2 italic">Women (Official)</span>
            <Table>
              <TableHead>
                <TableRow className="italic" selected>
                  <TableCell>Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Orig.Price</TableCell>
                  <TableCell>Sell.Price</TableCell>
                  <TableCell>Section</TableCell>
                  <TableCell>Colour</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {womenOfficial.map((item) => {
                  return (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.brand_id}</TableCell>
                      <TableCell>{item.category_id}</TableCell>
                      <TableCell>{item.originalPrice}</TableCell>
                      <TableCell>{item.sellingPrice}</TableCell>
                      <TableCell>{item.prSection}</TableCell>
                      <TableCell>{item.colour}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>
                        <img
                          className=" object-scale-down h-20 w-20 rounded-md"
                          src={`http://localhost:8000/${item.image}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-4">
                          <Link to={`/admin/edit-product/${item.id}`} className=" bg-slate-400 p-2 rounded w-16 justify-center items-center flex hover:bg-green-200">Edit</Link>
                          <button className=" bg-slate-400 p-2 rounded w-16 justify-center items-center flex hover:bg-red-400 hover:text-white">Delete</button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer>
            <span className="font-bold ml-2 italic">Women (Casual)</span>
            <Table>
              <TableHead>
                <TableRow className="italic" selected>
                  <TableCell>Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Orig.Price</TableCell>
                  <TableCell>Sell.Price</TableCell>
                  <TableCell>Section</TableCell>
                  <TableCell>Colour</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {womenCasual.map((item) => {
                  return (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.brand_id}</TableCell>
                      <TableCell>{item.category_id}</TableCell>
                      <TableCell>{item.originalPrice}</TableCell>
                      <TableCell>{item.sellingPrice}</TableCell>
                      <TableCell>{item.prSection}</TableCell>
                      <TableCell>{item.colour}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>
                        <img
                          className=" object-scale-down h-20 w-20 rounded-md"
                          src={`http://localhost:8000/${item.image}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-4">
                          <Link to={`/admin/edit-product/${item.id}`} className=" bg-slate-400 p-2 rounded w-16 justify-center items-center flex hover:bg-green-200">Edit</Link>
                          <button className=" bg-slate-400 p-2 rounded w-16 justify-center items-center flex hover:bg-red-400 hover:text-white">Delete</button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer>
            <span className="font-bold ml-2 italic">Kids (Boys)</span>
            <Table>
              <TableHead>
                <TableRow className="italic" selected>
                  <TableCell>Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Orig.Price</TableCell>
                  <TableCell>Sell.Price</TableCell>
                  <TableCell>Section</TableCell>
                  <TableCell>Colour</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {boykids.map((item) => {
                  return (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.brand_id}</TableCell>
                      <TableCell>{item.category_id}</TableCell>
                      <TableCell>{item.originalPrice}</TableCell>
                      <TableCell>{item.sellingPrice}</TableCell>
                      <TableCell>{item.prSection}</TableCell>
                      <TableCell>{item.colour}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>
                        <img
                          className=" object-scale-down h-20 w-20 rounded-md"
                          src={`http://localhost:8000/${item.image}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-4">
                          <Link to={`/admin/edit-product/${item.id}`} className=" bg-slate-400 p-2 justify-center items-center flex rounded w-16 hover:bg-green-200">Edit</Link>
                          <button className=" bg-slate-400 p-2 justify-center items-center flex rounded w-16 hover:bg-red-400 hover:text-white">Delete</button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer>
            <span className="font-bold ml-2 italic">Kids (Girls)</span>
            <Table>
              <TableHead>
                <TableRow className="italic" selected>
                  <TableCell>Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Orig.Price</TableCell>
                  <TableCell>Sell.Price</TableCell>
                  <TableCell>Section</TableCell>
                  <TableCell>Colour</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {girlkids.map((item) => {
                  return (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.brand_id}</TableCell>
                      <TableCell>{item.category_id}</TableCell>
                      <TableCell>{item.originalPrice}</TableCell>
                      <TableCell>{item.sellingPrice}</TableCell>
                      <TableCell>{item.prSection}</TableCell>
                      <TableCell>{item.colour}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>
                        <img
                          className=" object-scale-down h-20 w-20 rounded-md"
                          src={`http://localhost:8000/${item.image}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-4">
                          <Link to={`/admin/edit-product/${item.id}`} className=" bg-slate-400 p-2 justify-center items-center flex rounded w-16 hover:bg-green-200">Edit</Link>
                          <button className=" bg-slate-400 p-2 justify-center items-center flex rounded w-16 hover:bg-red-400 hover:text-white">Delete</button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
