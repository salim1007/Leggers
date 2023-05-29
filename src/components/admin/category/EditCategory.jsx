import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const EditCategory = () => {
  const [categoryFetch, setCateFetch] = useState([]);
  const [categoryInput, setCategoryInput] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios.get(`/api/get-category`).then((res) => {
      if (res.data.status === 200) {
        setCateFetch(res.data.category);
      }
    });

    axios.get(`/api/edit-category/` + id).then((res) => {
      if (res.data.status === 200) {
        setCategoryInput(res.data.category);
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCategoryInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const editCategorySubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/update-category/` + id, categoryInput).then((res) => {
      if (res.data.status === 200) {
        swal("Success", res.data.message);
      } else if (res.data.status === 400) {
        swal("Error", res.data.message);
      }
    });
  };

  return (
    <form
      onSubmit={editCategorySubmit}
      className="flex flex-col p-10 gap-4 justify-center  "
    >
      <p className=" font-bold">ADD CATEGORY</p>
      <div className="flex gap-20 ">
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="category">Category: </label>
          <select
            type="text"
            onChange={handleChange}
            value={categoryInput.category || ""}
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
            onChange={handleChange}
            value={categoryInput.origin || ""}
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
            onChange={handleChange}
            value={categoryInput.brandName || ""}
            className="rounded bg-gray-500 p-2"
            name="brandName"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="section">Section: </label>
          <input
            type="text"
            onChange={handleChange}
            value={categoryInput.section || ""}
            className="rounded bg-gray-500 p-2"
            name="section"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 ">
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          onChange={handleChange}
          value={categoryInput.description || ""}
          name="description"
          className=" rounded bg-gray-500 p-5"
        />
      </div>
      <div className="flex gap-1 text-sm">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={categoryInput.status || ""}
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
          Update
        </button>
      </div>
    </form>
  );
};

export default EditCategory;
