import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";


const AddProduct = () => {
  const [categoryFetch, setCateFetch] = useState([]);
  const [brandFetch, setBrandFetch] = useState([]);
 

  const [allcheckbox, setCheckboxes] = useState([]);

  const [picture, setImage] = useState("");

  const [category_id, setCategoryId] = useState("");
  const [brand_id, setBrandId] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [name, setName] = useState("");
  const [colour, setColour] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [qty, setQty] = useState("");
  const [size, setSize] = useState("");
  const [prSection, setSection] = useState("");
  const [description, setDescription] = useState("");

  const handleImage = (e) => {
    setImage({ image: e.target.files[0] });
  };

  const handleCheckbox = (e) => {
    e.persist();
    setCheckboxes({ ...allcheckbox, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    axios.get(`/api/get-category`).then((res) => {
      if (res.data.status === 200) {
        setCateFetch(res.data.category);
        setBrandFetch(res.data.category);
       
      }
    }); 
  }, []);

  const productSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", picture.image);

    formData.append("category_id", category_id);
    formData.append("brand_id", brand_id);
    formData.append("originalPrice", originalPrice);
    formData.append("name", name);
    formData.append("colour", colour);
    formData.append("sellingPrice", sellingPrice);
    formData.append("qty", qty);
    formData.append("size", size);
    formData.append("prSection", prSection);
    formData.append("description", description);
    formData.append("featured", allcheckbox.featured ? "1" : "0");
    formData.append("popular", allcheckbox.popular ? "1" : "0");
    formData.append("status", allcheckbox.status ? "1" : "0");

    axios.post(`/api/add-product`, formData).then((res) => {
      if (res.data.status === 200) {
        Swal.fire({
          icon: 'success',
          title: res.data.message,
          text: 'Success!',
         
        })
      } else if (res.data.status === 400) {
        Swal.fire({
          icon: 'error',
          title: res.data.message,
          text: 'Error!',
          
        })
      }
    });
  };

  return (
    <form onSubmit={productSubmit} className="flex flex-col p-4 ml-28 gap-4">
      <p className="font-bold">ADD PRODUCT</p>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="category_id">Category: </label>
          <select
            type="text"
            onChange={(e) => setCategoryId(e.target.value)}
            value={category_id}
            className=" bg-gray-500 rounded p-2"
            name="category_id"
          >
            <option>Select Category</option>
            {categoryFetch.map((item, idx) => {
              return (
                <option value={item.category} key={idx}>
                  {item.category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="brand">Brand: </label>
          <select
            type="text"
            onChange={(e) => setBrandId(e.target.value)}
            value={brand_id}
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
            onChange={(e) => setOriginalPrice(e.target.value)}
            value={originalPrice}
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
            onChange={(e) => setName(e.target.value)}
            value={name}
            className=" bg-gray-500 rounded p-2"
            name="name"
          />
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="colour">Colour: </label>
          <input
            type="text"
            onChange={(e) => setColour(e.target.value)}
            value={colour}
            className=" bg-gray-500 rounded p-2"
            name="colour"
          />
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="sellingPrice">Selling Price: </label>
          <input
            type="text"
            onChange={(e) => setSellingPrice(e.target.value)}
            value={sellingPrice}
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
            onChange={(e) => setQty(e.target.value)}
            value={qty}
            className=" bg-gray-500 rounded p-2"
            name="qty"
          />
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="size">Size: </label>
          <input
            type="text"
            onChange={(e) => setSize(e.target.value)}
            value={size}
            className=" bg-gray-500 rounded p-2"
            name="size"
          />
        </div>
        <div className="flex flex-col w-1/4 gap-2">
          <label htmlFor="prSection">Product Section: </label>
          <select
            type="text"
            onChange={(e) => setSection(e.target.value)}
            value={prSection}
            className=" bg-gray-500 rounded p-2"
            name="prSection"
          >
            <option>Official (M)</option>
            <option>Casual (M)</option>
            <option>Official (W)</option>
            <option>Casual (W)</option>
            <option>Boys</option>
            <option>Girls</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-2/5 gap-2">
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            onChange={handleImage}
            className=" bg-gray-500 rounded p-2"
            name="image"
          />
        </div>
        <div className="flex flex-col w-2/5 gap-2">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className=" bg-gray-500 rounded p-3"
            name="description"
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
            onChange={handleCheckbox}
            defaultChecked={allcheckbox.popular === 1 ? true : false}
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
            onChange={handleCheckbox}
            defaultChecked={allcheckbox.featured === 1 ? true : false}
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
            onChange={handleCheckbox}
            defaultChecked={allcheckbox.status === 1 ? true : false}
            name="status"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <button className=" bg-gray-800 text-gray-400 p-2 pr-6 pl-6 mr-32 rounded-md hover:bg-black hover:text-white ">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
