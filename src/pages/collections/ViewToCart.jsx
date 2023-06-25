import React, { useEffect, useState } from "react";
import AuthNav from "../../components/admin/products/AuthNav";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { ShoppingCart } from "@mui/icons-material";

const ViewToCart = () => {
  const [fetchAll, setFetchAll] = useState([]);

  const [product, setFetchProduct] = useState([]);

  let { categoryid, section, namee } = useParams();

  useEffect(() => {
    let IsMounted = true;

    axios
      .get(
        `/api/viewproductdetails/` + categoryid + `/` + section + `/` + namee
      )
      .then((res) => {
        if (IsMounted) {
          if (res.data.status === 200) {
            setFetchProduct(res.data.product);
          }
        } else if (res.data.status === 404) {
          navigate("/collections");
          swal("Warning ", res.data.message, "error");
        }
      });

    axios.get(`/api/fetch-products`).then((res) => {
      if (res.data.status === 200) {
        setFetchAll(res.data.products);
      }
    });

    return () => {
      IsMounted = false;
    };
  }, [categoryid, section, namee]);

  const submitAddToCart = (e) => {
    e.preventDefault();

    if (product.length === 0) {
      alert("Empty!!");
      return;
    }

    const selectedProduct = product[0]; // Access the first item in the product array(important..)
    const {
      id: product_id,
      name: product_name,
      image: product_image,
      sellingPrice: product_sellPrice,
      colour: product_colour,
      size: product_size,
      brand_id: product_brand,
    } = selectedProduct;

    const data = {
      product_id,
      product_name,
      product_image,
      product_sellPrice,
      product_colour,
      product_size,
      product_brand,
    };
    axios.post(`/api/add-to-cart`, data).then((res) => {
      if (res.data.status === 201) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          text: "Success!",
          timer: 3000,
        });
      }
      //Already Added To Cart...
      else if (res.data.status === 409) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          text: "Success!",
          timer: 3000,
        });
      } else if (res.data.status === 401) {
        Swal.fire({
          icon: "warning",
          title: res.data.message,

          timer: 3000,
        });
      } else if (res.data.status === 404) {
        console.log(data);
        Swal.fire({
          icon: "error",
          title: res.data.message,
          text: "Error!",
          timer: 3000,
        });
      }
    });
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-auto scrollbar-hidden ">
      <div>
        <AuthNav />
      </div>

      <div className="bg-blue-300 flex flex-row justify-between gap-10 w-full ">
        <div className=" bg-amber-600 flex flex-row w-full justify-between h-72 shadow-lg">
          {product.map((item) => {
            return (
              <div key={item.id} className=" flex flex-col">
                <div className=" bg-amber-600 p-4 h-8 italic items-center flex flex-row justify-start drop-shadow-lg w-full ">
                  {item.category_id}/ {item.prSection}/ {item.name}
                </div>
                <div className=" flex flex-row w-screen gap-12">
                  <div className=" flex flex-row gap-6 w-screen ">
                    <div className="flex bg-yellow-500 ml-4 mt-4 mb-4 h-56 shadow-xl rounded-xl  ">
                      <img
                        src={`http://localhost:8000/${item.image}`}
                        alt={item.name}
                        className="flex justify-center items-center w-full rounded-xl"
                      />
                    </div>
                    <div className="flex bg-gray-600 shadow-xl  w-1/2 ml-4 mt-4 mb-4 h-56 flex-col justify-center  rounded-xl p-6  ">
                      <div className=" flex flex-row justify-between">
                        <div className="flex gap-2 flex-col font-bold italic">
                          <p>Name :</p>
                          <p>Brand :</p>
                          <p>Colour :</p>
                          <label>Size :</label>

                          <p>Price :</p>
                        </div>
                        <div className="flex gap-2 flex-col font-bold italic">
                          <p>{item.name}</p>
                          <p>{item.brand_id} </p>
                          <p>{item.colour} </p>

                          <p>
                            <select>
                              <option> 32</option>
                              <option> 33</option>
                              <option> 34</option>
                              <option> 35</option>
                              <option> 36</option>
                            </select>
                          </p>
                          <p>{item.sellingPrice}</p>
                        </div>
                      </div>
                      <button
                        onClick={submitAddToCart}
                        className="flex mt-2 bg-black text-white hover:text-amber-200 p-2 justify-center items-center rounded-md w-full"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>

                  <div className="flex bg-gray-600 shadow-xl flex-col font-bold italic  w-2/3 h-fit mr-8 p-3 justify-center gap-3 items-center mt-4 mb-4  rounded-md">
                    <span className=" bg-black text-white p-2 flex justify-center rounded-md w-full font-bold">
                      Product Description
                    </span>
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex bg-gray-700 h-fit w-screen">
        <div className=" h-64 flex">
          <div>
            <div className=" bg-amber-600 w-screen h-96 flex flex-col justify-evenly p-4  ">
              <span className=" font-bold mb-4 shadow-lg w-fit p-3 italic rounded-3xl rounded-l-none ">
                Other Products you may like
              </span>
              <Carousel responsive={responsive}>
                {fetchAll.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className=" bg-slate-600 h-72 w-40 flex flex-col rounded  "
                    >
                      <img
                        src={`http://localhost:8000/${item.image}`}
                        alt={item.name}
                        className="object-scale-down h-fit w-fit rounded-b-none rounded"
                      />
                      <div className=" mt-4  flex flex-col items-center gap-1  ">
                        <p className=" text-xs">{item.brand_id}</p>
                        <h2 className=" text-xs font-bold">{item.name}</h2>
                        <p className=" text-xs mb-2">{item.sellingPrice}</p>

                        <p>
                          <Link
                            to={`/collections/${item.category_id}/${item.prSection}/${item.name}`}
                            className="text-xs bg-slate-500 hover:bg-black hover:text-white text-black p-2 rounded-md"
                          >
                            <ShoppingCart />
                          </Link>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewToCart;
