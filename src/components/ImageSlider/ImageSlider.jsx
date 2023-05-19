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
        <img className=" h-56 w-fit rounded-lg rounded-tr-none rounded-br-none" src={images[index]} alt="Slider" />
        <div className="p-3">
            <p>Description written on this side of the div</p>
        </div>
    </div>
  );
}

export default ImageSlider;
