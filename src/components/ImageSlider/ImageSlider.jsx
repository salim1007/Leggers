import React, { useState, useEffect } from "react";
import Logo3 from "../../pages/collections/images/girl-blue.jpg";
import Logo2 from "../../pages/collections/images/browniees-girl.jpg";
import Logo from "../../pages/collections/images/brownn-office.jpg";



function ImageSlider() {
  // state variables for the index and image array
  const [index, setIndex] = useState(0);
  const images = [Logo3,Logo, Logo2];

  // useEffect to increment the index and update the image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Render the current image
  return (
    <div className="flex flex-row">
        <img className=" h-56 w-fit rounded-lg rounded-tr-none rounded-br-none " src={images[index]} alt="Slider" />
        <div className="p-3 ml-1 text-md flex flex-col gap-3 ">
            <p>From sporty sneakers to elegant heels, casual loafers to statement boots, our 'Trending' section showcases a wide range of options to suit every occasion and personal style. </p>
            <p>Take your time to survey!</p>
        </div>
    </div>
  );
}

export default ImageSlider;
