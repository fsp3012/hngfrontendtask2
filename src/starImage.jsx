import React, { useState } from "react";
import star from './assets/Star.png'

const StarImage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); 
  };

  const imageStyle = {
    filter: clicked ? "brightness(1.5)" : "brightness(1)", 
    cursor: "pointer",
  };

  return (
    <img
      src={star}
      alt=""
      onClick={handleClick}
      style={imageStyle}
    />
  );
};

export default StarImage;
