import React from "react";

const AddProduct = () => {
  return (
    <div className="flex flex-col p-8 gap-4">
      <p className="font-bold">ADD PRODUCT</p>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="category">Category: </label>
          <input type="text" className=" bg-gray-500 rounded p-2" name="category" />
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="brand">Brand: </label>
          <input type="text" className=" bg-gray-500 rounded p-2" name="brand" />
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="originalPrice">Original Price: </label>
          <input type="text" className=" bg-gray-500 rounded p-2" name="originalPrice" />
        </div>
      </div>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="name">Name: </label>
          <input type="text" className=" bg-gray-500 rounded p-2" name="name" />
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="colour">Colour: </label>
          <input type="text" className=" bg-gray-500 rounded p-2" name="colour" />
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="sellingPrice">Selling Price: </label>
          <input type="text" className=" bg-gray-500 rounded p-2" name="sellingPrice" />
        </div>
      </div>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="qty">Quantity: </label>
          <input type="text" className=" bg-gray-500 rounded p-2" name="qty" />
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="size">Size: </label>
          <input type="text" className=" bg-gray-500 rounded p-2" name="size" />
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="prFresh">Freshness: </label>
          <input type="text" className=" bg-gray-500 rounded p-2" name="prFresh" />
        </div>
      </div>
      <div className="flex flex-row gap-12 ">
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="image">Image: </label>
          <input type="file" className=" bg-gray-500 rounded p-2" name="image" />
        </div>
        <div className="flex flex-col w-2/3 gap-2">
          <label htmlFor="description">Description: </label>
          <input type="text" className=" bg-gray-500 rounded p-3" name="description" />
        </div>
        
      </div>
      <div className="flex justify-end ">
        <button className=" bg-gray-800 text-gray-400 p-2 pr-6 pl-6 rounded-md hover:bg-black hover:text-white " >Add</button>
      </div>
    </div>
  );
};

export default AddProduct;
