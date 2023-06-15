import { AccountCircle, Flare, Search } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`/api/getAllProducts`).then((res) => {
      if (res.data.status === 200) {
        setProduct(res.data.product);
      }
    });
  }, []);

  return (
    <div className=" bg-zinc-800 p-4 h-0/5 flex flex-row justify-between drop-shadow-lg w-full ">
      <div className=" font-bold text-amber-200">
        <Link to="/">Home</Link>
      </div>
      <div className="">
        <input
          type="text"
          className="bg-zinc-500 p-1 pl-2 rounded "
          placeholder="Search....."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className=" text-amber-100" />
        <div>
          {product
            .filter((item) => {
              if (searchTerm == "") {
                return "";
              } else if (
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <Link  key={item.id} to={`/collections/${item.category_id}/${item.prSection}/${item.name}`} className=" bg-orange-500 w-72 flex flex-row mt-6 gap-8 rounded-md  ">
                  <div >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt=""
                      className=" object-scale-down ml-4 h-12 rounded-md"
                    />
                  </div>
                  <div className=" flex flex-col gap-1 text-xs mt-1">
                    <div className=" flex flex-row gap-5 w-56 justify-between ">
                      <span className=" font-bold flex float-left">
                        {item.name}
                      </span>
                    </div>
                    <div className=" flex flex-row gap-5 w-56 justify-between ">
                      <span className=" font-bold flex float-left">
                        {item.category_id}
                      </span>
                    </div>
                   
                  </div>
                </Link>
              );
            })}
        </div>
        
      </div>
      <div className="flex flex-row justify-around gap-4">
        <div>
          <Flare className=" cursor-pointer text-amber-100" />
        </div>
        <div className="flex flex-row gap-1 font-bold text-amber-200 cursor-pointer">
          Account
          <AccountCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
