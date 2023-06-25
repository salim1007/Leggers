import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddCategory = () => {
  

  const [status, setStatus] = useState([]);

  const [category, setCategory] = useState("");
  const [origin, setOrigin] = useState("");
  const [brandName, setBrandName] = useState("");
  const [freshness, setFreshness] = useState("");
  const [description, setDescription] = useState("");



  const categorySubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/add-category`, {
        category,
        origin,
        brandName,
        freshness,
        description,
        status: status ? 1 : 0,
      })
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            text: 'Success!',
            timer:3000,
         
          })
        } else if (res.data.status === 400) {
          Swal.fire({
            icon: 'error',
            title: res.data.message,
            text: 'Error!',
            timer:3000,
         
          })
        }
      });
  };

  return (
    <form
      onSubmit={categorySubmit}
      className="flex flex-col p-10 gap-4 justify-center  "
    >
      <p className=" font-bold">ADD CATEGORY</p>
      <div className="flex gap-20 ">
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="category">Category: </label>
          <select
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="rounded bg-zinc-500 p-2"
            name="category"
          >
            <option>Men (Official)</option>
            <option>Men (Casual)</option>
            <option>Women (Official)</option>
            <option>Women (Casual)</option>
            <option>Kids (Boys)</option>
            <option>Kids (Girls)</option>
           
          </select>
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="origin">Origin: </label>
          <input
            type="text"
            onChange={(e) => setOrigin(e.target.value)}
            value={origin}
            className="rounded bg-zinc-500 p-2"
            name="origin"
          />
        </div>
      </div>
      <div className="flex gap-20 ">
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="brandName">Brand Name: </label>
          <input
            type="text"
            onChange={(e) => setBrandName(e.target.value)}
            value={brandName}
            className="rounded bg-zinc-500 p-2"
            name="brandName"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="freshness">Freshness: </label>
          <input
            type="text"
            onChange={(e) => setFreshness(e.target.value)}
            value={freshness}
            className="rounded bg-zinc-500 p-2"
            name="freshness"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 ">
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          name="description"
          className=" rounded bg-zinc-500 p-5"
        />
      </div>
      <div className="flex gap-1 text-sm">
        <input
          type="checkbox"
          onChange={(e) => setStatus(e.target.checked)}
          checked={status}
          name="status"
          className=" rounded bg-zinc-500 p-5"
        />
        <label htmlFor="description">
          <b>Status</b> (show when checked){" "}
        </label>
      </div>
      <div className="flex justify-center ">
        <button
          type="submit"
          className=" bg-zinc-800 text-gray-400 p-2 pr-6 pl-6 rounded-md hover:bg-black hover:text-white "
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddCategory;
