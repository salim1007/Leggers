import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const AddCategory = () => {
  const [categoryFetch, setCateFetch] = useState([]);

  const [status, setStatus] = useState([]);

  const [category, setCategory] = useState("");
  const [origin, setOrigin] = useState("");
  const [brandName, setBrandName] = useState("");
  const [section, setSection] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get(`/api/get-category`).then((res) => {
      if (res.data.status === 200) {
        setCateFetch(res.data.category);
      }
    });
  }, []);

  const categorySubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/add-category`, {
        category,
        origin,
        brandName,
        section,
        description,
        status: status ? 1 : 0,
      })
      .then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
        } else if (res.data.status === 400) {
          swal("Error", res.data.message, "error");
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
            className="rounded bg-gray-500 p-2"
            name="category"
          >
            <option>Select category</option>
            {categoryFetch.map((item) => {
              return (
                <option value={item.category} key={item.id}>
                  {item.category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="origin">Origin: </label>
          <input
            type="text"
            onChange={(e) => setOrigin(e.target.value)}
            value={origin}
            className="rounded bg-gray-500 p-2"
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
            className="rounded bg-gray-500 p-2"
            name="brandName"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="section">Section: </label>
          <input
            type="text"
            onChange={(e) => setSection(e.target.value)}
            value={section}
            className="rounded bg-gray-500 p-2"
            name="section"
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
          className=" rounded bg-gray-500 p-5"
        />
      </div>
      <div className="flex gap-1 text-sm">
        <input
          type="checkbox"
          onChange={(e) => setStatus(e.target.checked)}
          checked={status}
          name="status"
          className=" rounded bg-gray-500 p-5"
        />
        <label htmlFor="description">
          <b>Status</b> (show when checked){" "}
        </label>
      </div>
      <div className="flex justify-center ">
        <button
          type="submit"
          className=" bg-gray-800 text-gray-400 p-2 pr-6 pl-6 rounded-md hover:bg-black hover:text-white "
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddCategory;
