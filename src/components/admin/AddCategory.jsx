import React from "react";

const AddCategory = () => {
  return (
    <div className="flex flex-col p-10 gap-4 justify-center  ">
      <p className=" font-bold">ADD CATEGORY</p>
      <div className="flex gap-20 ">
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="category">Category: </label>
          <input type="text" className="rounded bg-gray-500 p-2" name="category" />
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="origin">Origin: </label>
          <input type="text" className="rounded bg-gray-500 p-2" name="origin" />
        </div>
      </div>
      <div className="flex gap-20 ">
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="brandName">Brand Name: </label>
          <input type="text" className="rounded bg-gray-500 p-2" name="brandName" />
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="freshness">Freshness: </label>
          <input type="text" className="rounded bg-gray-500 p-2" name="freshness" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 ">
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" className=" rounded bg-gray-500 p-5" />
      </div>
      <div className="flex justify-end ">
        <button className=" bg-gray-800 text-gray-400 p-2 pr-6 pl-6 rounded-md hover:bg-black hover:text-white " >Add</button>
      </div>
    </div>
  );
};

export default AddCategory;
