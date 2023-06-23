import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  // const [categoryFetch, setCateFetch] = useState([]);
  const [brandFetch, setBrandFetch] = useState([]);
  // const [sectionFetch, setSectionFetch] = useState([]);
  const [productInputs, setProductInputs] = useState({
    category_id: "",
    brand_id: "",
    originalPrice: "",
    name: "",
    colour: "",
    sellingPrice: "",
    qty: "",
    size: "",
    prSection: "",
    image: "",
    description: "",
    popular: false,
    featured: false,
    status: false,
  });

  let { id } = useParams();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductInputs((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    axios.get(`/api/get-category`).then((res) => {
      if (res.data.status === 200) {
        setBrandFetch(res.data.category);
      }
    });

    axios.get(`/api/edit-product/` + id).then((res) => {
      if (res.data.status === 200) {
        setProductInputs(res.data.product);
      }
    });
  }, []);

  const editProductSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/update-product/` + id, productInputs).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          text: "Success!",
          timer: 3000,
        });
      } else if (res.data.status === 400) {
        Swal.fire({
          icon: "error",
          title: res.data.message,
          text: "Error!",
          timer: 3000,
        });
      }
    });
  };

  return (
    <form
      onSubmit={editProductSubmit}
      className="flex flex-col p-4 ml-28 gap-4"
      encType="multipart/form-data"
    >
      <p className="font-bold">EDIT PRODUCT</p>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="category_id">Category: </label>
          <select
            type="text"
            onChange={handleChange}
            value={productInputs.category_id || ""}
            className=" bg-gray-500 rounded p-2"
            name="category_id"
          >
            <option>Select Category</option>
            <option>Men (Official)</option>
            <option>Men (Casual)</option>
            <option>Women (Official)</option>
            <option>Women (Casual)</option>
            <option>Kids (Boys)</option>
            <option>Kids (Girls)</option>
          </select>
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="brand">Brand: </label>
          <select
            type="text"
            onChange={handleChange}
            value={productInputs.brand_id || ""}
            className=" bg-gray-500 rounded p-2"
            name="brand_id"
          >
            <option>Select Brand</option>
            {brandFetch.map((item) => {
              return (
                <option value={item.brandName} key={item.id}>
                  {item.brandName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="originalPrice">Original Price: </label>
          <input
            type="text"
            onChange={handleChange}
            value={productInputs.originalPrice || ""}
            className=" bg-gray-500 rounded p-2"
            name="originalPrice"
          />
        </div>
      </div>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            onChange={handleChange}
            value={productInputs.name || ""}
            className=" bg-gray-500 rounded p-2"
            name="name"
          />
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="colour">Colour: </label>
          <input
            type="text"
            onChange={handleChange}
            value={productInputs.colour || ""}
            className=" bg-gray-500 rounded p-2"
            name="colour"
          />
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="sellingPrice">Selling Price: </label>
          <input
            type="text"
            onChange={handleChange}
            value={productInputs.sellingPrice || ""}
            className=" bg-gray-500 rounded p-2"
            name="sellingPrice"
          />
        </div>
      </div>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="qty">Quantity: </label>
          <input
            type="text"
            onChange={handleChange}
            value={productInputs.qty || ""}
            className=" bg-gray-500 rounded p-2"
            name="qty"
          />
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="size">Size: </label>
          <input
            type="text"
            onChange={handleChange}
            value={productInputs.size || ""}
            className=" bg-gray-500 rounded p-2"
            name="size"
          />
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="prSection">Product Section: </label>
          <select
            type="text"
            onChange={handleChange}
            value={productInputs.prSection || ""}
            className=" bg-gray-500 rounded p-2"
            name="prSection"
          >
            <option>Select Section:</option>
            <option>Boys</option>
            <option>Girls</option>
            <option>Casual (M)</option>
            <option>Casual (W)</option>
            <option>Official (M)</option>
            <option>Official (W)</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-3/5 gap-2">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            onChange={handleChange}
            value={productInputs.description || ""}
            className=" bg-gray-500 rounded p-3"
            name="description"
          />
        </div>
        <div className="flex flex-col w-2/5 gap-2">
          <label htmlFor="image">Image: </label>

          <img
            src={`http://localhost:8000/${productInputs.image}`}
            className="rounded-md w-12"
          />
        </div>
      </div>
      <div className="flex flex-row gap-2 mt-4 justify-start">
        <div className=" flex flex-row items-centre gap-2">
          <label className="text-sm">
            <b>Popular</b> (show when checked)
          </label>
          <input
            className="flex "
            type="checkbox"
            onChange={handleChange}
            checked={productInputs.popular}
            name="popular"
          />
        </div>
        <div className=" flex flex-row items-centre gap-2">
          <label className="text-sm">
            <b>Featured</b> (show when checked)
          </label>
          <input
            className="flex "
            type="checkbox"
            onChange={handleChange}
            checked={productInputs.featured}
            name="featured"
          />
        </div>
        <div className=" flex flex-row items-centre gap-2">
          <label className="text-sm">
            <b>Status</b> (show when checked)
          </label>
          <input
            className="flex "
            type="checkbox"
            onChange={handleChange}
            checked={productInputs.status}
            name="status"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <button className=" bg-gray-800 text-gray-400 p-2 pr-6 pl-6 mr-32 rounded-md hover:bg-black hover:text-white ">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditProduct;
