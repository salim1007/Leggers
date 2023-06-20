import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MotionText from "./MotionText";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import axios from "axios";
import { Link } from "react-router-dom";
import DateTimeDisplay from "./DateTimeDisplay";
import Logo from "./images/browniees-girl.jpg";
import {
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Collections = () => {
  const [menOfficial, setMenOfficial] = useState([]);
  const [womenOfficial, setWomenOfficial] = useState([]);
  const [boykids, setBoykids] = useState([]);
  const [girlkids, setGirlkids] = useState([]);
  const [menCasual, setMenCasual] = useState([]);
  const [womenCasual, setWomenCasual] = useState([]);

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

  useEffect(() => {
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
    <div className=" bg-amber-600 h-full w-full ">
      <Navbar />

      <div className="  relative grid grid-cols-3 mt-8">
        <div className=" ml-4 mr-24 bg-white h-72 rounded-lg p-4 font-bold flex flex-col gap-2">
          <p className=" italic">Discounts</p>
          <div className="bg-blue-400 h-56 rounded-md   ">
            <p className=" ml-2 mr-2 flex items-start justify-start">
              <MotionText />
            </p>
            <div className="flex flex-col items-center justify-center gap-3 ">
              <p>Get A</p>
              <p className=" text-8xl">40%</p>
              <p>Discount</p>
            </div>
          </div>
        </div>
        <div className=" -ml-14 -mr-14 bg-indigo-500 h-72 rounded-lg p-4 font-bold ">
          <p className="flex mb-2 italic">Trending</p>
          <div className="bg-slate-600 h-56 rounded-lg">
            <ImageSlider />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className=" mr-4 ml-24 bg-red-600 h-32 rounded-lg p-4 font-bold flex flex-col  ">
            <div>
              <DateTimeDisplay />
            </div>
          </div>
          <div className=" mr-4 ml-24 bg-red-600 h-32 rounded-lg p-4 font-bold  ">
            <div className=" bg-orange-500 h-16 rounded-md">
              <p className=" ml-2 mr-2 ">
                Be sure to visit on holidays for the best deals
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col mt-10 gap-6 ">
        <div className="flex mt-8 bg-slate-600 w-fit p-4 rounded rounded-l-none rounded-r-3xl">
          <p className=" w-48 flex justify-center items-center font-bold italic">
            Men
          </p>
        </div>

        <div>
          <p className="bg-slate-600 w-28 p-2 ml-4 pl-6 rounded rounded-b-none rounded-tr-3xl text-white">
            Casual
          </p>
          <div className=" bg-green-600 ml-4 mr-4 rounded-md rounded-tl-none h-80 flex flex-col justify-evenly p-4  ">
            <Carousel responsive={responsive}>
              {menCasual.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" bg-slate-500 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs mb-2">{item.description}</p>
                      <p>
                        <Link
                          to={`/collections/${item.category_id}/${item.prSection}/${item.name}`}
                          className="text-xs text-white bg-black p-2 rounded-md"
                        >
                          Add to Cart
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div>
          <p className="bg-slate-600 w-28 p-2 ml-4 pl-6 rounded rounded-b-none rounded-tr-3xl text-white">
            Official
          </p>
          <div className=" bg-green-600 ml-4 mr-4 rounded-md rounded-tl-none h-80 flex flex-col justify-evenly p-4  ">
            <Carousel responsive={responsive}>
              {menOfficial.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" bg-slate-500 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs mb-2">{item.description}</p>
                      <p>
                        <Link
                          to={`/collections/${item.category_id}/${item.prSection}/${item.name}`}
                          className="text-xs text-white bg-black p-2 rounded-md"
                        >
                          Add to Cart
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="flex mt-8 bg-slate-600 w-fit p-4 rounded rounded-l-none rounded-r-3xl">
          <p className=" w-48 flex justify-center items-center font-bold italic">
            Women
          </p>
        </div>
        <div>
          <p className="bg-slate-600 w-28 p-2 pl-6 ml-4 rounded rounded-b-none rounded-tr-3xl text-white  ">
            Casual
          </p>
          <div className=" bg-indigo-900 ml-4 mr-4 rounded-md rounded-tl-none h-80 flex flex-col justify-evenly p-4  ">
            <Carousel responsive={responsive}>
              {womenCasual.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" bg-slate-500 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs mb-2">{item.description}</p>
                      <p>
                        <Link
                          to={`/collections/${item.category_id}/${item.prSection}/${item.name}`}
                          className="text-xs text-white bg-black p-2 rounded-md"
                        >
                          Add to Cart
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div>
          <p className="bg-slate-600 w-28 p-2 pl-6 ml-4 rounded rounded-b-none rounded-tr-3xl text-white  ">
            Official
          </p>
          <div className=" bg-indigo-900 ml-4 mr-4 rounded-md rounded-tl-none h-80 flex flex-col justify-evenly p-4  ">
            <Carousel responsive={responsive}>
              {womenOfficial.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" bg-slate-500 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs mb-2">{item.description}</p>
                      <p>
                        <Link
                          to={`/collections/${item.category_id}/${item.prSection}/${item.name}`}
                          className="text-xs text-white bg-black p-2 rounded-md"
                        >
                          Add to Cart
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="flex mt-8 bg-slate-600 w-fit p-4 rounded rounded-l-none rounded-r-3xl">
          <p className=" w-48 flex justify-center items-center font-bold italic">
            Kids
          </p>
        </div>

        <div className="#">
          <p className="bg-slate-600 w-28 p-2 pl-6 ml-4 rounded rounded-b-none rounded-tr-3xl text-white  ">
            Boys
          </p>
          <div className=" bg-amber-400 ml-4 mr-4 rounded-md rounded-tl-none h-80 flex flex-col justify-evenly p-4  ">
            <Carousel responsive={responsive}>
              {boykids.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" bg-slate-500 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs mb-2">{item.description}</p>
                      <p>
                        <Link
                          to={`/collections/${item.category_id}/${item.prSection}/${item.name}`}
                          className="text-xs text-white bg-black p-2 rounded-md"
                        >
                          Add to Cart
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="#">
          <p className="bg-slate-600 w-28 p-2 pl-6 ml-4 rounded rounded-b-none rounded-tr-3xl text-white  ">
            Girls
          </p>
          <div className=" bg-amber-400 ml-4 mr-4 rounded-md rounded-tl-none h-80 flex flex-col justify-evenly p-4  ">
            <Carousel responsive={responsive}>
              {girlkids.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" bg-slate-500 h-72 w-40 flex flex-col rounded"
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs mb-2">{item.description}</p>
                      <p>
                        <Link
                          to={`/collections/${item.category_id}/${item.prSection}/${item.name}`}
                          className="text-xs text-white bg-black p-2 rounded-md"
                        >
                          Add to Cart
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
      <div className=" flex flex-col h-fit  bg-zinc-700 mt-24 ">
        <div className=" bg-zinc-700  flex flex-row h-fit justify-evenly gap-32 p-8 text-xs ">
          <div className="w-20">
            <img
              src={Logo}
              className="object-scale-down h-44 w-44 rounded"
              alt=""
            />
          </div>
          <div className="w-32 flex flex-col gap-2">
            <p className="font-bold">About</p>
            <div>
              We are a premier shoe selling company specializing in a carefully
              curated collection of shoes from seven exceptional brands. With a
              deep passion for style, quality, and comfort, we strive to bring
              you the finest selection of shoes to meet your fashion needs.
            </div>
          </div>

          <div className="w-32 flex flex-col gap-2">
            <p className="font-bold">My Account</p>
            <div className=" flex flex-col ">
              <Link to="/register">Sign In / Register</Link>
              <Link to="/cart">My Cart</Link>
              
            </div>
          </div>
          <div className="w-32 flex flex-col gap-2">
            <p className="font-bold">Neighbouring Market</p>
            <div>
              The neighbouring market of Kenya and Uganda presents a significant
              opportunity for shoe selling companies aiming to expand their
              reach in East Africa. Leggerz has Kenya and Uganda as market.
            </div>
          </div>
          <div className="w-32 flex flex-col gap-2">
            <p className="font-bold">Security</p>
            <div className=" flex flex-col">
              <Link>Privacy Policy</Link>
              <Link>Terms of Service</Link>
              
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-500 my-4 ml-32 mr-32 flex justify-center items-center" />
        <div className="flex flex-row justify-center items-center gap-3 mb-4 mt-3">
          <Link>
            <FaFacebook className="mr-2 text-blue-500 text-2xl" />
          </Link>
          <Link>
            <FaInstagram className="mr-2 text-purple-500 text-2xl" />
          </Link>
          <Link>
            <FaTwitter className="mr-2 text-blue-400 text-2xl" />
          </Link>
          <Link>
            <FaWhatsapp className="mr-2 text-green-500 text-2xl" />
          </Link>
          <Link>
            <FaYoutube className="mr-2 text-red-500 text-2xl" />
          </Link>
        </div>
        <div>
          <p className=" flex text-xs justify-center items-center mb-10">
            Copyright &copy; {new Date().getFullYear()} Leggerz. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
