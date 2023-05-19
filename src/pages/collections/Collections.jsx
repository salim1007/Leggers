import React from "react";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from "../collections/images/brownn-office.jpg";
import Logo2 from "../collections/images/browniees-girl.jpg";
import Logo3 from "../collections/images/girl-blue.jpg";
import Logo4 from "../collections/images/gray-girl.jpg";
import MotionText from "./MotionText";

const Collections = () => {
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
            <p className=" ml-2 mr-2">here and there</p>
          </div>
        </div>
        <div className=" mr-4 ml-24 bg-red-600 h-72 rounded-lg p-4 font-bold  ">
          <p>New Products</p>
          <div className=" bg-orange-500 h-56">
            <p className=" ml-2 mr-2">here and there</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col mt-10 gap-6 ">
        <div>
          <p className="bg-slate-600 w-28 p-2 ml-4 pl-6 rounded rounded-b-none rounded-tr-3xl text-white">
            Men
          </p>
          <div className=" bg-green-600 ml-4 mr-4 rounded-md rounded-tl-none h-80 flex flex-col justify-evenly p-4  ">
            <Carousel responsive={responsive}>
              <div className=" bg-slate-600 h-72 w-40 flex flex-col rounded  ">
                <img
                  src={Logo}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo2}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-zinc-600 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo3}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div>
          <p className="bg-slate-600 w-28 p-2 pl-6 ml-4 rounded rounded-b-none rounded-tr-3xl text-white  ">
            Women
          </p>
          <div className=" bg-indigo-900 ml-4 mr-4 rounded-md rounded-tl-none h-80 flex flex-col justify-evenly p-4  ">
            <Carousel responsive={responsive}>
              <div className=" bg-slate-600 h-72 w-40 flex flex-col rounded  ">
                <img
                  src={Logo}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo2}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-zinc-600 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo3}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        <div className="#">
          <p className="bg-slate-600 w-28 p-2 pl-6 ml-4 rounded rounded-b-none rounded-tr-3xl text-white  ">
            Kids
          </p>
          <div className=" bg-amber-400 ml-4 mr-4 rounded-md rounded-tl-none h-80 flex flex-col justify-evenly p-4  ">
            <Carousel responsive={responsive}>
              <div className=" bg-slate-600 h-72 w-40 flex flex-col rounded  ">
                <img
                  src={Logo}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo2}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-zinc-600 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo3}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
              <div className=" bg-blue-400 h-72 w-40 flex flex-col rounded ">
                <img
                  src={Logo4}
                  alt="Office Shoes"
                  className="object-scale-down h-fit w-fit rounded-b-none rounded"
                />
                <div className=" mt-4  flex flex-col items-center gap-1  ">
                  <h2 className=" text-xs font-bold">Office shoes</h2>
                  <p className=" text-xs">$20.87</p>
                  <p className=" text-xs">Description over here</p>
                  <p>
                    <button className="text-xs text-white bg-black p-2 rounded-md">
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className=" bg-zinc-700 mt-24 flex flex-row justify-between p-6">
        <div>
          <p>Contact Us:</p>
          <div>sklalkf adlfkmakdmf falflafmadf adfmladfma</div>
        </div>
        <div>
          <p>Neighbouring Market:</p>
          <div>sklalkf adlfkmakdmf falflafmadf adfmladfma</div>
        </div>
        <div>
          <p>Security:</p>
          <div>sklalkf adlfkmakdmf falflafmadf adfmladfma</div>
        </div>
        <div>
          <p>About:</p>
          <div>sklalkf adlfkmakdmf falflafmadf adfmladfma</div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
