import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from "../collections/images/brownn-office.jpg";
import Logo2 from "../collections/images/browniees-girl.jpg";
import Logo3 from "../collections/images/girl-blue.jpg";
import Logo4 from "../collections/images/gray-girl.jpg";
import MotionText from "./MotionText";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import axios from "axios";

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

      <div className=" grid grid-cols-3 mt-8">
        <div className=" ml-4 mr-24 bg-white h-72 rounded-lg p-4 font-bold">
          <p>Discounts</p>
          <div className="bg-blue-400 h-56  ">
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
          <p>Trending</p>
          <div className="bg-slate-600 h-56">
            <ImageSlider />
          </div>
        </div>
       <div className="flex flex-col gap-8">
       <div className=" mr-4 ml-24 bg-red-600 h-32 rounded-lg p-4 font-bold  ">
          <p>New Products</p>
          <div className=" bg-orange-500 h-16 ">
            <p className=" ml-2 mr-2">Date and time</p>
          </div>
        </div>
        <div className=" mr-4 ml-24 bg-red-600 h-32 rounded-lg p-4 font-bold  ">
          <p>New Products</p>
          <div className=" bg-orange-500 h-16">
            <p className=" ml-2 mr-2">Visit on holidays</p>
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
                    className=" bg-slate-600 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs">{item.description}</p>
                      <p>
                        <button className="text-xs text-white bg-black p-2 rounded-md">
                          Add to Cart
                        </button>
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
                    className=" bg-slate-600 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs">{item.description}</p>
                      <p>
                        <button className="text-xs text-white bg-black p-2 rounded-md">
                          Add to Cart
                        </button>
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
                    className=" bg-slate-600 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs">{item.description}</p>
                      <p>
                        <button className="text-xs text-white bg-black p-2 rounded-md">
                          Add to Cart
                        </button>
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
                    className=" bg-slate-600 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs">{item.description}</p>
                      <p>
                        <button className="text-xs text-white bg-black p-2 rounded-md">
                          Add to Cart
                        </button>
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
                    className=" bg-slate-600 h-72 w-40 flex flex-col rounded  "
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs">{item.description}</p>
                      <p>
                        <button className="text-xs text-white bg-black p-2 rounded-md">
                          Add to Cart
                        </button>
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
                    className=" bg-slate-600 h-72 w-40 flex flex-col rounded"
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt={item.name}
                      className="object-scale-down h-fit w-fit rounded-b-none rounded"
                    />
                    <div className=" mt-4  flex flex-col items-center gap-1  ">
                      <h2 className=" text-xs font-bold">{item.name}</h2>
                      <p className=" text-xs">{item.sellingPrice}</p>
                      <p className=" text-xs">{item.description}</p>
                      <p>
                        <button className="text-xs text-white bg-black p-2 rounded-md">
                          Add to Cart
                        </button>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className=" bg-zinc-700 mt-24 flex flex-row justify-evenly gap-32 p-6">
        <div className="w-20">
          <p className="font-bold">Contact Us:</p>
          <div>sklalkf adlfkmakdmf falflafmadf adfmladfma</div>
        </div>
        <div className="w-20">
          <p className="font-bold">Neighbouring Market:</p>
          <div>sklalkf adlfkmakdmf falflafmadf adfmladfma</div>
        </div>
        <div className="w-20">
          <p className="font-bold">Security:</p>
          <div>sklalkf adlfkmakdmf falflafmadf adfmladfma</div>
        </div>
        <div className="w-20">
          <p className="font-bold">About:</p>
          <div>sklalkf adlfkmakdmf falflafmadf adfmladfma hskskdksdsdh skdkhdshds dskhdshk </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
