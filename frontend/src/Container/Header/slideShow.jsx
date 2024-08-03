import "./SlideShow.css";
import React, { useEffect, useState } from "react";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

const images = [
  { image: img1, alt: "image" },
  { image: img2, alt: "image" },
  { image: img3, alt: "image" },
  { image: img4, alt: "image" },
];

const SlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          className={index === currentImageIndex ? "active" : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default SlideShow;
